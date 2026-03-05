let numTabuada = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
    let linha = numTabuada + " x " + i + " = " + (numTabuada * i);
    console.log(linha);
}
