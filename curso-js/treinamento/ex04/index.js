const $txtInicio = document.querySelector("#txt-inicio");
const $txtFim = document.querySelector("#txt-fim");
const $txtPasso = document.querySelector("#txt-passo");
const $btnContar = document.querySelector("#btn-contar");
const $divArea = document.querySelector("#div-area");
let txtResultado = document.createElement("textarea");
txtResultado.className = "txt-resultado";
$divArea.appendChild(txtResultado);

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
    txtResultado.innerHTML = `Digite um valor para iniciar.`;
  } else {
    if (passo <= 0) {
      passo = 1;
      alert("Passo inválido, considerando passo 1");
    }
    txtResultado.innerHTML = `Contando:`;
    if (inicio < fim) {
      while (inicio <= fim) {
        txtResultado.innerHTML += `${inicio} \u{1F449}`;
        inicio += passo;
      }
      txtResultado.innerHTML += `\u{1F3C1}`;
    } else if (inicio >= fim) {
      while (inicio >= fim) {
        txtResultado.innerHTML += `${inicio} \u{1F449}`;
        inicio -= passo;
      }
      txtResultado.innerHTML += `\u{1F3C1}`;
    }
  }
}
