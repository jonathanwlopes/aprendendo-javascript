const $iptNumero = document.querySelector("#ipt-numero")
const $btnGerar = document.querySelector("#btn-gerar")
const $resultado = document.querySelector("#list-resultado")


function calcular(){
  let valorInicial = parseInt($iptNumero.value)
  let valorFinal = 0

  if($iptNumero.value.length === 0){
    alert('Digite um número')
  }else{
    $resultado.innerHTML = ''
    for(i=0; i <= 10; i++){
      let item = document.createElement('option')
      item.text = `${valorInicial} x ${i} = ${valorFinal}`
      item.className = "teste"
      $resultado.appendChild(item)
      valorFinal = valorInicial * i
    }

  }
}


$btnGerar.addEventListener('click', calcular)
