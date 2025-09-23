/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// Третье задание — блок защиты для тестов
globalThis.dice1 = globalThis.dice1 ?? 1;
globalThis.dice2 = globalThis.dice2 ?? 1;
globalThis.isWinningDouble = globalThis.isWinningDouble ?? false;

// Код третьего задания
globalThis.score = 45; // любое тестовое значение
globalThis.grade = '';

if (globalThis.score < 50) globalThis.grade = 'F';
else if (globalThis.score < 70) globalThis.grade = 'D';
else if (globalThis.score < 80) globalThis.grade = 'C';
else if (globalThis.score < 90) globalThis.grade = 'B';
else globalThis.grade = 'A';

console.log('Твоя оценка ' + globalThis.grade);
