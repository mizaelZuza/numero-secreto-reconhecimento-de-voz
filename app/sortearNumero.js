
const menorValor = 1
const maiorValor = 1000

const numeroSecreto = 10
// sortearNumeroSecreto(menorValor, maiorValor);

function sortearNumeroSecreto(min, max) {

    return parseInt(Math.random() * (max - min + 1) + min)

}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor



// const elementoChute = document.getElementById('chute')
export {menorValor, maiorValor, numeroSecreto}