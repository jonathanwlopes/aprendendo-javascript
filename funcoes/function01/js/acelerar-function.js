// let $button = document.querySelector('#button')
// let $input = document.querySelector('#input')

// let valorInput = 0

// function mostrarDadosDoInput() {
//   valorInput = valorInput + parseInt($input.value)
//   console.log('clicado',valorInput)
// }

// $button.addEventListener('click', mostrarDadosDoInput)



// function menuOperacao(){
//   velAtual = 0

//   let confirmaOperacao = confirm ("Deseja entrar na Nave?\n'SIM'  Pressione OK\n'NÃO' Pressione CANCELAR")
//   if (confirmaOperacao == true){
    
//     nomeNave = prompt("Digite o nome da Nave: ")

//     let escolhaOpcao = prompt("Parabéns você está a bordo!\nEscolha uma opção!\n1 - Acelerar\n2 - Reduzir Velocidade\n3 - Imprimir dados atuais\n4 - Para encerrar")
    
//     if (escolhaOpcao == '1'){ 
//       let continuarAcelerando = ""
//       let freiarNave = ""
      
//       do{
//         continuarAcelerando = prompt("Continuar Acelerando?\n1 - Sim\n2 - Não")
//         if (continuarAcelerando == 1){
//           acelerarNave()
//           alert("Velocidade Atual: " + velAtual)
//         } else{
          
//           do{
//             freiarNave = prompt("Continuar Desacelerando?\n1 - Sim\n2 - Não")
//             if (freiarNave == 1){
//               desacelerarNave()
//               alert("Velocidade Atual: " + velAtual)
//             } else{
//               alert("Dados Finais")
//             }
//           }while(freiarNave == '1')
        
//         }
      
//       }while(continuarAcelerando == '1')

      
//     } else if (escolhaOpcao == '2'){

      
//       alert("Bugo")





//     }else if (escolhaOpcao == '3'){
//       imprimirDados(nomeNave)
//     } else if(escolhaOpcao == '4'){
//       alert("Saindo do sistema")
      
//     }else{
//       alert("Opção Inválida")
//       menuOperacao()
//     }
//   } else {
//     alert("Obrigado pela visita")
//   }
  
// }

velAtual = 0

function menuOperacao(){


}

acelerarNave()



function acelerarNave(acelerarNave = 5){

    velAtual = velAtual + acelerarNave


}

function desacelerarNave(desacelerarNave = 5){
  velAtual = velAtual - desacelerarNave

}

function imprimirDados(nomeNave){
  alert(nomeNave)
}




// velocidade inicial 0
// aclerar nave 5km
// desacelerar nave 5km
// imprimir nome da nave e velocidade atual 
// sair do programa



// let quantidadeGuardada = 0;
// function guardarBatata(amount = 0){
//   let quantidade = amount
//   quantidadeGuardada = quantidadeGuardada + quantidade
// alert(`sua quantidade guardada é: ${quantidadeGuardada}`  )
// }

// guardarBatata(5)
// guardarBatata(5)