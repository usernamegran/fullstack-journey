// 1. Objeto com método e uso do `this`
const usuario = {
  nome: "Gabriel",
  peso: 210,
  apresentar() {
    // `this.nome` acessa a propriedade 'nome' deste objeto
    return `Usuário: ${this.nome}, Peso: ${this.peso}kg`;
  }
};

console.log(usuario.apresentar());

// 2. Destructuring: extrai apenas o que precisa em novas variáveis
const { nome, peso } = usuario;
console.log(nome, peso); // Gabriel 110

// 3. Mesclando e atualizando de forma IMUTÁVEL com Spread (`...`)
const atualizacao = { peso: 208, objetivo: "Definição" };

// Cria um NOVO objeto mantendo os dados antigos e aplicando os novos por cima
const usuarioAtualizado = {
  ...usuario,
  ...atualizacao
};

console.log("Original intacto:", usuario);
console.log("Novo atualizado:", usuarioAtualizado);