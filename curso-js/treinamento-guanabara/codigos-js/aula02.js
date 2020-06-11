let c = 1;
while (c <= 6) {
  //Esquanto o contador for menor ou igual a 6
  console.log(`Passo: ${c}`);
  c++; // Contador recebe c+1 ele era 1 no primeiro loop vale 2
}

let c = 1;
do {
  console.log(`Passo: ${c}`);
  c++;
} while (c <= 6);

for (i = 1; i <= 6; i++) {
  console.log(`Passo: ${i}`);
}

//num objeto numero1 vetor com 2 posições
let num = {
  numeros1: [[1], [3]],
  numeros2: [
    [7, 8, 9],
    [10, 11, 12],
  ],
};

console.log(num.numeros1[1]);

num.numeros1.push([2]); //Adiciona o valor a ultima posição
console.log(num.numeros1);

console.log(num.numeros1.length); // Retorna o comprimento do vetor

// console.log(num.numeros1.sort()) // Organiza os numeros

for (i = 0; i < num.numeros1.length; i++) {
  console.log(`A posição ${i} tem o valor ${num.numeros1[i]}`);
}

for (item in num.numeros1) {
  //Para cada item em numeros1
  console.log(`A posição ${item} tem o valor ${num.numeros1[item]}`);
}

// BUSCAR VALORES DENTRO DO ARRAY//

nomes = ["Jonathan", "Raul", "Leticia", "Ana"];
let pos = nomes.indexOf("Jonathan"); // Valor que eu desejo encontrar
if (pos == -1) {
  console.log("Não encontrado");
} else {
  console.log(`Encontrando o valor na array: ${pos}`);
}

function parimpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

resposta = parimpar(15);
console.log(resposta);

function soma(n1,n2){
  return n1+n2
}

console.log(soma(12,43))

// recursividade - fatorial
function fatorial(n){

  if(n == 1){
    return 1
  } else{
    return n * fatorial(n-1)
  }
}
console.log(fatorial(5))

