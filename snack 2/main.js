/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// Chiedi all'utente due parole 

const parolaUno = prompt(`type a word`);
const parolaDue = prompt(`type a word`);

const lunghezzaUno = parolaUno.length
const lunghezzaDue = parolaDue.length

// Verifca qual'è la parola più lunga 

if (lunghezzaUno < lunghezzaDue) {
    console.log(`${parolaUno}, ${parolaDue}`)
} else if (lunghezzaDue < lunghezzaUno) {
    console.log(`${parolaDue}, ${parolaUno}`);
} else {
    console.log(`le due parole hanno la stessa lunghezza`)
}