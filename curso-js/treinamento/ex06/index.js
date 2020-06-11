const $inputNumber = document.querySelector('#input-number')
const $btnAdicionar = document.querySelector('#btn-adicionar')
const $btnFinalizar = document.querySelector('#btn-finalizar')
const $select = document.querySelector('#select')
const $contentFinalizar = document.querySelector('.content-finalizar')
const divFinalizar = document.createElement('div')
divFinalizar.classList.add('div-finalizar')

$btnAdicionar.addEventListener('click', adicionar)
$btnFinalizar.addEventListener('click', finalizar)

let bancoNumeros = []

function adicionar(){
  limparDados()
  let numero = parseInt($inputNumber.value) 
  if(numero <= 0 || numero > 100 || $inputNumber.value.length == 0){
    alert('Digite um número válido.')
  }else{
    if(numero > 0 && numero < 100){
      let procura = bancoNumeros.indexOf(numero)
     if(procura == -1){    
      bancoNumeros.push(numero)
      let confirmAdicionado = document.createElement('option')
      confirmAdicionado.text = `Numero ${numero} adicionado.`
      $select.appendChild(confirmAdicionado)        
     }else{
      alert('Numero adicionado anteriormente, tente outro número')
     }
    }
  }
}

function finalizar(){
  limparDados()
  if(bancoNumeros.length >= 1){
    $contentFinalizar.appendChild(divFinalizar)
    const paragrafo1 = document.createElement('p')
    paragrafo1.textContent = `Ao todo temos ${bancoNumeros.length}`
    paragrafo1.classList.add('paragrafo')
    divFinalizar.appendChild(paragrafo1)
    const paragrafo2 = document.createElement('p')
    paragrafo2.textContent = `O maior valor informado foi ${calcMaiorNumero(bancoNumeros)}`
    paragrafo2.classList.add('paragrafo')
    divFinalizar.appendChild(paragrafo2)
    const paragrafo3 = document.createElement('p')
    paragrafo3.textContent = `O menor número informado ${calcMenorNumero()}`
    paragrafo3.classList.add('paragrafo')
    divFinalizar.appendChild(paragrafo3)
    const paragrafo4 = document.createElement('p')
    paragrafo4.textContent = `A soma dos números é: ${somaValores()}`
    paragrafo4.classList.add('paragrafo')
    divFinalizar.appendChild(paragrafo4)
    const paragrafo5 = document.createElement('p')
    paragrafo5.textContent = `A média dos números é: ${mediaValores()}`
    paragrafo5.classList.add('paragrafo')
    divFinalizar.appendChild(paragrafo5)
  }else{
    alert('Digite os dados acima!')
  }   

}

function limparDados(){
  divFinalizar.remove()
  divFinalizar.innerHTML = ``
}

function calcMaiorNumero(listaNumeros){
  let maiorNumero = 1
  for(numero of listaNumeros){
    if(numero > maiorNumero){
      maiorNumero = numero      
    }    
  }
  return maiorNumero
}

function calcMenorNumero(){
  let menorNumero = 100
  // for(numero of bancoNumeros){
  //   if(numero < menorNumero){
  //     menorNumero = numero
  //   }
  // }
  for(i=0; i < bancoNumeros.length; i++){
    if(bancoNumeros[i] < menorNumero){
      menorNumero = bancoNumeros[i]
    }
  }
  return menorNumero
}

function somaValores(){ 
  let soma = 0
  for(numero of bancoNumeros){
    soma += numero
  }
  return soma
}

function mediaValores(){
  let media = somaValores() / bancoNumeros.length
  return media
}
