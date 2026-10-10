let n1 = 0;
let n2 = 1;
let proximo;


console.log(n1);
console.log(n2);
for (let i = 1; i <= 10; i++) {
    proximo = n1 + n2;
    console.log(proximo);
    n1 = n2;
    n2 = proximo;
}

