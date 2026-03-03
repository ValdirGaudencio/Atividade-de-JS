let numb1 = Number(prompt("Digite o primeiro número:"));
let numb2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Esccolha uma operação (+, -, *, /):");


let resultado

if (operacao === "+"){
    resultado = numb1 + numb2;
} else if (operacao === "-"){
    resultado = numb1 - numb2;
} else if (operacao === "*"){
    resultado = numb1 * numb2;
} else if (operacao === "/"){
    resultado = numb1 / numb2;
} else {
    alert("Operação inválida!");
}
if (resultado !== undefined) {
    alert("Resultado: " + resultado);
}

