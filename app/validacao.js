import { menorValor, maiorValor, numeroSecreto } from "./sortearNumero.js";
import { exibirMensagemNaTela, chuteCorreto, chuteErrado, exibirMaiorOuMenorQuePermitido } from "./construirHTML.js";
function verificarValorValido(chute) {
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

export default verificarValorValido;