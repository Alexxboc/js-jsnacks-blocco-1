/* 

SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

// Inizializzo una variabile per la somma
let sum = 0;

// Inizializzo una variabile per l'indice
let i = 0;

// Creo un ciclo while che dovrà ripetersi finchè l'utente non ha inserito 10 volte il numero
while(i < 10) {

    // Chiedo all'utente di inserire un numero per 10 volte
    let numbers = Number(prompt(`type a number`));
    // Faccio la somma di tutti i numeri
    sum += numbers;
    // Indico il valore di incremento
    i++
}

// 

// Stampo in console la somma
console.log(sum);