//When the user clicks enter
//Then I want to see a message "Hello name"
// get element name
//const name = document.getElementById("name");
// get element submit button
let name = prompt("Welkom! Wat is je naam?", "");
alert("Hey " + name);

//display Hello name
//document.getElementById("demo").innerHTML = `Hello ${name}`;

//And ik wil gevraagd worden om een nieuwe input met een cijfer. e.g: "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
/* let number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
let intNumber = parseInt(number);


//Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen. Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()
let randomNo = Math.floor(Math.random() * 25);
// Als gebruiker wil ik een bericht zien als ik het nummer verkeerd heb geraden e.g. "Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden.

//check of input getal uit de prompt gelijk is aan randomNo

const checknumber = function (intNumber, randomNo) {
    if (intNumber === randomNo) {
        alert("Gefeliciteerd je hebt gewonnen");
    } else {
        alert("Dat is niet correct");
        return
    }
}

const checkNumberValue = checknumber(intNumber, randomNo); */

//console.log(checknumber(intNumber, randomNo));

//als input niet gelijk is, toon number prompt 

const checkNumberValue = false;
while (checkNumberValue == false) {
    let number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
    let intNumber = parseInt(number);
    let randomNo = Math.floor(Math.random() * 25);
    const checknumber = function (intNumber, randomNo) {
        if (intNumber === randomNo) {
            alert("Gefeliciteerd je hebt gewonnen");
        } else {
            alert("Dat is niet correct");
            return
        }
    }
    const checkNumberValue = checknumber(intNumber, randomNo);
}
//als input wel gelijk was, toon afscheidsbericht
if (intNumber === randomNo) {
    alert(`Gefeliciteerd je hebt gewonnen. Het spel is nu af. Dag ${name}. Tot de volgende keer`)
}
// Als gebruiker wil ik een bericht ontvangen als ik het nummer goed heb geraden. e.g: "Gefeliciteerd je hebt gewonnen". Het spel is nu af.
// Als gebruiker wil ik een bericht zien als het spel af is. "e.g: Dag [naam]. Tot de volgende keer"
