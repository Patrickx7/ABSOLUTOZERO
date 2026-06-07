let saldo = 200.0;
let valorSaque = 50.0;

if (saldo >= valorSaque) {
    console.log("Saque autorizado! Novo saldo: R$ " + (saldo - valorSaque));
} else {
    console.log("Saldo insuficiente. Saque negado.");
}