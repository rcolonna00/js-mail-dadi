//email inserita dall'utente
var emailUtente = prompt('inserisci la tu e-mail')

//array di email
var arrayEmail = ['vito@gmail.com', 'giuseppe@gmail.com', 'francesco@gmail.com', 'riccardo@gmail.com', 'donato@gmail.com', 'riccardo@gmail.com'];
var emailTrovata = false;

//controllo dei dati dell'utente
for (var i = 0; i < arrayEmail.length; i++){
    var thisEmail = arrayEmail[i];

    if( thisEmail == emailUtente ) {
        emailTrovata = true;
        alert('email corretta');
    } else{
        emailTrovata = false;
    }

    console.log(thisEmail);
    console.log(emailTrovata);
}

//stampare messaggio finale