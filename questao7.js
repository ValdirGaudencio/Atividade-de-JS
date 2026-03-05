let soma = 0;
let numero;

do {
    numero = Number(prompt("Digite um número:"));
    soma += numero;
} while (numero !== 0);

console.log(`A soma total é: ${soma}`);
