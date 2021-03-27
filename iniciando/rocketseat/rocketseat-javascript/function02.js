// function expression - function anonymous

//parameters
function makeJuice(prm1, prm2) {
  return `Suco de ${prm1} com ${prm2}`;
}
cup = makeJuice("Laranja", "Acerola"); // arguments
console.log(cup);

let myCallBack = () => {
  console.log("Estou fora, indo pra dentro.");
};
function sayMyName(callback) {
  callback();
  let msgInternal = "Executei a função e retornarei esta mensagem!";
  return msgInternal;
}
console.log(sayMyName(myCallBack));

// functions contructor
function Person(prop, prop2, prop3) {
  this.name = prop;
  this.age = prop2;
  this.walk = function () {
    return `${prop} está andando.`;
  };
  this.status = prop3;
}

const jonathan = new Person("Jonathan", 18, "Positivo");
console.log(jonathan.status, jonathan.walk());

//Prototype
let toName = "Jonathan";
toName.__proto__; // use console

//Type conversion
console.log(Number("9") + 5);

function myCarContruction() {
  (this.marca = "Fiat"), (this.modelo = "Uno"), (this.ano = "99");
}

const myCar = new myCarContruction();
console.log(myCar.modelo);

console.log(Number("9") + 2);
console.log(String(2) + 2);

// contando quantos caracteres/digitos tem
let word = "paralelepipedo";
console.log(word.length);

let numberAleatory = 123423;
console.log(String(numberAleatory).length);

// Transformar numero quebrado trocar ponto por virgula
let number = 423.536543;
console.log(Number(number.toFixed(2).replace(".", ","))); // retorno NaN (,) não vira número)
console.log(Number(number.toFixed(2).replace(".", "."))); // Não precisa do replace, apenas para questão pedagogica
console.log(number.toFixed(2));

// Transformando letras em maiusculas e minusculas
let word = "Programar é muito bacana";
console.log(word.toUpperCase());
console.log(word.toLowerCase().toUpperCase()); // dois metodos em um comando
console.log(word.toLowerCase());

// Verificar se o texto contém a palavra Amor
let phrases = "Eu quero viver o amor";
console.log(phrases.includes("amor")); // includes é case sensetive

// Relembrando funções contrutoras
function contructionPerson() {
  (this.name = "Jonathan"), (this.age = "27");
}

const pessoa = new contructionPerson();
console.log("Idade: " + pessoa.age);

// Relembrando callbacks com arrow function e objetos, com concatenação

boxMsgHappy = () => {
  let myMsg = {
    fristMsg: "Que seu dia seja abençoado, e cheio de alegrias!",
    secondMsg: "Muita saúde, paz e harmonia!",
  };
  console.log(`Imprimindo mensagem: ${myMsg.fristMsg}`);
};

printMsgHappy = (parm) => {
  console.log("Executando a função box ");
  parm();
};

printMsgHappy(boxMsgHappy);

// Revisão convertendo
let numberToString = 42879
numberToString = toString(numberToString)
console.log(typeof numberToString)

// Manipulando Strings e Arrays
let phrases = "Eu quero viver o Amor"
let myArray =  phrases.split(" ") // converteu String em Array + metodo de slip (serapação)
console.log(myArray)
let phrasesWithUnderscore = myArray.join("_") // Uniu informações do array colocando em uma nova variavel, com serapação por _
console.log(phrasesWithUnderscore)
console.log(phrasesWithUnderscore.toLowerCase())

// Revisão manipulação de Strings
let newText = 'Texto que contém espaços'
let myArray = newText.split(" ")
console.log(myArray)
let convertArrayToText = myArray.join(" ")
console.log(convertArrayToText)

// Criando Arrays com contructor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// transoformar cadeia de caracteres dentro do array
let word = "manipulação"
myArray = Array.from(word)
console.log(myArray.length)

// Manipulando Arrays
let techs = ["html", "css", 'js']
//adicionar item ao fim
techs.push("nodejs")
console.log(techs)
//adicionar ao começo
techs.unshift('sql')
// remover do fim
techs.pop()
//remover do incio
techs.shift()

console.log(techs)

//pegar somente alguns elementos como retorno da função
console.log(techs.slice(1,3))

// romover um ou mais itens em qualquer posição do array
techs.splice(1,2)
console.log(techs)
techs.push("react")
//encontrar a posição de um elemento no array
let index = techs.indexOf("react")
console.log(index) // encontrei o elemento
techs.splice(index, 1) // objeto encontrado foi colocado na variavel index e removido com o splice
console.log(techs)

//Revisão metodo join e split
let myText = 'Este é meu texto'
myArray = myText.split(" ")
console.log(myArray)
myArray.push('com', 'hunderscore')
myArray.unshift('Olha')
newText = myArray.join("_")
console.log(newText.toLocaleLowerCase())

// Revisão função contrutora
// Aprendizado, a função contrutora não pode ser um arrow function
function typeFragrance() {
    this.entrada = 'alecrim',
    this.saida = 'citrus'
}
let perfumes = new typeFragrance()
console.log(perfumes.entrada)

// Revisão manipulando arrays
myArray = []
myArray.push('a','b','c')
console.log(myArray)
myArray.unshift(1,2,3)
console.log(myArray)
myArray.splice(3)
console.log(myArray)
let findArray = myArray.indexOf(2)
console.log(findArray)
myArray[1] = 'Encontrei'
console.log(myArray[1])

// Expressões e Operadores
let fristName = new String('Jonathan') // foi criado um objeto
console.log(fristName) 
fristName.lastName  = 'Willian'
console.log(fristName.lastName)

let date = new Date('2021-03-21')
console.log(date)
console.log(date.__proto__)

const person = {
    lastName: 'Jonathan',
    age: '20'
}

console.log(person)
delete person.age
console.log(person)

// Operadores aritimeticos
// Resto da divisão
let remainder
remainder = 11 % 7
console.log(remainder)

// incremento ++
let increment = 0
console.log(increment++) // o incremento acontece apos passar pela linha
console.log(increment++)

// exponencial
console.log(2 ** 2)

// Grouping operator
let total = (2 + 3) * 5
console.log(total)

// Operadores de comparação, comparar valores e retornar um boolean
let one = 1
let two = 2

console.log(one == 1)
console.log(one != 2)
console.log(one === 1) // estritamente igual
console.log(one !== 2)
console.log(one > 2)
console.log(one < two)
console.log(one >= 1)
console.log(one <= one)

//Operadores de atribuição
let x
x = 1
x = x+2
console.log(x*=2)

//Operadores logicos
let pao = true
let queijo = false

//AND &&
console.log(pao && queijo)

//OR||
console.log(pao || queijo)

// NOT !
console.log(!pao)