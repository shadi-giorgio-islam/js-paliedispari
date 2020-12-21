// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da
// 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi
// ha vinto.
// PARI E dispari

var scelta = prompt('Inserisci P per pari o D per dispari');
scelta = scelta.toUpperCase();
console.log('la scelta del user è', scelta);
var inputUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('il numero scelto dallo user è', inputUser);
var cpu = numeroCpu(1, 5);
console.log('il numero scelto dal cpu è', cpu);
var esitoPartita = esito(inputUser, cpu);

if (esitoPartita == scelta) {
  console.log('user ha vinto');
}
else {
  console.log('user ha perso');
}

// ****FUNZIONI****
function numeroCpu(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function esito(user, cpu){
  var somma;
  somma = user + cpu;
  if (somma % 2 == 0) {
    return 'P';
  }
  else {
    return 'D';
  }
}
