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

const calculateVAT = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function (basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18



// //In this exercise we're going to calculate the base price and VAT amount. 


calculateFirst = function (Vatperc) {
    return (Vatperc / 100) + 1;
}

calculateMain = function (amountInclVat, Vatperc) {
    const vatFactor = calculateFirst(Vatperc);
    const basePrice = amountInclVat / vatFactor;
    const vatAmount = amountInclVat - basePrice;
    return [basePrice, vatAmount];
}

console.log(calculateMain(2.18, 9));
console.log(calculateMain(1500, 21));

