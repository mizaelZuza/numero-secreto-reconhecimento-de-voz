import { menorValor, maiorValor, numeroSecreto } from "./sortearNumero.js";
import { exibirMensagemNaTela, chuteCorreto, chuteErrado, exibirMaiorOuMenorQuePermitido, exibirMensagemGameOver } from "./construirHTML.js";
function verificarValorValido(chute) {

    if (chute == "game over") {
        finalizarJogo();
        return
    }

    const numero = +chute;

    if (verificarValorInvalido(numero)) {
        exibirMensagemNaTela();
        return
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        exibirMaiorOuMenorQuePermitido(menorValor, maiorValor);
        return
    }

    if (numero === numeroSecreto) {
        chuteCorreto(numero);
        return
    } else {
        chuteErrado(numero);
    }

};

function verificarValorInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
};

function finalizarJogo() {
    return exibirMensagemGameOver();
};
export default verificarValorValido;