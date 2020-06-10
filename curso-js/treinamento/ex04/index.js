const $txtInicio = document.querySelector("#txt-inicio");
const $txtFim = document.querySelector("#txt-fim");
const $txtPasso = document.querySelector("#txt-passo");
const $btnContar = document.querySelector("#btn-contar");
const $msgResultado = document.querySelector("#msg-resultado");

$btnContar.addEventListener("click", calcular);

function calcular() {
  let inicio = parseInt($txtInicio.value);
  let fim = parseInt($txtFim.value);
  let passo = parseInt($txtPasso.value);

  if (
    $txtInicio.value.length === 0 ||
    $txtFim.value.length === 0 ||
    $txtPasso.value.length === 0
  ) {
    $msgResultado.textContent = "Digite um valor para iniciar.";
  } else {
    if(passo <= 0){
      passo = 1
      alert("Passo inválido, considerando passo 1")
    }
    $msgResultado.innerHTML = `Contando: <br>`
    if (inicio < fim) {
      while (inicio <= fim) {
        $msgResultado.innerHTML += `${inicio} \u{1F449}`;
        inicio += passo;
      }
      $msgResultado.innerHTML += `\u{1F3C1}`;
    } else if (inicio >= fim) {
      while (inicio >= fim) {
        $msgResultado.innerHTML += `${inicio} \u{1F449}`;
        inicio -= passo;
      }
      $msgResultado.innerHTML += `\u{1F3C1}`;
    }
  }
}
