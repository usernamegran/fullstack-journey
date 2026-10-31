
function encontrarMaior(lista) {
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}

console.log(encontrarMaior([-15, -4, -30, -2, -9]));
// Resultado esperado: -2