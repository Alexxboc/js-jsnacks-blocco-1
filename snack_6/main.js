/* 
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

// Crea un array vuoto

const arrayNumbers = []

// Chiedi all'utente quanti numeri dobbiamo utilizzare
let user_numbers = Number(prompt(`Type a number`));

// Aggiungi il numero scelto all'array
arrayNumbers.push(user_numbers)

// Crea un ciclo di numeri
for(let i = 1; i < arrayNumbers; i++){
    console.log(Math.pow(i,3));
}


