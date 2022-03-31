/* 
Calcola la somma e la media dei primi 10 numeri.
*/

// // Creo un array con i primi 10 numeri
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Dichiaro una variabile per la somma
// let sum = 0;

// // Creo un ciclo di iterazioni
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }

// // Stampo in console la somma dei numeri
// console.log(sum)

// // Calcolo la media
// const media = sum / numbers.length

// // Stampo in console la media
// console.log(media)

// SEMPLIFICAZIONE 

let somma = 0
let media = 0

for(let i = 1; i <= 10; i++){
    somma +=i
}

media = somma / 10;
console.log(media,somma)