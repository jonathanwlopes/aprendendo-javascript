const $venderPassagens = document.querySelector('.vender-passagens')
const $mapaOcupacao = document.querySelector('.mapa-ocupacao')
const $tabelaImprimir = document.querySelector('.tabela-imprimir')
const $tabelaImprimirCorredor = document.querySelector('.tabela-imprimir-corredor')

let lugaresJanela = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let lugaresCorredor = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let situacaoJanela = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]
let situacaoCorredor = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]
let opcaoSelecionada = 'janela'
let escolhaPoltrona = 6
let lotacao = 0

function verificarLotacao() {
  for (i = 1; i < lugaresCorredor.length; i++) {
    if (lugaresCorredor[i] === 1) {
      lotacao += 1
    }
    if (lugaresJanela[i] === 1) {
      lotacao += 1
    }
  }

  if (lotacao === 48) {
    console.log('Lotado')
  } else {
    venderPassagens()
  }
}

function venderPassagens() {
  if (opcaoSelecionada === 'janela') {
    if (lugaresJanela[escolhaPoltrona] === 0) {
      console.log('[Janela] Poltrona: ' + escolhaPoltrona + ' Venda Efetivada')
      lugaresJanela[escolhaPoltrona] = 1
    } else console.log('[Janela] Poltrona indisponível')
  } else if (opcaoSelecionada === 'corredor') {
    if (lugaresCorredor[escolhaPoltrona] === 0) {
      console.log('[Corredor] Poltrona: ' + escolhaPoltrona + ' Venda Efetivada')
      lugaresCorredor[escolhaPoltrona] = 1
    } else console.log('[Corredor] Poltrona indisponível')
  }
}

function mapaOcupacao() {
  for (i = 1; i < lugaresJanela.length; i++) {
    if (lugaresJanela[i] === 0) {
      situacaoJanela[i] = 'Janela: ' + [i] + ' Livre'
    } else {
      situacaoJanela[i] = 'Janela: ' + [i] + ' Ocupada'
    }
  }
  for (i = 1; i < lugaresCorredor.length; i++) {
    if (lugaresCorredor[i] === 0) {
      situcaoCorredor[i] = 'Corredor ' + [i] + ' Livre'
    } else {
      situacaoCorredor[i] = 'Corredor ' + [i] + ' Ocupada'
    }
  }
  imprimirDados()
}

function imprimirDados() {
  for (i = 0; i < situacaoJanela.length; i++) {
    $tabelaImprimir.innerHTML += `
    <table>
    <th>
      <td>${situacaoJanela[i]}</td>
    </th>
  </table>    `
  }
  for (i = 0; i < situacaoJanela.length; i++) {
    $tabelaImprimirCorredor.innerHTML += `
    <table>
    <th>
      <td>${situacaoCorredor[i]}</td>
    </th>
  </table>    `
  }
}

$venderPassagens.addEventListener('click', verificarLotacao)
$mapaOcupacao.addEventListener('click', mapaOcupacao)
