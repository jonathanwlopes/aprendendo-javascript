const $escolhaJogador1 = document.querySelector("#escolhaJogador1");
const $escolhaJogador2 = document.querySelector("#escolhaJogador2");
const $botaoPedra1 = document.querySelector("#botaoPedra1");
const $botaoPapel1 = document.querySelector("#botaoPapel1");
const $botaoTesoura1 = document.querySelector("#botaoTesoura1");
const $botaoPedra2 = document.querySelector("#botaoPedra2");
const $botaoPapel2 = document.querySelector("#botaoPapel2");
const $botaoTesoura2 = document.querySelector("#botaoTesoura2");
const $painelVencedor = document.querySelector(".painelVencedor");
const $pontosJogador1 = document.querySelector("#pontosJogador1");
const $pontosJogador2 = document.querySelector("#pontosJogador2");
const $resetarGeral = document.querySelector("#resetarGeral");
const $iniciarPartida = document.querySelector("#iniciarPartida");
const $ativarBot = document.querySelector(".ativar-bot");

const antigoPainelVencedor = $painelVencedor.textContent;

let jogador1 = 0;
let jogador2 = 0;

let jogadaJogador1;
let jogadaJogador2;

let isBotOn = false;

$ativarBot.addEventListener("click", function () {
  isBotOn = !isBotOn;
  $ativarBot.textContent = isBotOn === true ? "Desativar" : "Ativar Bot";
  $ativarBot.classList.toggle("botao-desativado");
});

$iniciarPartida.addEventListener("click", function () {
  iniciarNovaPartida();
});

$resetarGeral.addEventListener("click", function () {
  novoJogo();
});

$botaoPedra1.addEventListener("click", function () {
  $escolhaJogador1.innerHTML =
    '<img class="imagemSelecionada" src="./img/pedra.png">';
  jogadaJogador1 = "Pedra";
  checarVencedor();
  if (isBotOn === true) {
    jogaBot();
  }
});

$botaoPapel1.addEventListener("click", function () {
  $escolhaJogador1.innerHTML =
    '<img class="imagemSelecionada" src="./img/papel.png">';
  jogadaJogador1 = "Papel";
  checarVencedor();
  if (isBotOn === true) {
    jogaBot();
  }
});

$botaoTesoura1.addEventListener("click", function () {
  $escolhaJogador1.innerHTML =
    '<img class="imagemSelecionada" src="./img/tesoura.png">';
  jogadaJogador1 = "Tesoura";
  checarVencedor();
  if (isBotOn === true) {
    jogaBot();
  }
});

$botaoPedra2.addEventListener("click", function () {
  $escolhaJogador2.innerHTML =
    '<img class="imagemSelecionada" src="./img/pedra.png">';
  jogadaJogador2 = "Pedra";
  checarVencedor();
});

$botaoPapel2.addEventListener("click", function () {
  $escolhaJogador2.innerHTML =
    '<img class="imagemSelecionada" src="./img/papel.svg">';
  jogadaJogador2 = "Papel";
  checarVencedor();
});

$botaoTesoura2.addEventListener("click", function () {
  $escolhaJogador2.innerHTML =
    '<img class="imagemSelecionada" src="./img/tesoura.png">';
  jogadaJogador2 = "Tesoura";
  checarVencedor();
});

function jogaBot() {
  const jogadaDoBot = Math.floor(Math.random() * 3);
  const jogadasPossiveis = [$botaoPedra2, $botaoPapel2, $botaoTesoura2];
  jogadasPossiveis[jogadaDoBot].click();
}

function habilitarJogador() {
  $botaoPapel1.disabled = false;
  $botaoPedra1.disabled = false;
  $botaoTesoura1.disabled = false;
  $botaoPapel2.disabled = false;
  $botaoPedra2.disabled = false;
  $botaoTesoura2.disabled = false;
}

function desabilitarJogador() {
  $botaoPapel1.disabled = true;
  $botaoPedra1.disabled = true;
  $botaoTesoura1.disabled = true;
  $botaoPapel2.disabled = true;
  $botaoPedra2.disabled = true;
  $botaoTesoura2.disabled = true;
}

function checarVencedor() {
  if (
    (jogadaJogador1 === "Pedra" && jogadaJogador2 === "Tesoura") ||
    (jogadaJogador1 === "Tesoura" && jogadaJogador2 === "Papel") ||
    (jogadaJogador1 === "Papel" && jogadaJogador2 === "Pedra")
  ) {
    $painelVencedor.textContent = "Ganhou o Jogador 1";
    pararResultado();
    jogador1 = jogador1 + 1;
    mostraResultadoJogo();
  } else if (
    (jogadaJogador2 === "Pedra" && jogadaJogador1 === "Tesoura") ||
    (jogadaJogador2 === "Tesoura" && jogadaJogador1 === "Papel") ||
    (jogadaJogador2 === "Papel" && jogadaJogador1 === "Pedra")
  ) {
    $painelVencedor.textContent = "Ganhou Jogador 2";
    pararResultado();
    jogador2 = jogador2 + 1;
    mostraResultadoJogo();
  } else if (
    !!jogadaJogador1 &&
    !!jogadaJogador2 &&
    jogadaJogador1 === jogadaJogador2
  ) {
    $painelVencedor.textContent = "Empatou";
    pararResultado();
    jogador1 = jogador1 + 1;
    jogador2 = jogador2 + 1;
    mostraResultadoJogo();
  }
}

function pararResultado() {
  setTimeout(function pararResultado() {
    resetaJogo();
  }, 1000);
}

function pararFinal() {
  desabilitarJogador();

  setTimeout(function pararFinal() {
    resetarPartida();
  }, 1000);
}

function resetaJogo() {
  if (jogador1 === 3 || jogador2 === 3)
    if (jogador1 === 3 && jogador2 != 3) {
      $painelVencedor.textContent = "Venceu Jogador 1";
      pararFinal();
    } else if (jogador2 === 3 && jogador1 != 3) {
      $painelVencedor.textContent = "Venceu o Jogador 2";
      pararFinal();
    } else {
      $painelVencedor.textContent = "Empate Técnico";
      pararFinal();
    }
  else {
    resetaJogada();
  }
}
function resetaJogada() {
  jogadaJogador1 = undefined;
  jogadaJogador2 = undefined;
  $escolhaJogador1.innerHTML = "";
  $escolhaJogador2.innerHTML = "";
  $painelVencedor.textContent = antigoPainelVencedor;
}
function mostraResultadoJogo() {
  $pontosJogador1.textContent = jogador1;
  $pontosJogador2.textContent = jogador2;
}
function resetarPartida() {
  jogador1 = 0;
  jogador2 = 0;
  $pontosJogador1.textContent = "";
  $pontosJogador2.textContent = "";
  jogadaJogador1 = undefined;
  jogadaJogador2 = undefined;
  $escolhaJogador1.innerHTML = "";
  $escolhaJogador2.innerHTML = "";
  $painelVencedor.textContent = antigoPainelVencedor;
}
function iniciarNovaPartida() {
  habilitarJogador();
}
