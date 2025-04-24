import { numeroSecreto } from "./sortearNumero.js";
const elementoChute = document.getElementById('chute')
const elementoResultado = document.getElementById('resultado')
const elementoBody = document.querySelector('body');
function exibirChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
};

function exibirMensagemNaTela() {
    elementoResultado.innerHTML += `
        <div class="dica">Valor  inválido! O valor deve ser um número.</div>

    `
};

function chuteCorreto(chute) {  
    elementoBody.innerHTML = `
        <div><h2>Você acertou!</h2></div>
        <span class="mensagem-acerto">O número secreto é ${chute}</span>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    jogarNovamente();
};

function exibirMaiorOuMenorQuePermitido(menor, maior) {
    elementoResultado.innerHTML += `<div class="dica">Valor inválido! Fale um número entre ${menor} e ${maior}.</div>`
};

function chuteErrado(chute) {
    if (chute > numeroSecreto) {
        elementoResultado.innerHTML = `<div class="dica">O número secreto é menor <i class="fa-regular fa-circle-down"></i></div>`
    } else {
        elementoResultado.innerHTML = `<div class="dica">O número secreto é maior <i class="fa-regular fa-circle-up"></i></div>`
    }
};

function jogarNovamente(){
    const botaoAtualizar = document.getElementById('jogar-novamente');
    botaoAtualizar.addEventListener('click', () => {
        window.location.reload();
    });
};

export { exibirChuteNaTela, exibirMensagemNaTela, chuteCorreto, chuteErrado, exibirMaiorOuMenorQuePermitido }
