const $panelMove00 = document.querySelector(".panel-move00");
const $panelMove01 = document.querySelector(".panel-move01");
const $panelMove02 = document.querySelector(".panel-move02");
const $panelMove03 = document.querySelector(".panel-move03");
const $panelMove04 = document.querySelector(".panel-move04");
const $panelMove05 = document.querySelector(".panel-move05");
const $panelMove06 = document.querySelector(".panel-move06");
const $panelMove07 = document.querySelector(".panel-move07");
const $panelMove08 = document.querySelector(".panel-move08");

let move = "X";

let boxsFilling = [
  $panelMove00.textContent,
  $panelMove01.textContent,
  $panelMove02.textContent,
  $panelMove03.textContent,
  $panelMove04.textContent,
  $panelMove05.textContent,
  $panelMove06.textContent,
  $panelMove07.textContent,
  $panelMove08.textContent,
];

function toggle() {
  if (move == "X") {
    move = "O";
  } else if (move == "O") {
    move = "X";
  }
}

function checkDraw() {
  if (boxsFilling.includes("")) {
    console.log("Segue o Jogo");
    return;
  } else if (boxsFilling.includes != "") {
    console.log("empatou");
  }
}

function verifyWinner() {
  if (
    (boxsFilling[0] == "X" && boxsFilling[1] == "X" && boxsFilling[2] == "X") ||
    (boxsFilling[3] == "X" && boxsFilling[4] == "X" && boxsFilling[5] == "X") ||
    (boxsFilling[6] == "X" && boxsFilling[7] == "X" && boxsFilling[8] == "X") ||
    (boxsFilling[0] == "X" && boxsFilling[4] == "X" && boxsFilling[8] == "X") ||
    (boxsFilling[2] == "X" && boxsFilling[4] == "X" && boxsFilling[6] == "X")
  ) {
    console.log("winner X");
    cleanBox();
    return;
  } else if (
    (boxsFilling[0] == "O" && boxsFilling[1] == "O" && boxsFilling[2] == "O") ||
    (boxsFilling[3] == "O" && boxsFilling[4] == "O" && boxsFilling[5] == "O") ||
    (boxsFilling[6] == "O" && boxsFilling[7] == "O" && boxsFilling[8] == "O") ||
    (boxsFilling[0] == "O" && boxsFilling[4] == "O" && boxsFilling[8] == "O") ||
    (boxsFilling[2] == "O" && boxsFilling[4] == "O" && boxsFilling[6] == "O")
  ) {
    console.log("winner O");
    cleanBox();
    return;
  } else {
    checkDraw();
  }
}

function cleanBox() {
  $panelMove00.textContent = "";
  $panelMove01.textContent = "";
  $panelMove02.textContent = "";
  $panelMove03.textContent = "";
  $panelMove04.textContent = "";
  $panelMove05.textContent = "";
  $panelMove06.textContent = "";
  $panelMove07.textContent = "";
  $panelMove08.textContent = "";
}

$panelMove00.addEventListener("click", function () {
  if ($panelMove00.textContent != "") return;
  boxsFilling[0] = $panelMove00.textContent = move;
  $panelMove00.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove01.addEventListener("click", function () {
  if ($panelMove01.textContent != "") return;
  boxsFilling[1] = $panelMove01.textContent = move;
  $panelMove01.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove02.addEventListener("click", function () {
  if ($panelMove02.textContent != "") return;
  boxsFilling[2] = $panelMove02.textContent = move;
  $panelMove02.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove03.addEventListener("click", function () {
  if ($panelMove03.textContent != "") return;
  boxsFilling[3] = $panelMove03.textContent = move;
  $panelMove03.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove04.addEventListener("click", function () {
  if ($panelMove04.textContent != "") return;
  boxsFilling[4] = $panelMove04.textContent = move;
  $panelMove04.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove05.addEventListener("click", function () {
  if ($panelMove05.textContent != "") return;
  boxsFilling[5] = $panelMove05.textContent = move;
  $panelMove05.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove06.addEventListener("click", function () {
  if ($panelMove06.textContent != "") return;
  boxsFilling[6] = $panelMove06.textContent = move;
  $panelMove06.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove07.addEventListener("click", function () {
  if ($panelMove07.textContent != "") return;
  boxsFilling[7] = $panelMove07.textContent = move;
  $panelMove07.textContent = move;
  toggle();
  verifyWinner();
});

$panelMove08.addEventListener("click", function () {
  if ($panelMove08.textContent != "") return;
  boxsFilling[8] = $panelMove08.textContent = move;
  $panelMove08.textContent = move;
  toggle();
  verifyWinner();
});
