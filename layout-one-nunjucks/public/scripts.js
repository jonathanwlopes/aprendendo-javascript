const $modalOverlay = document.querySelector(".modal-overlay");
const $closeModal = document.querySelector(".close-modal");
const $card01 = document.querySelector(".card01");
const $card02 = document.querySelector(".card02");
const $card03 = document.querySelector(".card03");
const $card04 = document.querySelector(".card04");
const $card05 = document.querySelector(".card05");
const $card06 = document.querySelector(".card06");

let movieId = "";

function addId(idmovie) {
  $modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${idmovie}`;
}

function handleClickCloseModal() {
  $modalOverlay.classList.remove("active");
  $modalOverlay.querySelector("iframe").src=""

}

function handleClickCard01() {
  movieId = $card01.getAttribute("id");
  $modalOverlay.classList.add("active");
  addId(movieId);
}
function handleClickCard02() {
  movieId = $card02.getAttribute("id");
  $modalOverlay.classList.add("active");
  console.log(movieId)
  addId(movieId);

}

function handleClickCard03(){
  movieId = $card03.getAttribute("id");
  $modalOverlay.classList.add("active");
  addId(movieId)
}

function handleClickCard04(){
  movieId = $card04.getAttribute("id");
  $modalOverlay.classList.add("active");
  addId(movieId)
}

function handleClickCard05(){
  movieId = $card05.getAttribute("id")
  $modalOverlay.classList.add("active");
  addId(movieId)
}

function handleClickCard06(){
  movieId = $card06.getAttribute("id")
  $modalOverlay.classList.add("active");
  addId(movieId)
}

$closeModal.addEventListener("click", handleClickCloseModal);
$card01.addEventListener("click", handleClickCard01);
$card02.addEventListener("click", handleClickCard02);
$card03.addEventListener("click", handleClickCard03);
$card04.addEventListener("click", handleClickCard04);
$card05.addEventListener("click", handleClickCard05);
$card06.addEventListener("click", handleClickCard06);
