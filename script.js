// Funtion declaration:
function squared1(number1, number2) {
    const square1 = (number1 * number1) + (number2 * number2);
    const square1Again = (square1 * square1);
    return square1Again
};

console.log(squared1(3, 5));

// Funtion expression:
const squared2 = function (number1, number2) {
    const square2 = (number1 * number1) + (number2 * number2);
    const square2Again = (square2 * square2);
    return square2Again
}

console.log(squared2(3, 5));

// Arrow function:
const squared3 = (number1, number2) => {
    const square3 = (number1 * number1) + (number2 * number2);
    const square3Again = (square3 * square3);
    return square3Again
}

console.log(squared3(3, 5));