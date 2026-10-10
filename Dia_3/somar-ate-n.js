function somarAte(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

const n = 4;
const resultado = somarAte(n);
console.log(`A soma dos números de 1 até ${n} é: ${resultado}`);