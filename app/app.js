// import "./sortearNumero.js";
// import "./reconhecimentoDeVoz.js";
import { exibirChuteNaTela, exibirMensagemVozHabilitada} from "./construirHTML.js";
import verificarValorValido from "./validacao.js";


const btnChute = document.getElementById('btn-chute');
btnChute.addEventListener('click', chutar);

const btnVoz = document.getElementById('btn-voz');
btnVoz.addEventListener('click', reconhecimentoDeVoz);

let vozHabilitada = false;

function reconhecimentoDeVoz() {

    const campoInput = document.getElementById('input-chute');
    const botaoChute = document.getElementById('btn-chute');

    if (vozHabilitada) {
        import("./reconhecimentoDeVoz.js");
        campoInput.disabled = true;
        botaoChute.disabled = true;
        campoInput.value = "";
        exibirMensagemVozHabilitada(true);
        vozHabilitada = false;
    } else {

        campoInput.disabled = false;
        botaoChute.disabled = false;
        vozHabilitada = true;
        exibirMensagemVozHabilitada(false);
    }

}
function chutar() {
    const chute = document.getElementById('input-chute').value;
    exibirChuteNaTela(chute);
    verificarValorValido(chute);
}


