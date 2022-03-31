/* 

SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

let sum = 0;
let i = 0;

while(i < 10) {
    let numbers = Number(prompt(`type a number`));
    sum += numbers;

    i++
}

console.log(sum);