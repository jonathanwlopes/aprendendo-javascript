const $checkBox = document.querySelector(".checkBox");
const $circle = document.querySelector(".circle");
const $checkBoxMatch = document.querySelector(".checkBox-match");
const $circleMatch = document.querySelector(".circle-match");
const $square01 = document.querySelector(".square01");
const $square02 = document.querySelector(".square02");
const $square03 = document.querySelector(".square03");
const $square04 = document.querySelector(".square04");
const $square05 = document.querySelector(".square05");
const $square06 = document.querySelector(".square06");
const $square07 = document.querySelector(".square07");
const $square08 = document.querySelector(".square08");
const $square09 = document.querySelector(".square09");
const $historyList = document.querySelector(".history-list");
const $playButton = document.querySelector(".play-button");
const $scorePlayer1 = document.querySelector(".score-player1");
const $scorePlayer2 = document.querySelector(".score-player2");
const $scorePlayer = document.querySelector(".score-player");
const $inputPlayer1 = document.querySelector(".input-player1");
const $inputPlayer2 = document.querySelector(".input-player2");
const $resetButton = document.querySelector(".reset-button");
const $square = document.querySelector(".square");

let jogadas = ["", "", "", "", "", "", "", "", ""];
let jogada = "x";
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function pegarJogada() {
  return jogada;
}

function trocarJogada() {
  if (jogada === "x") {
    jogada = "o";
  } else {
    jogada = "x";
  }
}

function handleClickCheckBox() {
  if ($checkBox.classList.contains("checkBox-active")) {
    $checkBox.classList.remove("checkBox-active");
    $circle.classList.remove("circle-active");
  } else {
    $checkBox.classList.add("checkBox-active");
    $circle.classList.add("circle-active");
  }
}

function handleClickCheckBoxMatch() {
  if ($circleMatch.classList.contains("circle-match-active")) {
    $circleMatch.classList.remove("circle-match-active");
  } else {
    $circleMatch.classList.add("circle-match-active");
  }
}

function handleClickReset() {
  resetaPartidaAtual();
  $scorePlayer1.textContent = `00`;
  $scorePlayer2.textContent = `00`;
  $scorePlayer.textContent = `Nome do Jogador`;
  jogadas = ["", "", "", "", "", "", "", "", ""];
  jogada = "x";
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}

function resetaPlacar() {
  if (scorePlayer1 === 3 || scorePlayer2 === 3) {
    $scorePlayer1.textContent = `00`;
    $scorePlayer2.textContent = `00`;
    $scorePlayer.textContent = `Nome do Jogador`;
    jogadas = ["", "", "", "", "", "", "", "", ""];
    jogada = "x";
    scorePlayer1 = 0;
    scorePlayer2 = 0;
  }
}

function resetaPartidaAtual() {
  setTimeout(function () {
    $historyList.textContent = ``;
    let square = [$square01, $square02,$square03,$square04,$square05,$square06,$square07,$square08,$square09];
     for (i = 0; i < square.length; i++) {
      square[i].textContent = ``;
      square[i].classList.remove(`symbol-x`);
      square[i].classList.remove(`symbol-o`);
      jogadas[i] = '';
    }
    jogada = "x";
    resetaPlacar();
  }, 1000);
}

function handleClickSquare01() {
  if ($square01.textContent === "") {
    $square01.textContent = pegarJogada();
    jogadas[0] = pegarJogada();
    checkWinner();
    $square01.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Primeiro Quadrado</p>
      </div>
      </li> `;

    trocarJogada();
  }
}

function handleClickSquare02() {
  if ($square02.textContent === "") {
    $square02.textContent = pegarJogada();
    jogadas[1] = pegarJogada();
    checkWinner();
    $square02.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Segundo Quadrado</p>
      </div>
      </li> `;

    trocarJogada();
  }
}

function handleClickSquare03() {
  if ($square03.textContent === "") {
    $square03.textContent = pegarJogada();
    jogadas[2] = pegarJogada();
    checkWinner();
    $square03.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Terceiro Quadrado</p>
      </div>
      </li> `;
    trocarJogada();
  }
}

function handleClickSquare04() {
  if ($square04.textContent === "") {
    $square04.textContent = pegarJogada();
    jogadas[3] = pegarJogada();
    checkWinner();
    $square04.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Quarto Quadrado</p>
      </div>
      </li> `;
    trocarJogada();
  }
}

function handleClickSquare05() {
  if ($square05.textContent === "") {
    $square05.textContent = pegarJogada();
    jogadas[4] = pegarJogada();
    checkWinner();
    $square05.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Quinto Quadrado</p>
      </div>
      </li> `;

    trocarJogada();
  }
}

function handleClickSquare06() {
  if ($square06.textContent === "") {
    $square06.textContent = pegarJogada();
    jogadas[5] = pegarJogada();
    checkWinner();
    $square06.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Sexto Quadrado</p>
      </div>
      </li> `;
    trocarJogada();
  }
}

function handleClickSquare07() {
  if ($square07.textContent === "") {
    $square07.textContent = pegarJogada();
    jogadas[6] = pegarJogada();
    checkWinner();
    $square07.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Setimo Quadrado</p>
      </div>
      </li> `;
    trocarJogada();
  }
}

function handleClickSquare08() {
  if ($square08.textContent === "") {
    $square08.textContent = pegarJogada();
    jogadas[7] = pegarJogada();
    checkWinner();
    $square08.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Oitavo Quadrado</p>
      </div>
      </li> `;
    trocarJogada();
  }
}

function handleClickSquare09() {
  if ($square09.textContent === "") {
    $square09.textContent = pegarJogada();
    jogadas[8] = pegarJogada();
    checkWinner();
    $square09.classList.add(`symbol-${pegarJogada()}`);
    let nomeJogador = $inputPlayer1.value;
    if (pegarJogada() === "o") {
      nomeJogador = $inputPlayer2.value;
    }
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
      <p class="move">${pegarJogada()}</p>
      <div class="wrapper-history-item">
  <p class="player-name">${nomeJogador}</p>
      <p class="position-move">Nono Quadrado</p>
      </div>
      </li> `;
    trocarJogada();
  }
}

function checkWinner() {
  let line123 = [jogadas[0], jogadas[1], jogadas[2]];
  let line456 = [jogadas[3], jogadas[4], jogadas[5]];
  let line789 = [jogadas[6], jogadas[7], jogadas[8]];
  let line159 = [jogadas[0], jogadas[4], jogadas[8]];
  let line357 = [jogadas[2], jogadas[4], jogadas[6]];
  let line147 = [jogadas[0], jogadas[3], jogadas[6]];
  let line258 = [jogadas[1], jogadas[4], jogadas[7]];
  let line369 = [jogadas[2], jogadas[5], jogadas[8]];

  if (
    line123[0] === pegarJogada() &&
    line123[1] === pegarJogada() &&
    line123[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (
    line456[0] === pegarJogada() &&
    line456[1] === pegarJogada() &&
    line456[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (
    line789[0] === pegarJogada() &&
    line789[1] === pegarJogada() &&
    line789[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (
    line159[0] === pegarJogada() &&
    line159[1] === pegarJogada() &&
    line159[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (
    line357[0] === pegarJogada() &&
    line357[1] === pegarJogada() &&
    line357[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (
    line147[0] === pegarJogada() &&
    line147[1] === pegarJogada() &&
    line147[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (
    line258[0] === pegarJogada() &&
    line258[1] === pegarJogada() &&
    line258[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (
    line369[0] === pegarJogada() &&
    line369[1] === pegarJogada() &&
    line369[2] === pegarJogada()
  ) {
    scoreWinner();
    resetaPartidaAtual();
  } else if (checkDraw() === true) {
    scoreWinner("empatou");
    resetaPartidaAtual();
  }
}

function checkDraw() {
  if (
    jogadas[0] !== "" &&
    jogadas[1] !== "" &&
    jogadas[2] !== "" &&
    jogadas[3] !== "" &&
    jogadas[4] !== "" &&
    jogadas[5] !== "" &&
    jogadas[6] !== "" &&
    jogadas[7] !== "" &&
    jogadas[8] !== ""
  ) {
    return true;
  }
  return false;
}

function handleStart() {
  resetaPlacar();
  resetaPartidaAtual();
}

function scoreWinner(empate) {
  if (empate === "empatou") {
    scorePlayer1 += 1;
    $scorePlayer1.textContent = `0${scorePlayer1}`;
    scorePlayer2 += 1;
    $scorePlayer2.textContent = `0${scorePlayer2}`;
    return empate;
  }

  if (pegarJogada() === "x") {
    scorePlayer1 += 1;
    $scorePlayer.textContent = `${$inputPlayer1.value} Venceu`;
    $scorePlayer1.textContent = `0${scorePlayer1}`;
  } else if (pegarJogada() === "o") {
    scorePlayer2 += 1;
    $scorePlayer.textContent = `${$inputPlayer2.value} Venceu`;
    $scorePlayer2.textContent = `0${scorePlayer2}`;
  }
}

$resetButton.addEventListener("click", handleClickReset);
$playButton.addEventListener("click", handleStart);
$checkBoxMatch.addEventListener("click", handleClickCheckBoxMatch);
$checkBox.addEventListener("click", handleClickCheckBox);
$square01.addEventListener("click", handleClickSquare01);
$square02.addEventListener("click", handleClickSquare02);
$square03.addEventListener("click", handleClickSquare03);
$square04.addEventListener("click", handleClickSquare04);
$square05.addEventListener("click", handleClickSquare05);
$square06.addEventListener("click", handleClickSquare06);
$square07.addEventListener("click", handleClickSquare07);
$square08.addEventListener("click", handleClickSquare08);
$square09.addEventListener("click", handleClickSquare09);
