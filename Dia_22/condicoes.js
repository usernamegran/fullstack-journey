const idade = 20;
const matriculaAtiva = true;
const pagamentoEmDia = false;
const nome = "";

idade >= 18 ? console.log("Você é maior de idade") : console.log("Você é menor de idade");

if(matriculaAtiva && pagamentoEmDia){
    console.log("Você está matriculado e com o pagamento em dia");
}else{
    console.log("Você não está matriculado ou não está com o pagamento em dia");
}

const nomeExibido = nome ?? "Nome não informado";
console.log(nomeExibido);

console.log("" ?? "Desconhecido");   // ""
console.log(null ?? "Desconhecido"); // "Desconhecido"
console.log(undefined ?? "Desconhecido"); // "Desconhecido"

const aluno = {
    nome: "Gabriel"
};

console.log(aluno.endereco?.cidade);