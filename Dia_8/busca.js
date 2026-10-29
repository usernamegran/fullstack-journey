const numeros = [3, 7, 12, 18, 25, 31, 42];
const alvo = 18;

function buscaBinaria(lista, alvo) {
  let inicio = 0;
  let fim = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (lista[meio] === alvo) return meio;
    if (lista[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }

  return -1;
}

const resultado = buscaBinaria(numeros, alvo);
if (resultado !== -1) {
  console.log(`O número ${alvo} foi encontrado na posição ${resultado+1}.`);
} else {
  console.log(`O número ${alvo} não foi encontrado.`);
}