const readline = require('readline');
const fs = require('fs');
const path = require('path');

const arquivo = path.join(__dirname, 'tarefas.json');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas;
if(!fs.existsSync(arquivo)){
    tarefas = [];
}else{
    try{
        tarefas = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
        if(!Array.isArray(tarefas)){
            throw new Error("Formato de arquivo inválido");
        }
    }catch (err){
        console.log("Não foi possível carregar as tarefas. Iniciando uma lista vazia.");
        console.error("Detalhes técnicos:", err.message);
        tarefas = [];
    }
}

function salvarTarefas(){
    try{
        fs.writeFileSync(arquivo, JSON.stringify(tarefas, null, 2));
        return true;
    }catch(err){
        console.log("Não foi possível salvar as tarefas.");
        console.error("Detalhes técnicos:", err.message);
        return false;
    }
}

function obterIndiceTarefa(numero){
    if (isNaN(numero) || numero < 1 || !Number.isInteger(numero)) {
        return -1;
    }
    const index = numero - 1;
    if (index >= 0 && index < tarefas.length) {
        return index;
    } else {
        return -1;
    }
}

function exibirMenu() {
    rl.question("Digite uma opção: 1 - Adicionar tarefa. 2 - listar. 3 - Alterar Status atividade. 4 - remover. 5 - sair ", (opcao) => {
        switch (opcao) {
            case "1":
                rl.question("Digite a tarefa: ", (tarefa) => {
                    if (tarefa.trim() === '') {
                        console.log("Por favor, digite uma tarefa válida.");
                        exibirMenu();
                        return;
                    }
                    const tarefasAnteriores = [...tarefas];
                    tarefas.push({
                        tarefa: tarefa.trim(),
                        concluida: false
                    });
                    const salvou = salvarTarefas();
                    if(!salvou){
                        tarefas = tarefasAnteriores; // Reverte para o estado anterior
                        console.log("Erro ao salvar a tarefa. Tente novamente.");
                    } else {
                    console.log("Tarefa adicionada com sucesso!");
                    console.log("Tarefas:", tarefas);
                    }
                    exibirMenu();
                });
                break;
            case "2":
                console.log("Lista de tarefas:");
                if(tarefas.length === 0) {
                    console.log("Nenhuma tarefa encontrada.");
                }else{
                    const total = tarefas.length;
                    const concluidas = tarefas.filter(tarefa => tarefa.concluida).length;
                    const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length;
                    tarefas.forEach((tarefa, index) => {
                        
                        console.log(`${index + 1}. ${tarefa.tarefa} - ${tarefa.concluida ? "Concluída" : "Pendente"}`);
                    });
                    console.log(`Total: ${total} | Concluídas: ${concluidas} | Pendentes: ${pendentes}`);
                }
                exibirMenu();
                break;
    case "3":
    rl.question("Digite o número da tarefa a ser alternada: ", (numero) => {
        // Converte a entrada para número
        const numeroTarefa = Number(numero);

        // Verifica se a entrada é um número inteiro
        if (!Number.isInteger(numeroTarefa)) {
            console.log("Digite um número inteiro válido.");
        } else {
            // Obtém o índice da tarefa
            const index = obterIndiceTarefa(numeroTarefa);

            // Verifica se a tarefa existe
            if (index === -1) {
                console.log("Tarefa não encontrada.");
            } else {
                // Guarda o estado anterior da tarefa
                const estavaConcluida = tarefas[index].concluida;

                // Guarda o estado anterior para restaurar se o salvamento falhar
                const tarefasAnteriores = tarefas.map(tarefa => ({
                    ...tarefa
                }));

                // Inverte o estado: concluída vira pendente e vice-versa
                tarefas[index].concluida = !tarefas[index].concluida;

                // Tenta salvar as alterações no arquivo JSON
                const salvou = salvarTarefas();

                if (salvou) {
                    // Exibe a mensagem conforme o estado anterior
                    if (estavaConcluida) {
                        console.log("Tarefa voltou para pendente!");
                    } else {
                        console.log("Tarefa marcada como concluída!");
                    }
                } else {
                    // Restaura o estado anterior caso o salvamento falhe
                    tarefas = tarefasAnteriores;
                    console.log("Erro ao salvar a tarefa. O estado anterior foi restaurado.");
                }
            }
        }

        // Retorna ao menu após processar a opção
        exibirMenu();
    });
    break;
            case "4":
                rl.question("Digite o número da tarefa a ser removida: ", (numero) => {
                    const numeroTarefa = Number(numero);

                    if (!Number.isInteger(numeroTarefa)) {
                        console.log("Digite um número inteiro válido.");
                    } else {
                        const index = obterIndiceTarefa(numeroTarefa);

                        if (index !== -1) {
                            tarefas.splice(index, 1);
                            salvarTarefas();
                            console.log("Tarefa removida com sucesso!");
                        } else {
                            console.log("Tarefa não encontrada.");
                        }
                    }

                    exibirMenu();
                });
                break;
            case "5":
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                exibirMenu();
        }
    });
}

exibirMenu();
