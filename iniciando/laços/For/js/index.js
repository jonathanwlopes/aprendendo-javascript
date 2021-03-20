function executarPrograma(){

  // Solicitar nome da nave
  // Perguntar o caractere que deseja substituir
  // Perguntar por qual caractere deseja substituir
  // Utilizar o for para resolver o problema
  // Para cada caractere igual o informado, substituir pelo novo
  // Alerta com o novo nome da Nave

  let nomeNave = prompt("Digite o nome da Nave: ")
  let antigoCaracter = prompt("Qual caractere deseja substituir: ")
  
  let novoCaracter = prompt("Digite o novo caractere: ")

  let novoNome = ""
  


  for(let i=0; i < nomeNave.length; i++){
  
    if (nomeNave[i] == antigoCaracter){
      novoNome += novoCaracter
    } else{
      novoNome += nomeNave[i]
    }

  }

  alert("O novo nome da nave é: " + novoNome)






}