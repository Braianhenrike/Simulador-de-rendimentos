const valorElement = document.querySelector('#inputValor');
const tempoElement = document.querySelector('#inputYears');

const buttonElement = document.querySelector('#calcular')
const resultado = document.querySelector('span')


buttonElement.onclick = function calcular() {
    resultado.innerHTML = parseInt(valorElement.value) * parseInt(tempoElement.value)
}