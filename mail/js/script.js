//email inserita dall'utente
var utenteEmail = prompt( 'dimmi la tua email' );

//lista mail
var arrayEmail = [
    'vito@gmail.com', 
    'giuseppe@gmail.com', 
    'francesco@gmail.com', 
    'riccardo@gmail.com', 
    'donato@gmail.com', 
    'riccardo@gmail.com'
];

console.log(utenteEmail);
console.log(arrayEmail);

var loginEmail = false;
console.log(loginEmail);

//controllo dei dati dell'utente
for ( var i = 0; i < arrayEmail.length; i++ ){
    archivioEmail = arrayEmail[i];

    if( utenteEmail === archivioEmail ){
        loginEmail = true;
    }

    console.log( archivioEmail + ' - ' + utenteEmail );
    console.log( loginEmail );
}

//stampare messaggio finale
if( loginEmail === true ) {
    alert("Puoi entrare");
} else {
    alert("Non puoi entrare");
}
