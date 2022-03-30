/*

SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

// Creo una variabile con un array vuoto

let arrayNumbers = []
console.log(arrayNumbers);

// Creao un ciclo con 6 iterazioni
for(i = 0; i < 6; i++){

// Chiedi all'utente di inserire un numero per 6 volte
    const userNumber = Number(prompt(`Type a number`))

// Verifica che il numero sia pari
    if(userNumber % 2 != 0){
        arrayNumbers.push(userNumber)
    } else{}
}

// Inserisci i numero dispari nell'array
console.log(arrayNumbers)


