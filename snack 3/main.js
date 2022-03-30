/* 

SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

// Dichiaro una variabile per la somma

let sum = 0


for (let i = 0; i < 10; i++) {
// Chiedere all'utente di inserire un numero per 10 volte
    let numbers = Number(prompt(`type a number`)) 
    sum += numbers
    console.log(sum);
    




// 
}