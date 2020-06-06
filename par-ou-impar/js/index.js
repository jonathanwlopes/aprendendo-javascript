const $executarPrograma = document.querySelector('#executarPrograma')

$executarPrograma.addEventListener('click',function(){
  parouimpar(11)

})

function parouimpar(numeroInserido){

  if (numeroInserido % 2 === 1){
    console.log("ímpar")
  }else{
    console.log("par")
  }


}






