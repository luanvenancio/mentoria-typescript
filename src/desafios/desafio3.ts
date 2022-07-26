// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
const botaoAtualizar = document.getElementById('atualizar-saldo')!;
const botaoLimpar = document.getElementById('limpar-saldo')!;
const soma = document.getElementById('soma')! as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo');

let total = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        total += soma
        campoSaldo.innerHTML = total.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}

botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value)); 
});

botaoLimpar.addEventListener('click', () => { 
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */