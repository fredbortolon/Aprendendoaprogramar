console.log("Olá, JavaScript")

// Estrutura de condição - if, else, else if

const idade = 20;

if(idade <= 13) {
    console.log("Criança")
} else if(idade <20) {
    console.log("Adolescente")
}else {
    console.log("Adulto")
}

if(true){
    console.log("Isso executa");
}


if(false) {
    console.log("Isso não executa");
    }    else {
        console.log("Isso aqui executa")
 }

 // Switch

 const fruta = "Mamão"

 switch(fruta) {
    case "Banana":
        console.log("Banana é a fruta");
        break;
    case "Maçã":
        console.log("Maçã é a fruta");
        break;
        default:
            console.log("Fruta não encontrada");
 }

 //Estrutura de repetição
 // 1, 2, 3... => dependendo de uma condição
 // Contador, condição de limite, incremento
 for(let i = 0; i < 5; i++) {
    // concatenação
    console.log("O valor de i é: " + i);
 }

 // while
 let k = 0;

 while(k < 5) {
    console.log("O valor de k é: " + k);
    k++;
 }

 // do while

 let j = 0
 do {
    console.log("O valor de j é: " + j);
    j++
 } while(j < 5);


 // funções
 // function nome(arg1, arg2) {corpo}
 function cumprimentar(nome) {
    console.log("Olá! " + nome);
 }
// invocação = nome()
 cumprimentar("Fred");

 //escopo de variáveis

 let cor = "azul"; // escopo global

 function mostrarCor(){
    let cor = "verde";
    console.log(cor)
    //escopo local
 }

 console.log(cor);
 mostrarCor();


 // hoisting = içamento
testHoisting();

 function testHoisting(){
    console.log("Deu certo!");
 }


 // arrow function
const testeArrow = () => console.log("Isso também é uma função.");

testeArrow();



// truthy e falsy
const minhaVariavel1 = ""; // falsy
const minhaVariavel2 = "Algum texto";

if(minhaVariavel1){
    console.log("É verdadeiro");
}   else{
    console.log("É falso!")
}

if(minhaVariavel2){
    console.log("É verdadeiro 2")
} else{
    console.log("É falso 2");
}


// array, listas = array sempre começa no indice 0
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[2]);

numeros.push(6);

console.log(numeros);

numeros.pop();

console.log(numeros);

// strings

const minhaStringNova = "Olá, mundo!"

const minhaString3 = minhaStringNova + " como você esta?"

console.log(minhaString3);

// interpolação

const minhaString4 = `${minhaStringNova} Como você esta?`
console.log(minhaString4);

console.log(minhaString4.length); // quantidade de caracteres;
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());
console.log(minhaString4.toLowerCase());


// Data e hora

const agora = Date()
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

// Math

console.log(Math.PI);
console.log(Math.round(3.6));
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));

