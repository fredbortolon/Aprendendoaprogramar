// Exercícios de fundamento

// Exercício1: Ola, mundo!
// Criar um script que imprima "Olá, mundo!" no console.

console.log("Olá,mundo!");

// Exercício2: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em número e exiba o tipo de váriavel no console.

const valorString = "1234";
const valorNumber = Number(valorString);

console.log(typeof valorNumber);

// Exercício 3: Manipulação de Strings
// Dado uma string "JavaScript é incrivel", escreva um código
// que conta quantas caracteres a string tem e quantas palavras na frase.

const exercicio3 = "JavaScript é incrivel"
const caracter = exercicio3.length
const palavras = exercicio3.split(" ").length

console.log(`O numero de caracteres é: ${caracter}`);
console.log(`O numero de palavras é: ${palavras}`);

// Exercício 4: Loop e Array
// Crie um array com 5 nomes e use um loop for para imprimir cada nome no console

const exercicio4 = ["João", "Maria", "José", "Pedro", "Tiago"];
for (let i = 0; i < exercicio4.length; i++) {
    console.log(exercicio4[i]);
}


// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas 
// (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas
// (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão.
// Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario(horario24) {
    const [hora, minuto] = horario24.split(":");
    let hora12 = hora % 12
}