
function contarPares(lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

console.log(contarPares([2, 5, 8, 11, 14]));
// Resultado esperado: 3