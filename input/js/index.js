let $button = document.querySelector('#button')
let $input = document.querySelector('#input')

let valorInput = 0

function mostrarDadosDoInput() {
  valorInput = valorInput + parseInt($input.value)
  console.log('clicado',valorInput)
}

$button.addEventListener('click', mostrarDadosDoInput)

