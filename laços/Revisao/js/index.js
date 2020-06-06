function executarPrograma(){

  // Solicitar o nome da nave
  // Utilizar um estrutura de repetição para inverter o nome da nave
  // Informar o nome da nave e o nome invertido travado em um caracter proibido

  let nomeNave = prompt("Digite o nome da Nave: ")
  let caracterProibido = prompt("Digite o caracter proibido: ")
  let nomeInvertido = ""
  let nomeBreak = ""

  for(let i = nomeNave.length -1; i >= 0; i--){

    nomeInvertido = nomeInvertido += nomeNave[i]


    // nomeBreak = nomeBreak += nomeNave[i]
    if (nomeNave[i-1] == caracterProibido){
      break
    }

  }

  alert("O nome da Nave é: " + nomeNave + "\nO nome invertido travado no caractere especial é: " + nomeInvertido )
 

}