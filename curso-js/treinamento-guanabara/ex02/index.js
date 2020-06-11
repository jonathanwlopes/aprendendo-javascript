function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtnascimento')
  let res = document.getElementById('res')

  if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente.')
  } else {
    let fsexo = document.getElementsByName('radsexo')
    let idade = ano - Number(fano.value)
    let genero = ""
    let img = document.createElement('img') // Cria uma tag img
    img.setAtributte = ('id', 'foto') // Cria os atributos da tag
    if (fsexo[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        // Criança
        img.setAttribute('src', 'https://picsum.photos/200/200')
      } else if(idade < 100){
        //Adulto
      }else{
        //Veinho
        console.log('veinho mentiroso')
      }
    } else if(fsexo[1].checked){
      genero = 'Feminino'
    }
    res.innerHTML = `<p>Detectamos ${genero} com ${idade}</p>`
    res.appendChild(img)
  }
}

