const nome = "Gabriel";
let numero = 10;
const numerostring = "5";

console.log(typeof nome);
console.log(typeof numero);
console.log(typeof numerostring);

let soma = numero + numerostring;
console.log(soma);

if(0 == false){
    console.log("0 é igual a false");
}else if(0 === false){
    console.log("0 é estritamente igual a false");
}else{
    console.log("0 não é igual a false");
}

