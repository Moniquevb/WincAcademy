/* take two numbers
each number will be squared (multiplied with itself)
the squared numbers will be added together
this sum will be squared again
the resulting value is returned
 */

//function declaration 

/* function calcSquare (number1, number2) {
    const sum = (number1 ** 2) + (number2 ** 2);
    const squareSum = sum ** 2;
    return squareSum;
}

console.log(calcSquare(5,2));
 */

//function expression 

/* const calcSquare = function (number1, number2) {
    const sum = (number1 ** 2) + (number2 ** 2);
    const squareSum = sum ** 2;
    return squareSum;
}

console.log(calcSquare(5, 2));
 */

//arrow function
const calcSquare = (number1, number2) => {
    const sum = (number1 ** 2) + (number2 ** 2);
    const squareSum = sum ** 2;
    return squareSum;
}

console.log(calcSquare(5, 2));

