const $txtInicio = document.querySelector("#txt-inicio");
const $txtFim = document.querySelector("#txt-fim");
const $txtPasso = document.querySelector("#txt-passo");
const $contar = document.querySelector("#contar");
const $resultado = document.querySelector("#resultado");

function contar() {
  let inicio = parseInt($txtInicio.value);
  let fim = parseInt($txtFim.value);
  let passo = parseInt($txtPasso.value);
  let numeros = "";

  if ($txtInicio.value.length == 0) {
    alert("Você precisa de um número de inicio.");
  } else if ($txtPasso.value.length == 0 || passo == 0) {
    alert("Valor de passo não pode ser zerado, definido como valor padrão");
    passo = inicio;
    $txtPasso.value = passo;
  }
  if ($txtInicio.value.length > 0) {
    while (inicio < fim - passo) {
      inicio += passo;
      numeros += ` ${inicio}`;
    }
    $resultado.innerHTML = `Contador: ${$txtInicio.value} ${numeros} `;
  }
}

$contar.addEventListener("click", contar);
