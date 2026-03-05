let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação (+, -, *, /):");

let resultado;

if (operacao === "+") {
    resultado = n1 + n2;
} else if (operacao === "-") {
    resultado = n1 - n2;
} else if (operacao === "*") {
    resultado = n1 * n2;
} else if (operacao === "/") {
    resultado = n1 / n2;
} else {
    resultado = "Operação inválida";
}

console.log("Resultado: " + resultado);
