// numero casuale computer da 1 a 6
var numeroCasualePc = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasualePc)

//numero casuale utente da 1 a 6
var numeroCasualeUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasualeUtente)

//comparo i due numeri e dico chi ha vinto
var confrontoDadi;
if (numeroCasualePc > numeroCasualeUtente) {
    alert('Mi dispiace hai perso, riprova.')
}else if (numeroCasualePc == numeroCasualeUtente){
    alert('Hai pareggiato, riprova')
} else{
    alert('Bravo hai vinto.')
}
