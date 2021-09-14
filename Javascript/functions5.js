const checkAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const checkAdultage = function () {
    if (checkAge(20) == true) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(checkAdultage());