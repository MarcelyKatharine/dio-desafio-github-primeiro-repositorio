var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
function somarAoSaldo(soma) {
    var resultado = parseInt(campoSaldo.innerHTML) + parseInt(soma);
    campoSaldo.innerHTML = resultado.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
