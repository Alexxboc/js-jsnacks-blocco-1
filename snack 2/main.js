/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// Chiedi all'utente due parole 

const parolaUno = prompt(`type a word`);
const parolaDue = prompt(`type a word`);

// Verifca qual'è la parola più lunga 

if (parolaUno.length < parolaDue.length) {
    console.log(parolaUno)
    console.log(parolaDue)
} else if (parolaDue.length < parolaUno.length) {
    console.log(parolaDue)
    console.log(parolaUno)
} else {
    console.log(`le due parole hanno la stessa lunghezza`)
}