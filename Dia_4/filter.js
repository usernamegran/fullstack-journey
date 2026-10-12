let alunos = [
    { nome: "Carlos", nota: 8 },
    { nome: "Ana", nota: 9 }
];

let aprovados = alunos.filter(aluno => aluno.nota >= 9);
console.log(aprovados);