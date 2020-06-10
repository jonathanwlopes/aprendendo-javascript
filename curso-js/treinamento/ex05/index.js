const $iptNumero = document.querySelector("#ipt-numero")
const $btnGerar = document.querySelector("#btn-gerar")
const $resultado = document.querySelector(".list-resultado")



function calcular(){
  let valorInicial = parseInt($iptNumero.value)
  valorFinal = 0
  $resultado.innerHTML = ``
  for(i = 0; i <= 10; i++){
    valorFinal = valorInicial * i
    $resultado.innerHTML += `<li>${valorInicial} x ${i} = ${valorFinal}</li>`
  }
  
}


$btnGerar.addEventListener('click', calcular)
