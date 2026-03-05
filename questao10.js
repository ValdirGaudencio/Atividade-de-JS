let numFatorial = parseInt(prompt("Digite um número:"));
let resultado = 1;

for (let i = 1; i <= numFatorial; i++) {
    resultado = resultado * i;
}

console.log("O fatorial de " + numFatorial + " é " + resultado);
