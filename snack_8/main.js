/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

// Chiedi un numero di 4 cifre all'utente
const number = prompt(`Scrivi un numero di 4 cifre`);
if(number.length < 4) {
    alert(`Attenzione! Non hai inserito un numero di 4 cifre. Ripeti l'operazione`);
} else {}

// console.log(number)
// console.log(number.length)
// console.log(number[0])

// Dichiaro una varibile per la somma
let sum = 0;
// Creo un ciclo per fare la somma
for(let i = 0; i < number.length; i++){
    // console.log(i);
    sum += Number(number[i])
}

// Stampo in console la somma dei numeri
console.log(sum);