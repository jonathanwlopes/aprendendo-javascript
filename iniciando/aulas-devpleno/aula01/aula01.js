/*
Posso definir a variavel basicamente de duas maneiras
const -> constante quando atribuido o valor não posso atribuir um novo valor.
*/

const objeto = {
  chave: 'valor1',
  chave2: 'valor2'
}
console.log(objeto)

/*
functions are first class citizens
Da mesma forma que posso colocar a função na varivael
consigo passar ela como parametro para outra função.
Isso acontece pois o javascript é uma linguagem funcional, desta forma consigo
compor as funções.
*/

const soma = function (a, b) {
  return a + b
}
const calculadora = function (op, a, b) {
  return (op(a, b))
}
console.log(calculadora(soma, 1, 2))

/*
O que o map faz: Dado um vetor ele vai passar por cada item deste vetor,
e vai converter o valor para um novo valor.
Neste exemplo vou retornar o valor original do vetor, e o valor dobrado.
Mas poderia utilizar esta ferramenta para retornar diversas opções.
Ao utilizar const ele retorna para mim um novo vetor, utilizando const
o código ganha mais qualidade.
*/

const vetor = [1, 2, 3, 4, 5]

const dobrado = vetor.map(function (item) {
  return { original: item, dobrado: item * 2 }
})
console.log(dobrado)

/*
O que o filter faz: Consigo utilizar para filtrar informações do meu vetor,
neste caso estou retornando se o item do vetor é par utilizando o filter.
*/

const pares = vetor.filter(function (item) {
  return item % 2 === 0
})
console.log('Pares:', pares)

/*
Funcionalidade acima com arrow function.
Ao utilizar o filter, map, temos uma high order function, que é uma função
que recebe outra função.
*/

const dobrar = item => {
  return item * 2
}

const paresDobrado = vetor.filter(function (item) {
  return item % 2 === 0
}).map(dobrar)
console.log('Pares Dobrado:', paresDobrado)

// Aqui temos o reduce, onde todos os itens do vetor foram somados.

const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrado.reduce(somar, 0)
console.log('Somar com reduce', somatorio)