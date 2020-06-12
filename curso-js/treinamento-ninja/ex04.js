/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let novaVar = [1,'Jonathan',{sobrenome: 'Lopes'}, undefined, function() {}]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
let novaFuncao = function(arr){
  return novaVar;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(novaFuncao(novaVar)[1])
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
let novaFuncao2 = function(array, indice){
  return array[indice];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let novoArray = [1,'Jonathan', true, [1,2,3], {param: 'objeto'}]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(i=0; i < novoArray.length; i++){
  console.log(novaFuncao2(novoArray,i))
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(nomelivro){
 let todosLivros = {
   'O homem de giz': {
    quantidadePaginas: 302,
    autor: 'Jonathan',
    editora: 'Amazon'
   },
   'A mulher na janela': {
    quantidadePaginas: 227,
    autor: 'A.J Fim',
    editora: 'Amazon'
   },
   'A paciente silenciosa':{
    quantidadePaginas:105,
    autor: 'Raul',
    editora: 'Record'
   }
 }
  return !nomelivro ? todosLivros : todosLivros[nomelivro]
  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

let nomeLivro = 'A mulher na janela'
console.log(`O livro ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas}`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/


console.log(`O auto do livro ${nomeLivro} é ${book(nomeLivro).autor}`)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}`)