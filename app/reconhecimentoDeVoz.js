import verificarValorValido from "./validacao.js";
import { exibirChuteNaTela } from "./construirHTML.js";


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();


recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    let chute = e.results[0][0].transcript;
    e.results.la
    exibirChuteNaTela(chute);
    verificarValorValido(chute);

};

recognition.addEventListener('end', () => recognition.start());