
function contarFrequencia(lista) {
    const frequencia = {};
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (frequencia[elemento]) {
            frequencia[elemento]++;
        }
        else {
            frequencia[elemento] = 1;
        }
    }
    return frequencia;
}

console.log(contarFrequencia([1, 2, 2, 3, 3, 3]));