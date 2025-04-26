import { numeroSecreto, menorValor, maiorValor } from "./sortearNumero.js";
const elementoChute = document.getElementById('chute')
const elementoResultado = document.getElementById('resultado')
const elementoBody = document.querySelector('body');

// ------------Exibir menor e maior valor na tela------------
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
//-----------------------------------------------------------

// ---------Exibir elementos chute sem comando por voz-------
const divElementosChute = document.createElement('div');
divElementosChute.classList.add('elementos-chute');
divElementosChute.id = 'elementos-chute';
divElementosChute.innerHTML = `
        <input type="text" value="" placeholder="Digite o seu chute" class="input-chute" id="input-chute">
        <input type="button" value="Chutar" class="btn-chute" id="btn-chute">
    `;

elementoBody.appendChild(divElementosChute);
//---------------------------------------------------------------
//----Exibir botão habilitar e desabilitar comando por voz-------
const botaoHabilitarVoz = document.createElement('button');
botaoHabilitarVoz.classList.add('btn-voz');
botaoHabilitarVoz.id = 'btn-voz';
botaoHabilitarVoz.innerHTML = `
        <i class="fa-solid fa-microphone-slash"></i>
    `;
divElementosChute.appendChild(botaoHabilitarVoz);
//---------------------------------------------------------------

function exibirChuteNaTela(chute) {
    if (chute) {
        elementoChute.innerHTML = `
            <div>Você disse</div>
            <span class="box">${chute}</span>
        `
    } else {

        elementoChute.innerHTML = `
        <div class="dica">
            <p> Tente novamente! </p>
            <p> O campo chute ficou vazio. </p>
        </div>
        `
    }

};

function exibirMensagemNaTela() {
    elementoResultado.innerHTML = `
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

function exibirMensagemGameOver() {
    elementoBody.innerHTML = `
        <div><h2>Game Over!</h2></div>
        <span class="mensagem-acerto">O número secreto era ${numeroSecreto}</span>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    jogarNovamente();
};

function exibirMaiorOuMenorQuePermitido(menor, maior) {
    elementoResultado.innerHTML += `<div class="dica">Entre com um número entre ${menor} e ${maior}.</div>`
};

function chuteErrado(chute) {
    if (chute > numeroSecreto) {
        elementoResultado.innerHTML = `<div class="dica">O número secreto é menor <i class="fa-regular fa-circle-down"></i></div>`
    } else {
        elementoResultado.innerHTML = `<div class="dica">O número secreto é maior <i class="fa-regular fa-circle-up"></i></div>`
    }
};

function exibirMensagemVozHabilitada(estado) {
    if (estado) {
        botaoHabilitarVoz.innerHTML = `
            <i class="fa-solid fa-microphone"></i>
        `;
    } else {
        botaoHabilitarVoz.innerHTML = `
        <i class="fa-solid fa-microphone-slash"></i>
    `;
    }

}

function jogarNovamente() {
    const botaoAtualizar = document.getElementById('jogar-novamente');
    botaoAtualizar.addEventListener('click', () => {
        window.location.reload();
    });
};


export {
    exibirChuteNaTela,
    exibirMensagemNaTela,
    chuteCorreto,
    chuteErrado,
    exibirMaiorOuMenorQuePermitido,
    exibirMensagemGameOver,
    exibirMensagemVozHabilitada


}
