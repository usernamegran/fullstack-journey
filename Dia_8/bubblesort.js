const numeros = [6, 3, 8, 2];

function bubbleSort(lista) {

  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
      if (numeros[j] > numeros[j + 1]) {
        // Trocar os elementos
        [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
      }
    }
  }

  return numeros;
}

const resultado = bubbleSort(numeros);
console.log(numeros.sort((a, b) => a - b));
console.log(resultado);