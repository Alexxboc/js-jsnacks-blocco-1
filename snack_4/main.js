/* 

SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

*/

// Crea una lista di invitati

const list = [`alessandro`, `santiago`, `gioele`, `antonella`];

// Chiedi il nome all'utente
const userName = prompt(`type your name`);

// Dichiara una variabile con valore booleano
let succes = false;

for(i = 0; i < list.length; i++){
    // console.log(list[i]);

// Crea una variabile per ogni singolo nome della lista
    let listName = list[i];

// Controlla che il nome sia nella lista
    if(userName === listName) {
        succes = true;
    } 
}

// Stampa il messaggio all'utente
if(succes) {
    console.log(`${userName} puoi partecipare alla festa`);
} else {
    console.log(`${userName} NON puoi partecipare alla festa`);
}
