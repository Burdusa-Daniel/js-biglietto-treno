let km = parseInt(prompt("quanti chilometri vuoi percorrere?"));
let age = parseInt(prompt("inserisci la tua età"));
let kmCost = 0.21;
let ticketPrice = km * kmCost;
//console.log("il costo del tuo biglietto è di :" + ticketPrice);
if (age < 18) {
    ticketPrice = ticketPrice - (ticketPrice * (20 / 100));
    console.log("il prezzo del tuo biglietto è di: " + ticketPrice.toFixed(2)+"€");
} else if (age > 65) {
    ticketPrice = ticketPrice - (ticketPrice * (40 / 100));
    console.log("il prezzo del tuo biglietto è di: " + ticketPrice.toFixed(2)+"€");
} else {
    console.log("il prezzo del tuo biglietto è di: " + ticketPrice.toFixed(2)+"€");
}
