let positivos = 0;

for (let i = 1; i <= 5; i++) {
    
    let num = Number(prompt("Digite o " + i + "º número:"));
    if (num > 0) {
        positivos = positivos + 1;
    }
}

console.log("Você digitou " + positivos + " números positivos.");
