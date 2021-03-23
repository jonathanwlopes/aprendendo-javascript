const $field00 = document.querySelector(".field00");
const $field01 = document.querySelector(".field01");
const $field02 = document.querySelector(".field02");
const $field03 = document.querySelector(".field03");
const $field04 = document.querySelector(".field04");
const $field05 = document.querySelector(".field05");
const $field06 = document.querySelector(".field06");
const $field07 = document.querySelector(".field07");
const $field08 = document.querySelector(".field08");

let move = "X";

function toggleMove() {
  if (move == "X") {
    move = "O";
  } else {
    move = "X";
  }
}

function verifyGame() {
  let result = "";
  if (
    $field00.textContent != "" &&
    $field00.textContent == $field01.textContent &&
    $field01.textContent == $field02.textContent
  ) {
    result = $field00.textContent;
  } else if (
    $field03.textContent != "" &&
    $field03.textContent == $field04.textContent &&
    $field04.textContent == $field05.textContent
  ) {
    result = $field03.textContent;
  } else if (
    $field06.textContent != "" &&
    $field06.textContent == $field07.textContent &&
    $field07.textContent == $field08.textContent
  ) {
    result = $field06.textContent;
  }

  return result;
}

$field00.addEventListener("click", function () {
  if ($field00.textContent != "") return;
  $field00.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field01.addEventListener("click", function () {
  if ($field01.textContent != "") return;
  $field01.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field02.addEventListener("click", function () {
  if ($field02.textContent != "") return;
  $field02.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field03.addEventListener("click", function () {
  if ($field03.textContent != "") return;
  $field03.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field04.addEventListener("click", function () {
  if ($field04.textContent != "") return;
  $field04.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field05.addEventListener("click", function () {
  if ($field05.textContent != "") return;
  $field05.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field06.addEventListener("click", function () {
  if ($field06.textContent != "") return;
  $field06.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field07.addEventListener("click", function () {
  if ($field07.textContent != "") return;
  $field07.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
$field08.addEventListener("click", function () {
  if ($field08.textContent != "") return;
  $field08.textContent = move;
  toggleMove();
  console.log(verifyGame());
});
