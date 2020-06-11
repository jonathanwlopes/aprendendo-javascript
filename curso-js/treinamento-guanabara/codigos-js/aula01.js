// // Criando e buscando um objeto.
let book = {
  name: "Desvendando Javascript",
  topic: "Javascript",
  price: 99.9,
};
console.log(book.name);

// Criando novas propriedades
book.name = "Novos Horizontes";
console.log(book.name);

// Criando arrays
let primes = [1, 2, 3, 4, 5, 6, 7];
console.log(primes[0]); // O primeiro elemento do array
console.log(primes.length); // Quantidade de elementos no array
primes[4] = 10; // Adiciona um elemento por meio de atribuição
console.log(primes[4]);
primes[4] = 11; // Altera um elemento por meio de atribuição
console.log(primes[4]);

let points = [
  { nome: "Jonathan", idade: 26 },
  { nome: "Raul", idade: 22 },
]; // Uma array com dois objetos
console.log(points[1].nome); // Navegando entre a array e o objeto

let mediaEscolar = {
  //Objeto com duas propriedades, e três arrays
  aluno01: [[(nomeAluno = "Jonathan")], [(notaAluno = 10)], [(faltas = 2)]],
  aluno02: [[(nomeAluno = "Raul")], [(notaAluno = 10)], [(falta = 2)]],
};
console.log(mediaEscolar.aluno02[0]);

function mais1(x) {
  // Função para retornar o valor incrementado
  return (x += 1);
}
console.log(mais1(20));

//Quando temos um objeto combinado com função se torna um metodo
a = []; //Array vazio
a.push(1, 2, 3); // Metodo push adiciona elementos ao array
a.reverse(); //Metodo reverse, inverte a ordem do array
console.log(a);

// Quando desejamos pegar a hora do sistema
let hora = new Date();
let horaAtual = hora.getHours;

// Dia da semana com estrutura switch
let agora = new Date();
let diaSem = agora.getDay();

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break
  case 1:
    console.log("Segunda-Feira");
    break
  case 2:
    console.log("Terça-Feira");
    break
  case 3:
    console.log("Quarta-Feira");
    break
  case 4:
    console.log("Quinta-Feira");
    break
  case 5:
    console.log("Sexta-Feira");
    break
  case 6:
    console.log("Sabado");
    break
  default:
    console.log("Dia inválido")
}

