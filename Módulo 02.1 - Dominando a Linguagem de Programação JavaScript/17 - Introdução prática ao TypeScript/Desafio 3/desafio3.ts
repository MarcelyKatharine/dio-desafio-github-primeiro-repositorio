let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0'


function somarAoSaldo(soma) {
    const resultado = parseInt(campoSaldo.innerHTML) + parseInt(soma);
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