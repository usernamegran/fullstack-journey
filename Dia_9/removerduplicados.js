function removerDuplicados(lista) {
    const listaSemDuplicados = [];
    for (let i = 0; i < lista.length; i++) {
        if (!listaSemDuplicados.includes(lista[i])) {
            listaSemDuplicados.push(lista[i]);
        }
    }
    return listaSemDuplicados;
}


console.log(removerDuplicados([1, 2, 2, 3, 4, 3, 5]));
// Resultado esperado: [1, 2, 3, 4, 5]