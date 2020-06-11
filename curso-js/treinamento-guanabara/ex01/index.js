document.body.addEventListener('onload', carregar())


function carregar(){
  console.log('teste')
  let $msg = window.document.querySelector('#msg')
  let data = new Date()
  let hora = data.getHours()
  msg.innerHTML = `Seja bem vindo!`
  if (hora >= 0 && hora < 12){
    // BOM DIA!!
    msg.innerHTML = `Agora são: ${hora} horas - Bom dia!`
  } else if (hora >= 12 && hora < 18){
    //BOA TARDE!
    msg.innerHTML = `Agora são ${hora} horas - Boa tarde!` 
  }else{
    //BOA NOITE
    msg.innerHTMl = `Agora são ${noite} horas - Boa noite!`
  }
}

