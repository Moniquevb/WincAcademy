const checkNumber = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}

const result1 = checkNumber(101);
console.log(result1);

// const bouncerBot = function (maxNumber, currentNumber, age) {
//     if (currentNumber > maxNumber) {
//         return "it's too busy now, come back later";
//     } else {
//         return "come in";
//     }
//     if (age < 18) {
//         return "this is a club for adults";
//     }
// }

// const result2 = bouncerBot(100, 55, 17);
// console.log(result2);

const bouncerBot = function (maxNumber, currentNumber, age) {
    if (currentNumber > maxNumber || age <18) {
        return true;
    }
}

const result3 = bouncerBot(100, 55, 17);
if (result3 == true) {
    console.log("this"); 
} else {
    console.log("that")
}

// To make these decisions we'll give Brenda the following arguments:

// the maximum number of people in the club > if maxNumber > 100: "it's too busy now, come back later"
// else "come in"
// if age < 18: "this is a club for adults"
// the current number of people in the club
// the age of the person wanting to enter the club

const averageCalculator = function (numberA, numberB, numberC, numberD, numberE) {
    const calcAverage = Math.round((numberA + numberB + numberC + numberD +numberE) / 5);
    return calcAverage;
}


const result4 = averageCalculator(8, 35, 39, 85, 2);
console.log(result4);
