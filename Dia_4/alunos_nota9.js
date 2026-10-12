let alunos = [ { nome: "Carlos", nota: 8 },{ nome: "Ana", nota: 9 }
];
let alunos_nota_9 =[];

alunos_nota_9 = alunos.filter(aluno => aluno.nota >= 9).map(aluno => aluno.nome);
console.log(alunos_nota_9);