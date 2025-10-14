// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    if (number1 > number2 &&  number1 > number3) {
        console.log(number1 + ' is the biggest');
    } else if (number2 > number1 && number2 > number3) {
        console.log(number2 + ' is the biggest');
    } else {
        console.log(number3 + ' is the biggest');
    }
}

findLargest(2, 4,8)