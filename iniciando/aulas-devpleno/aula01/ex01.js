// === ATENÇÃO EXECUTE CADA EXERICICIO SEPARADAMENTE ===

// Dado um vetor de números, como poderia ser realizada a soma de todos os
// valores utilizando reduce.
const vetor = [1, 2, 3, 1]
const somar = (acumulado, atual) => acumulado + atual
const somatorio = vetor.reduce(somar, 0)
console.log(somatorio)

// Dado um vetor de números, como poderia ser realizada a soma de todos os
// valores pares utilizando reduce e filter.

const vetor = [1, 2, 3, 4]
const filtrar = item => item % 2 === 0
const somar = (acumulado, atual) => acumulado + atual
const somatorio = vetor.filter(filtrar).reduce(somar,0)
console.log(somatorio)

// Dado um vetor de números, como poderia ser realizada a soma de todos os
// valores ímpares utilizando reduce e filter.
const vetor = [1, 2, 3, 4, 5]
const filtrar = item => item % 2 === 1
const somar = (acumulado, atual) => acumulado + atual
const somatorio = vetor.filter(filtrar).reduce(somar)
console.log(somatorio)