//1. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let array = [];
let sum = 0;

for (let i = 0; sum < 50; i++) {
    let domUtente = prompt("inserisci un altro numero");
    let nuovoNumero = parseFloat(domUtente);

    if (!isNaN(nuovoNumero)) {
        array.push(nuovoNumero);
        sum += nuovoNumero;
    } else {
        alert("non hai inserito un numero");
    }
}

console.log(array);
