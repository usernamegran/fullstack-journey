let alunos = [
    { nome: "Carlos", nota: 8 },
    { nome: "Ana", nota: 9 }
];

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 9) {
        console.log(alunos[i].nome);
    }
}