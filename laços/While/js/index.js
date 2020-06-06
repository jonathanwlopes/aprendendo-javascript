function executarPrograma(){
// Solicitar o nome da nave
// Perguntar se deseja entrar na dobra com a mensagem:
// Deseja entrar em dobra espacial?
// 1- Sim
// 2- Não
// Se a resposta for sim contabilizaremos uma dobra
// O usuario deve ser perguntado se deseja entrar na proxima dobra
// Para cada sim vamos contabilizar mais uma dobra
// A pergunta deve ser repetida ate a resposta ser negativa
// Ao escolher não a contagem deve ser encerrada
// O programa deve informar o nome da nave e o numero de vezes que acessou a dobra

  let contador = 0
  let desejaAcessar = ""
  
  let nomeNave = prompt("Digite o nome da nave: ")
  desejaAcessar = prompt("Deseja entrar em dobra espacial?\nDigite o número:\n 1- Sim\n 2- Não")

  while (desejaAcessar == "1")  {
    contador += 1
    desejaAcessar = prompt("Deseja entrar em mais uma dobra?\nDigite o número:\n 1- Sim\n 2- Não")
    console.log("sim")
  }

alert("Nome da nave: "+ nomeNave + "\nQuantidade de acessos: " + contador)


}