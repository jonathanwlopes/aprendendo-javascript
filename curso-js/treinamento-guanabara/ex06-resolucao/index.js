const $btnAdicionar = document.querySelector('#btn-adicionar')
const $inputNumber = document.querySelector('#input-number')
const $select = document.querySelector('#select')
const $btnFinalizar = document.querySelector('#btn-finalizar')
const $resposta = document.querySelector('#resposta')

$btnAdicionar.addEventListener('click', adicionar)
$btnFinalizar.addEventListener('click', finalizar)

let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function adicionar(){
  if(isNumero($inputNumber.value) && !inLista($inputNumber.value, valores)){
    valores.push(Number($inputNumber.value))
    let item = document.createElement('option')
    item.text = `Valor ${$inputNumber.value} adicionado`
    $select.appendChild(item)
    $resposta.innerHTML = ''
  } else{
    alert('Valor inválido ou ja encontrado na lista.')
  }
  $inputNumber.value = ``
  $inputNumber.focus()
}

function finalizar(){
  if(valores.length == 0){
    alert('Adicione valores antes de finalizar.')
  }else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if (valores[pos] < menor){
        menor = valores[pos]
      }
    }
    media = soma / total
    $resposta.innerHTML = ""
    $resposta.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
    $resposta.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
    $resposta.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
    $resposta.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
    $resposta.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`
  }

}