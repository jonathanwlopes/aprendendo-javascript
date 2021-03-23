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