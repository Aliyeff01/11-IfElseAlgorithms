let number1 = 4;
let number2 = 5;
let number3 = 6;

let biggest = number1 * 100 + number2 * 10 + number3;
let smallest = number3 + number2 * 10 + number1 * 100;

if (number1 * 100 + number3 * 10 + number2 > biggest) {
    biggest = number1 * 100 + number3 * 10 + number2;
}

if (number2 * 100 + number1 * 10 + number3 > biggest) {
    biggest = number2 * 100 + number1 * 10 + number3;
}

if (number2 * 100 + number3 * 10 + number1 > biggest) {
    biggest = number2 * 100 + number3 * 10 + number1;
}

if (number3 * 100 + number1 * 10 + number2 > biggest) {
    biggest = number3 * 100 + number1 * 10 + number2;
}

if (number3 * 100 + number2 * 10 + number1 > biggest) {
    biggest = number3 * 100 + number2 * 10 + number1;
}

console.log("Big number: ", biggest);
console.log("Little number: ", smallest);
