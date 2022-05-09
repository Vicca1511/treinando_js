// Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

let prompt = require('prompt-sync')();

let nota1 = 1;
let nota5 = 5;
let nota10 = 10;
let nota50 = 50;
let nota100 = 100;

console.log(`Essa máquina possui notas de R$${nota1}, R$${nota5}, R$${nota10}, R$${nota50}, R$${nota100} reais `)
let saque = parseInt(prompt("Digite o valor que quer sacar: "));
console.log((saque).toFixed(2));

nota100 = Math.floor(saque/100);
let valorSacado = saque % 100;

nota50 = Math.floor(valorSacado/50);
valorSacado = valorSacado % 50

nota10 = Math.floor(valorSacado/10);
valorSacado = valorSacado % 10;

nota5 = Math.floor(valorSacado/5);
valorSacado = valorSacado % 5

nota1 = Math.floor(valorSacado/1)

console.log(`Você receberá: ${(nota100)} Notas de R$100.`)
console.log(`Você receberá: ${nota50} Notas de R$50.`)
console.log(`Você receberá: ${nota10} Notas de R$10.`)
console.log(`Você receberá: ${nota5} Notas de R$5.`)
console.log(`Você receberá: ${nota1} Notas de R$1.`)
//while(saque > 10 && saque < 600){}console.log(`Você receberá:${} Notas de 100 .`)
if(saque > (600)){

console.log(`Você não pode sacar valores maiores que R$ ${nota100 * 6}.`)

}else if(saque < 10){
    console.log(`Você não pode sacar valores menores que R$ ${nota10}.`)
}

