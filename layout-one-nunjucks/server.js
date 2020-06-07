const express = require('express')
const nunjucks = require('nunjucks')
const movies = require("./data")

const server = express()


server.use(express.static("public"))

server.set('view engine', 'njk')

nunjucks.configure("views", {
  express:server,
  autoescape: false
})

server.listen(5000, function(){
  console.log("server is running")
})

server.get('/', function(req, res){
  const about = {
    name: "Jonathan Lopes",
    occupation: "Estudante",
    description: "Buscando novos desafios, aprendendo novas tecnologias, a cada dia expandindo meu conhecimento em busca de uma oportunidade para colocar em prática meus estudos.",
    links: [
      {name: "Banco de dados", url: "#"},
      {name: "Front-end", url: "#"},
      {name: "Back-end", url:"#"}
    ]
  }

  return res.render("about", {about})
  
})

server.get('/movies', function(req, res){
  return res.render('movies', { items:movies })
})

server.get('/tecnology', function(req ,res){
  return res.render('tecnology')

})

server.use(function(req, res) {
  res.status(404).render("not-found");
});