//1. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// let array = [];
// let sum = 0;

// for (let i = 0; sum < 50; i++) {
//     let domUtente = prompt("inserisci un altro numero");
//     let nuovoNumero = parseInt(domUtente);

//     if (!isNaN(nuovoNumero)) {
//         array.push(nuovoNumero);
//         sum += nuovoNumero;
//     } else {
//         alert("non hai inserito un numero");
//     }
// }

// console.log(array);

//3. In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// let invitati = ["Giuseppe", "Paolo", "Vanessa", "Stefano", "Clara", "Alice"];
// let nomeUtente = prompt("Benvenuto alla festa, qual'è il suo nome?");

// if (invitati.includes(nomeUtente)) {
//     alert("benvenuta/o " + nomeUtente + ", la festa si trova al primo piano");
// } else {
//     alert("non sei sulla lista " + nomeUtente + ", pultroppo non puoi entrare");
// }

//2. Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
//Ogni volta che ne crei uno, stampalo a schermo.

let numero = parseInt(prompt("inserisci un numero"));

if (!isNaN(numero)) {
    let nArrayContenuti = [];
    for (let i = 0; i < numero; i++) {
        let numeroArray = [];

        for (let j = 0; j < 10; j++) {
            let nArray = Math.floor(Math.random() * 10) + 1;
            numeroArray.push(nArray);
        }
        nArrayContenuti.push(numeroArray);
    }
    console.log(nArrayContenuti);
}
