var name // declaração or declaration
nameHuman = 'Jonathan' // assignment or atribuition
console.log (typeof nameHuman) // typeof

let age = 20
let isHuman = true

let age, isHuman, nameHuman // grouping of statements
age = 27
isHuman = true
nameHuman = 'Jonatan'

console.log(nameHuman, age, isHuman)
console.log('O '+ nameHuman+ 'tem '+ age+ ' anos') // contacting values
console.log(`O ${nameHuman}, tem ${age} anos!`)// interpolating values

// Objects
const person ={
    name: 'Jhon',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person.name) //printed property
console.log(`O ${person.name}, tem ${person.age} anos!`)

// Arrays
const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
] // example

// Acess values arrays
console.log(animals)
console.log(animals[0])
console.log(animals.length)
console.log(animals[2].name)

// Exercice
let weight;
console.log(typeof weight)

let nameHuman, age, stars, isSubscribed
nameHuman = 'Jonathan'
age = 18
stars = 20.1
isSubscribed = true

let student = {}
console.log(typeof student)

student = {
    nameHuman: 'Jonathan',
    age: 18,
    isSubscribed: true,
    weight: 20
}
console.log(`O estudante ${student.nameHuman} tem ${student.age} de idade e pesa ${student.weight} KG.`)

// --

let students = []
console.log(students)

student = {
    nameHuman: 'Jonathan',
    age: 18,
    isSubscribed: true,
    weight: 20
}
students = ['Jonathan']
students = [student,students]
console.log(students[1])



