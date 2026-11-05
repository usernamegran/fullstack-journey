const planoTreino = {
    aluno: "Gabriel",
    exercicios: ["Supino", "Agachamento", "Levantamento Terra"],
    resumo(){
        return `Plano de treino do aluno ${this.aluno}: ${this.exercicios.join(", ")}`;
    }
}

console.log(planoTreino.resumo());

// 2. Destructuring: extrai apenas o que precisa em novas variáveis
const { aluno, exercicios } = planoTreino;
console.log(aluno, exercicios); // Gabriel ["Supino", "Agachamento", "Levantamento Terra"]

// 3. Mesclando e atualizando de forma IMUTÁVEL com Spread (`...`)
// Atualização imutável: altera o aluno e insere a nova chave status
const atualizacaoPlano = { 
  aluno: "Gabriel Silva", 
  status: "Ativo" 
};
const planoAtualizado = {
    ...planoTreino,
    ...atualizacaoPlano
};

console.log("Original intacto:", planoTreino);
console.log("Novo atualizado:", planoAtualizado);