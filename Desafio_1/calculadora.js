const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual operação deseja realizar (+, -, *, /)?",(operacao) => {
    console.log(`Você escolheu a operação: ${operacao}`);
    rl.question("Digite o primeiro número: ", (num1) => {
        rl.question("Digite o segundo número: ", (num2) => {
            let numero1 = Number(num1);
            let numero2 = Number(num2);
            if(isNaN(numero1) || isNaN(numero2)) {
                console.log("Apenas números");
                rl.close();
                return;
            }
            if(num1.trim() === '' || num2.trim() === '') {
                console.log("Por favor, digite valores válidos.");
                rl.close();
                return;
            }
            let resultado;
            switch(operacao) {
                case '+':
                    resultado = numero1 + numero2;
                    break;
                case '-':
                    resultado = numero1 - numero2;
                    break;
                case '*':
                    resultado = numero1 * numero2;
                    break;
                case '/':
                    if(numero2 === 0) {
                        console.log("Erro: Divisão por zero não é permitida!");
                        rl.close();
                        return;
                    }
                    resultado = numero1 / numero2;
                    break;
                default:
                    console.log("Operação inválida!");
                    rl.close();
                    return;
            }
            console.log(`O resultado da operação é: ${resultado}`);
            rl.close();
        });
    });
});