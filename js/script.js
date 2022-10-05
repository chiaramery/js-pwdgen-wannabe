/* Chiedi all’utente il suo nome, 
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito.
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

// Input: 
// Primo passo: chiedere nome utente
const userName = prompt("Come ti chiami?");
console.log(userName);

// Secondo passo: chiedere cognome utente
const userSurname = prompt("Quale è il tuo cognome?");
console.log(userSurname);

// Terzo passo: chiedere colore preferito all'utente
const userColor = prompt("Quale è il tuo colore preferito?");
console.log(userColor);

// Elaborazione password
const password = userName + userSurname + userColor + 21;
console.log(password);

// Risposta
const risposta = `La tua password è ${password}`
console.log(risposta);

// Output
document.getElementById("password").innerHTML = risposta;