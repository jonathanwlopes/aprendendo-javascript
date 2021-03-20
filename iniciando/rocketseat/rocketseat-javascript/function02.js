// function expression - function anonymous

//parameters
function makeJuice(prm1,prm2){
    return `Suco de ${prm1} com ${prm2}`

}
cup = makeJuice('Laranja', 'Acerola') // arguments
console.log(cup)


let myCallBack = () => {
    console.log('Estou fora, indo pra dentro.')
}
function sayMyName(callback){
    callback()
   let msgInternal = 'Executei a função e retornarei esta mensagem!'
    return msgInternal
}
console.log(sayMyName(myCallBack))

// functions contructor
function Person(prop, prop2, prop3){
    this.name = prop
    this.age = prop2
    this.walk = function(){
        return `${prop} está andando.`
       }
    this.status = prop3
}

const jonathan = new Person('Jonathan', 18, "Positivo")
console.log(jonathan.status, jonathan.walk())

//Prototype
let toName = 'Jonathan'
toName.__proto__ // use console

//Type conversion
console.log(Number('9') + 5)