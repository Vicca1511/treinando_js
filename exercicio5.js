// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:

let prompt = require('prompt-sync')();
console.log("Vamos construir um triângulo , você cria o triangulo que desejar apenas atribuindo valores aos seus lados")
console.log("Insira os valores do seu triângulo.")

ladoA = +prompt("Digite um lado de um triângolo com qualquer valor: ");
ladoB = +prompt("Digite um lado de um triângolo com qualquer valor: ");
ladoC = +prompt("Digite um lado de um triângolo com qualquer valor: ");

let triangulo = (ladoA + ladoB + ladoC) ;
console.log(triangulo);

if (ladoA >= ladoB + ladoC) {
    console.log("NÃO FORMA TRIANGULO")
    
}else if (ladoA ** 2 == ladoB**2 + ladoC ** 2) {

    console.log("TRIANGULO RETANGULO")
    
}else if (ladoA == ladoB && ladoC == ladoA && ladoB == ladoC) {

    console.log("TRIANGULO EQUILATERO")

    
}else if (ladoA == ladoB||ladoC == ladoA || ladoB == ladoC) {

    console.log("TRIANGULO RETANGULO")
    
    
}else if (ladoA**2 > ladoB**2 + ladoC**2) {//Se A² > B² + C²


    console.log("TRIANGULO OBTUSANGULO")


//Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;


    


    
}else if (ladoA <  ladoB + ladoC) {//Se A² < B² + C²

    console.log("TRIANGULO RETANGULO")

    // Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
}else if (ladoA >= ladoB + ladoC) {

    console.log("TRIANGULO RETANGULO")
    
    // Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
}else if (ladoA >= ladoB + ladoC) {

    console.log("TRIANGULO RETANGULO")

    // Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
}else if (ladoA >= ladoB + ladoC) {

    console.log("TRIANGULO RETANGULO")
    
    //Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;
    
}else if (ladoA >= ladoB + ladoC) {

    console.log("TRIANGULO RETANGULO")

}



