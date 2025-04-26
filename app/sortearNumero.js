
const menorValor = 1
const maiorValor = 1000

const numeroSecreto = sortearNumeroSecreto(menorValor, maiorValor);

function sortearNumeroSecreto(min, max) {

    return parseInt(Math.random() * (max - min + 1) + min)

}

export {menorValor, maiorValor, numeroSecreto}