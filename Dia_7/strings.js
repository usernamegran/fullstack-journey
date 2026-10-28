const nome = "  mARIA  da silva  ";

const mensagem = `${nome.trim().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ")}`;

console.log(mensagem);


const texto = "fullstack";

const textoinvertido = texto.split("").reverse().join("");

console.log(textoinvertido);


const texto2 = "Desenvolvimento Full Stack";

const vogais = texto2.match(/[aeiou]/gi);

console.log(vogais);


const frase = "Academia de Full";

const vogaisA = frase.toLowerCase().includes("a");

console.log(vogaisA);


const frase2 = "A academia é pequena";

const frase22 = frase2.replace("pequena", "moderna");

console.log(frase22);

