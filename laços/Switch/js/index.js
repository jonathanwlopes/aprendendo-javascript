function executaPrograma(){

// Perguntar a distância em anos luz.

let distanciaAnos = prompt("Qual a distância em anos luz?")

// Oferecer uma lista de opções com
// Parsec(pc)
// Unidade Astronômica (AU)
// Quilômetros (km)
// Perguntar qual operação deseja realizar
// Valores para conversão:
// Parsec: 0.306601
// Unidade Astronômica: 63241.1
// Quilômetros: 9.5 * 10¹²

let escolhaOpcao = prompt("Para qual medidade deseja converter?\nDigite o número:\n 1. Parsec\n 2. Unidade Atronômica\n 3. Quilômetros")

// Utilizar o switch para verificar a opção escolhida
// Armazenar o nome da unidade
// Armazenar o valor convertido de anos-luz para unidade desejada

let opcaoEscolhida
let valorConvertido

switch(escolhaOpcao){
  case "1":
    opcaoEscolhida = "Parsec"
    valorConvertido = distanciaAnos * 0.306601
    break
  case "2":
    opcaoEscolhida = "Unidade Astronômica"
    valorConvertido = distanciaAnos * 63241.1
    break
  case "3":
    opcaoEscolhida = "Quilometros"
    valorConvertido = distanciaAnos * 9.5 * Math.pow(10, 12)
    break
  default:
    opcaoEscolhida = "Opção não definida corretamente"
    valorConvertido = "Conversão fora de escopo"
    break
}

// Exibir um alerta contendo a distância em anos-luz
// e a distância convertida para a opção desejada

alert("Distancia em anos luz: " + distanciaAnos + "\nUnidade Convertida: " + opcaoEscolhida + "\nValor convertido: " + valorConvertido)
}