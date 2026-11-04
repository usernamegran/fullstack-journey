function multiplicar(a, b) {
    return a * b;
}

const subtrair = function(a, b) {
    return a - b;
}
console.log(subtrair(10, 5));

const somararrow = (a, b) => a + b;
console.log(somararrow(10, 5));

function somar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somar(...numeros));

function criarPotencia(potencia) {
    return function(numero) {
        return numero ** potencia;
    };
}

const elevarAoQuadrado = criarPotencia(2);
console.log(elevarAoQuadrado(5));