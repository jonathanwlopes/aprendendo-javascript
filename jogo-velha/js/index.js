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

let plays = ["", "", "", "", "", "", "", "", ""];
let play = "x";

function getPlay() {
  return play;
}

function changePlay() {
  if (play === "x") {
    play = "o";
  } else {
    play = "x";
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

function handleClickSquare01() {
  if ($square01.textContent === "") {
    $square01.textContent = getPlay();
    plays[0] = getPlay();
    checkWinner();
    $square01.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Primeiro Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function handleClickSquare02() {
  if ($square02.textContent === "") {
    $square02.textContent = getPlay();
    plays[1] = getPlay();
    checkWinner();
    $square02.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Segundo Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function handleClickSquare03() {
  if ($square03.textContent === "") {
    $square03.textContent = getPlay();
    plays[2] = getPlay();
    checkWinner();
    $square03.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      `<li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Terceiro Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function handleClickSquare04() {
  if ($square04.textContent === "") {
    $square04.textContent = getPlay();
    plays[3] = getPlay();
    checkWinner();
    $square04.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      `<li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Quarto Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function handleClickSquare05() {
  if ($square05.textContent === "") {
    $square05.textContent = getPlay();
    plays[4] = getPlay();
    checkWinner();
    $square05.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      `<li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Quinto Quadrado</p>
        </div>
        </li> `;

    changePlay();
  }
}

function handleClickSquare06() {
  if ($square06.textContent === "") {
    $square06.textContent = getPlay();
    plays[5] = getPlay();
    checkWinner();
    $square06.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      `<li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Sexto Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function handleClickSquare07() {
  if ($square07.textContent === "") {
    $square07.textContent = getPlay();
    plays[6] = getPlay();
    checkWinner();
    $square07.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      `<li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Setimo Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function handleClickSquare08() {
  if ($square08.textContent === "") {
    $square08.textContent = getPlay();
    plays[7] = getPlay();
    checkWinner();
    $square08.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      ` <li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Oitavo Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function handleClickSquare09() {
  if ($square09.textContent === "") {
    $square09.textContent = getPlay();
    plays[8] = getPlay();
    checkWinner();
    $square09.classList.add(`symbol-${getPlay()}`);
    $historyList.innerHTML =
      $historyList.innerHTML +
      `<li class="history-item">
        <p class="move">${getPlay()}</p>
        <div class="wrapper-history-item">
        <p class="player-name">Nome do Jogador</p>
        <p class="position-move">Nono Quadrado</p>
        </div>
        </li> `;
    changePlay();
  }
}

function checkWinner() {
  let line123 = [plays[0], plays[1], plays[2]];
  let line456 = [plays[3], plays[4], plays[5]];
  let line789 = [plays[6], plays[7], plays[8]];
  let line159 = [plays[0], plays[4], plays[8]];
  let line357 = [plays[2], plays[4], plays[6]];
  let line147 = [plays[0], plays[3], plays[6]];
  let line258 = [plays[1], plays[4], plays[7]];
  let line369 = [plays[2], plays[5], plays[8]];


  if (
    line123[0] === getPlay() &&
    line123[1] === getPlay() &&
    line123[2] === getPlay()
  ) {
    console.log("Winner", getPlay());
  }
  if (
    line456[0] === getPlay() &&
    line456[1] === getPlay() &&
    line456[2] === getPlay()
  ) {
    console.log("Winner", getPlay());
  }
  if (
    line789[0] === getPlay() &&
    line789[1] === getPlay &&
    line789[2] === getPlay()
  ) {
    console.log("Winner", getPlay());
  }
  if (
    line159[0] === getPlay() &&
    line159[1] === getPlay() &&
    line159[2] === getPlay()
  ) {
    console.log("Winner", getPlay());
  }
  if (
    line357[0] === getPlay() &&
    line357[1] === getPlay() &&
    line357[2] === getPlay()
  ) {
    console.log("Winner", getPlay());
  }
  if (
    line147[0] === getPlay() &&
    line147[1] === getPlay() &&
    line147[2] === getPlay()
  ) {
    console.log("Winner", getPlay());
  }
  if (
    line258[0] === getPlay() &&
    line258[1] === getPlay() &&
    line258[2] === getPlay() 
  ) {
    console.log("Winner", getPlay());
  }
  if (
    line369[0] === getPlay() &&
    line369[1] === getPlay() &&
    line369[2] === getPlay()
  ) {
    console.log("Winner", getPlay());
  } 

}

function checkDraw(){

}

function handleStart() {
  checkDraw();
}

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
