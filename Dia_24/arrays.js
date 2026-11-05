const produtos = [
    { nome: "Camisa", preco: 50, categoria: "Roupas", estoque: 10 },
    { nome: "Calça", preco: 120, categoria: "Roupas", estoque: 5 },
    { nome: "Tênis", preco: 200, categoria: "Calçados", estoque: 0 },
    { nome: "Boné", preco: 40, categoria: "Acessórios", estoque: 8 },
    { nome: "Meia", preco: 20, categoria: "Acessórios", estoque: 15 }
];
let produtos2 = [];

const nomeprodutos = produtos.map(produto => produto.nome);
console.log(nomeprodutos);

const estoqueDisponivel = produtos.filter(produto => produto.estoque > 0);
console.log(estoqueDisponivel);

const valorTotalEstoque = produtos.reduce((total, produto) => total + produto.preco * produto.estoque, 0);
console.log(valorTotalEstoque);

const findtenis = produtos.find(produto => produto.nome === "Tênis");
console.log(findtenis);

const semestoque = produtos.some(produto => produto.estoque === 0);
console.log(semestoque);

const maisde10 = produtos.every(produto => produto.preco > 10);
console.log(maisde10);

produtos2 = produtos
    .filter(produto => produto.preco > 50)
    .map(produto => produto.nome);

console.log(produtos2);