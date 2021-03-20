// Declaração das seleções
let $btnEntrar = document.querySelector('#btnEntrar')
let $inputNomeNave = document.querySelector('#inputNomeNave')
let $msgBoasVindas = document.querySelector('.msgBoasVindas')
let $btnAumentar = document.querySelector('#btnAumentar')
let $btnReduzir = document.querySelector('#btnReduzir')
let $velNave = document.querySelector('.velNave')


// Declaração dos conteudos html
let msgBoasVindasAtual = $msgBoasVindas.innerHTML
let velNave = $velNave.innerHTML


// Declarações de Execução
$btnEntrar.addEventListener('click', btnEntrar)
$btnAumentar.addEventListener('click', btnAumentar)
$btnReduzir.addEventListener('click', btnReduzir)

// Variáveis
let velAtual = 0
let subirVel = 5
let reduzVel = 5
let velMax = 100

// Funções
function btnEntrar(){
  if ($inputNomeNave.value != ""){    
    msgBoasVindasAtual = msgBoasVindasAtual + `, `+ $inputNomeNave.value
    $msgBoasVindas.innerHTML = msgBoasVindasAtual  
  }else{
    alert("Obrigatório informar o nome da Nave")
  }

}

function btnAumentar(){
  if (velAtual < velMax){
    velAtual = velAtual + subirVel
    $velNave.innerHTML = velAtual + " " + velNave
  } else{
    alert("Atenção: Limite máximo de velocidade atingido.")
  }
  
}

function btnReduzir(){
  if (velAtual <= 0){
    alert("Atenção: Limite mínimo de velocidade atingido.")

  }else{
    velAtual = velAtual - reduzVel
    $velNave.innerHTML = velAtual + " " + velNave
  }

}







// let $inputAumentar = document.querySelector('#inputAumentar')
// let $btnAumentar = document.querySelector('#btnAumentar')
// let $inputReduzir = document.querySelector('#inputReduzir')
// let $btnReduzir = document.querySelector('#btnReduzir')
// let $pAtual = document.querySelector('#pAtual')
// let $inputNome = document.querySelector('#inputNome')

// let velAtual = 0
// let conteudoAtual = $pAtual.innerHTML


// function acelerarNave(){

//   velAtual = velAtual + parseInt($inputAumentar.value)
//   if (velAtual < 0){
//     alert("Velocidade mínima atingida!")
//   } else if (velAtual <= 100 ){
//     $pAtual.innerHTML = conteudoAtual + velAtual
//   } else{
//     alert("Velocidade máxima atingida!")
//   }
  
// }

// $btnAumentar.addEventListener('click',acelerarNave)


// function reduzirNave(){
//   velAtual = velAtual - parseInt($inputReduzir.value)
//   if (velAtual < 0){
//     alert("Velocidade mínima atingida!")
//   }else if (velAtual >= 0){
//     $pAtual.innerHTML = conteudoAtual + velAtual
//   }else{
//     alert("Deu ruim")
//   }
  
// }

// $btnReduzir.addEventListener('click', reduzirNave)








// velocidade inicial 0
// aclerar nave 5km
// desacelerar nave 5km
// imprimir nome da nave e velocidade atual 
// sair do programa