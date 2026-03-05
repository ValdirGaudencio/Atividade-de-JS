const usuarioCorreto = "admin";
const senhaCorreta = "1234";
let tentativas = 3;

while (tentativas > 0) {
    let user = prompt("Usuário:");
    let pass = prompt("Senha:");

    if (user === usuarioCorreto && pass === senhaCorreta) {
        alert("Sucesso! Acesso permitido!");
        break; 
    } else {
        tentativas = tentativas - 1;
        alert("Acesso negado. Você tem mais " + tentativas + " tentativa(s).");
    }
}
