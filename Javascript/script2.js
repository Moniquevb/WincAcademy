const age = 26;

if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Je mag nog geen alcohol. Helaas kan ik je niet binnen laten.")
}

if (age >= 18 && age < 26) {
    console.log("Je krijgt 50% korting");
} else {
    console.log("Je krijgt geen korting");
}

const isFemale = false;

if (isFemale) {
    console.log("Je bent welkom op de ladiesnight!");
} else {
    console.log("Je bent geen vrouw. Helaas ben je niet welkom op de ladiesnight");
}

const driverStatus = "tessa";

if (driverStatus === "bob") {
    console.log("Je bent de bob vanavond. Je mag rijden.");
} else {
    console.log("Vanavond ben je niet de bob. Waarschijnlijk heb je teveel gedronken en dus mag je niet rijden.")
}

const firstName = "Sarah";

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Je krijgt een gratis biertje");
} else {
    console.log("Sorry, je krijgt geen gratis biertje");
}

const totalAmount = 30;

if (totalAmount > 25) {
    console.log("Gratis vegabitterballen");
} else if (totalAmount > 50) {
    console.log("Gatis nacho's");
} else if (totalAmount > 100) {
    console.log("Gratis champagne");
} else {
    console.log("Besteedt meer dan 25 euro en je krijgt gratis snacks!");
}