// Conteudo para referência.
const $buttonPedraJogador1 = document.querySelector(".pedra-jogador-1");
const $buttonPapelJogador1 = document.querySelector(".papel-jogador-1");
const $buttonTesouraJogador1 = document.querySelector(".tesoura-jogador-1");
const $buttonPedraJogador2 = document.querySelector(".pedra-jogador-2");
const $buttonPapelJogador2 = document.querySelector(".papel-jogador-2");
const $buttonTesouraJogador2 = document.querySelector(".tesoura-jogador-2");
const $buttonResetar = document.querySelector(".button-resetar");
const $buttonJogar = document.querySelector(".button-jogar");
const $buttonBot = document.querySelector(".button-bot");
const $imagemEscolhaJogador1 = document.querySelector(".imagem-escolha-jog1");
const $imagemEscolhaJogador2 = document.querySelector(".imagem-escolha-jog2");
const $painelResultadoParcial = document.querySelector(
  ".painel-resultado-parcial"
);
const $painelResultadoFinal = document.querySelector(".painel-resultado-final");
const $pontosPlayer1 = document.querySelector(".pontos-player1");
const $pontosPlayer2 = document.querySelector(".pontos-player2");
const $alertaVencedor = document.querySelector(".alerta-vencedor");

// Variáveis Global.
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let primeiroJogador;
let segundoJogador;
let botOnOff = false;
let jogadasPossiveis = ["Pedra", "Papel", "Tesoura"];

// Desativar os botões antes de iniciar o jogo.
desativarJogadores();

// Função executada no clique dos botões.
$buttonPedraJogador1.addEventListener("click", function () {
  $imagemEscolhaJogador1.innerHTML = `<img src="img/pedra-esq.png">`;
  desativarJogadores();
  ativarSegundoJogador();
  primeiroJogador = "Pedra";
  jogadasBot();
});

$buttonPapelJogador1.addEventListener("click", function () {
  $imagemEscolhaJogador1.innerHTML = `<img src="img/papel-esq.png">`;
  desativarJogadores();
  ativarSegundoJogador();
  primeiroJogador = "Papel";
  jogadasBot();
});

$buttonTesouraJogador1.addEventListener("click", function () {
  $imagemEscolhaJogador1.innerHTML = `<img src="img/tesoura-esq.png">`;
  desativarJogadores();
  ativarSegundoJogador();
  primeiroJogador = "Tesoura";
  jogadasBot();
});

$buttonPedraJogador2.addEventListener("click", function () {
  $imagemEscolhaJogador2.innerHTML = `<img src="img/pedra-dir.png">`;
  segundoJogador = "Pedra";
  checarVencedor();
  desativarSegundoJogador();
  resetarJogadaAtual();
  iniciarJogo();
});

$buttonPapelJogador2.addEventListener("click", function () {
  $imagemEscolhaJogador2.innerHTML = `<img src="img/papel-dir.png">`;
  segundoJogador = "Papel";
  checarVencedor();
  desativarSegundoJogador();
  resetarJogadaAtual();
  iniciarJogo();
});

$buttonTesouraJogador2.addEventListener("click", function () {
  $imagemEscolhaJogador2.innerHTML = `<img src="img/tesoura-dir.png">`;
  segundoJogador = "Tesoura";
  checarVencedor();
  desativarSegundoJogador();
  resetarJogadaAtual();
  iniciarJogo();
});

$buttonResetar.addEventListener("click", function () {
  resetarJogo();
});

$buttonJogar.addEventListener("click", function () {
  iniciarJogo();
});

$buttonBot.addEventListener("click", function () {
  ativarBot();
  desativarSegundoJogador();
});

// Funções dos botões do rodapé e automaticas
function desativarJogadores() {
  $buttonPedraJogador1.disabled = true;
  $buttonPapelJogador1.disabled = true;
  $buttonTesouraJogador1.disabled = true;
  $buttonPedraJogador2.disabled = true;
  $buttonPapelJogador2.disabled = true;
  $buttonTesouraJogador2.disabled = true;
}

function ativarSegundoJogador() {
  if (botOnOff === true) {
    $buttonPedraJogador2.disabled = true;
    $buttonPapelJogador2.disabled = true;
    $buttonTesouraJogador2.disabled = true;
  } else {
    $buttonPedraJogador2.disabled = false;
    $buttonPapelJogador2.disabled = false;
    $buttonTesouraJogador2.disabled = false;
  }
}

function desativarSegundoJogador() {
  $buttonPedraJogador2.disabled = true;
  $buttonPapelJogador2.disabled = true;
  $buttonTesouraJogador2.disabled = true;
}

function iniciarJogo() {
  $buttonPedraJogador1.disabled = false;
  $buttonPapelJogador1.disabled = false;
  $buttonTesouraJogador1.disabled = false;
}

// Funções Automaticas
function resetarJogadaAtual() {
  setTimeout(function resetarJogadaAtual() {
    $imagemEscolhaJogador1.innerHTML = "";
    $imagemEscolhaJogador2.innerHTML = "";
    $painelResultadoParcial.innerHTML = `Placar Parcial`;
    iniciarJogo();
    if (pontosJogador1 === 3 || pontosJogador2 === 3) {
      resetarPontos();
    }
  }, 1000);
}

function alertarVencedor() {
  if (pontosJogador1 === 3 && pontosJogador2 != 3) {
    $painelResultadoFinal.innerHTML = `<h1 class="titulo-pontos">*** Jogador - 01 *** WIN ***</h1>`;
    $alertaVencedor.classList = "alerta-vencedor alerta-vencedor-estilo";
    $alertaVencedor.innerHTML = `<button class="button-rodape button-jogar jogar-novamente">Jogar Novamente</button>`;
  } else if (pontosJogador2 === 3 && pontosJogador1 != 3) {
    $painelResultadoFinal.innerHTML = `<h1 class="titulo-pontos">*** Jogador - 02 *** WIN ***</h1>`;
    $alertaVencedor.classList = "alerta-vencedor alerta-vencedor-estilo";
    $alertaVencedor.innerHTML = `<button class="button-rodape button-jogar jogar-novamente">Jogar Novamente</button>`;
  } else {
    $painelResultadoFinal.innerHTML = `<h1 class="titulo-pontos">*** EMPATE ***</h1>`;
    $alertaVencedor.classList = "alerta-vencedor alerta-vencedor-estilo";
    $alertaVencedor.innerHTML = `<button class="button-rodape button-jogar jogar-novamente">Jogar Novamente</button>`;
  }
  const $jogarNovamente = document.querySelector(".jogar-novamente");
  $jogarNovamente.addEventListener("click", function () {
    $alertaVencedor.classList = "";
    $alertaVencedor.innerHTML = "";
    $painelResultadoFinal.innerHTML = `Placar Final`;
    resetarJogo();
    iniciarJogo();
  });
}

function resetarPontos() {
  alertarVencedor();
  resetarJogo();
  iniciarJogo();
}

function resetarJogo() {
  $imagemEscolhaJogador1.innerHTML = "";
  $imagemEscolhaJogador2.innerHTML = "";
  $painelResultadoParcial.innerHTML = `Placar Parcial`;
  $pontosPlayer1.innerHTML = `00`;
  $pontosPlayer2.innerHTML = `00`;
  pontosJogador1 = 0;
  pontosJogador2 = 0;
  desativarJogadores();
}

function checarVencedor() {
  if (primeiroJogador === "Pedra" && segundoJogador === "Tesoura") {
    $painelResultadoParcial.innerHTML = `<h2 class="sub-titulo">Jogador - 01</h2>`;
    pontosJogador1 += 1;
    $pontosPlayer1.innerHTML = `0${pontosJogador1}`;
  } else if (primeiroJogador === "Papel" && segundoJogador === "Pedra") {
    $painelResultadoParcial.innerHTML = `<h2 class="sub-titulo">Jogador - 01</h2>`;
    pontosJogador1 += 1;
    $pontosPlayer1.innerHTML = `0${pontosJogador1}`;
  } else if (primeiroJogador === "Tesoura" && segundoJogador === "Papel") {
    $painelResultadoParcial.innerHTML = `<h2 class="sub-titulo">Jogador - 01</h2>`;
    pontosJogador1 += 1;
    $pontosPlayer1.innerHTML = `0${pontosJogador1}`;
  } else if (primeiroJogador === segundoJogador) {
    $painelResultadoParcial.innerHTML = `<h2 class="sub-titulo">Empatou</h2>`;
    pontosJogador1 += 1;
    pontosJogador2 += 1;
    $pontosPlayer1.innerHTML = `0${pontosJogador1}`;
    $pontosPlayer2.innerHTML = `0${pontosJogador2}`;
  } else {
    $painelResultadoParcial.innerHTML = `<h2 class="sub-titulo">Jogador - 02</h2>`;
    pontosJogador2 += 1;
    $pontosPlayer2.innerHTML = `0${pontosJogador2}`;
  }
}

function ativarBot() {
  if (botOnOff === false) {
    botOnOff = true;
    $buttonBot.classList = "button-rodape button-desativar-bot";
    $buttonBot.innerHTML = `Desativar BOT`;
    $buttonPedraJogador2.innerHTML = "";
    $buttonPedraJogador2.classList = "button-off";
    $buttonPapelJogador2.innerHTML = "";
    $buttonPapelJogador2.classList = "button-off";
    $buttonTesouraJogador2.innerHTML = "";
    $buttonTesouraJogador2.classList = "button-off";
    $painelResultadoParcial.innerHTML = `Atenção! Você ativou o BOT.`;
  } else if (botOnOff === true) {
    botOnOff = false;
    $buttonBot.classList = "button-rodape button-bot";
    $buttonBot.innerHTML = `Contra BOT`;
    $buttonPedraJogador2.innerHTML = "Pedra";
    $buttonPedraJogador2.classList = "button-escolha";
    $buttonPapelJogador2.innerHTML = "Papel";
    $buttonPapelJogador2.classList = "button-escolha";
    $buttonTesouraJogador2.innerHTML = "Tesoura";
    $buttonTesouraJogador2.classList = "button-escolha";
    resetarJogo();
  }
}

function jogadasBot() {
  if (botOnOff === true) {
    let jogadaBot = Math.random() * 3;
    jogadaBot = Math.floor(jogadaBot);
    segundoJogador = jogadasPossiveis[jogadaBot];
    desativarJogadores();
    checarVencedor();
    resetarJogadaAtual();
    if (segundoJogador === "Pedra") {
      $imagemEscolhaJogador2.innerHTML = `<img src="img/pedra-dir.png">`;
    } else if (segundoJogador === "Papel") {
      $imagemEscolhaJogador2.innerHTML = `<img src="img/papel-dir.png">`;
    } else if (segundoJogador === "Tesoura") {
      $imagemEscolhaJogador2.innerHTML = `<img src="img/tesoura-dir.png">`;
    }
  }
}
