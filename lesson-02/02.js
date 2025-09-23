/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

globalThis.dice1 = 1;
globalThis.dice2 = 1;
globalThis.isWinningDouble = false;

// Второе задание
globalThis.dice1 = Math.floor(Math.random() * 6) + 1;
globalThis.dice2 = Math.floor(Math.random() * 6) + 1;
globalThis.isWinningDouble = (globalThis.dice1 === globalThis.dice2) && (globalThis.dice1 > 3);

console.log('Первый бросок: ' + globalThis.dice1);
console.log('Второй бросок: ' + globalThis.dice2);

if (globalThis.isWinningDouble) {
  console.log('Выигрышный дубль!');
} else {
  console.log('Не выигрышный дубль.');
}
