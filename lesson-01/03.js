/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let currentNumber = 1;

while (currentNumber <= 20) {
    if (currentNumber % 2 !== 0) {
        sum = sum + currentNumber;
        console.log(sum);
    }
    currentNumber = currentNumber + 1;
}