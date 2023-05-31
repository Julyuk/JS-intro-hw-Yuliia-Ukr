//task 1 Виведіть в консоль числа від 1 до n використовуючи цикл for.
//(Дано: n = 10)
console.log("TASK 1");
for (let task1 = 1; task1 < 11; task1++) {
  console.log(task1);
}

//task 2 Напишіть цикл, який обчислює суму чисел від 1 до n.
//(Дано: n = 100)
console.log("TASK 2");
let task2 = 0;
for (i = 1; i < 101; i++) {
  task2 = task2 + i;
}
console.log(task2);

//task 3 Використовуючи цикл while, виведіть в консоль числа від n до 1.
//(Дано: n = 10)
console.log("TASK 3");
let task3 = 10;
while (task3 > 0) {
  console.log(task3);
  task3--;
}

//task4 Напишіть цикл, який виводить всі парні числа від 1 до n.
//(Дано: n = 50)
console.log("TASK 4");
for (let task4 = 1; task4 < 51; task4++) {
  if (task4 % 2 === 0) {
    console.log(task4);
  }
}

//task5 Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли.
//(Дано: n = 10)
console.log("TASK 5");
for (b = 1; b < 11; b++) {
  for (let c = 1; c < 11; c++) {
    console.log(b * c);
  }
}
//task6 Обчисліть факторіал числа n, використовуючи цикл.
//(Дано: n = 7)
console.log("TASK 6");
let task6 = 1;
for (a = 7; a > 0; a--) {
  task6 = task6 * a;
}
console.log(task6);
//task7 Виведіть перші n чисел послідовності Фібоначчі.
//(Дано: n = 10)

console.log("TASK 7");

let start1 = 0;
let start2 = 1;
console.log(start1);
console.log(start2);

for (let i = 0; i < 8; i++) {
  let fibo = start1 + start2; //1
  console.log(fibo);
  start1 = start2;
  start2 = fibo;
}

// task 8 Виведіть всі прості числа від 1 до n. (Дано: n = 100)

console.log("TASK 8");
for (task8 = 1; task8 < 101; task8++) {
  //для кожного з цього масиву
  isPrime = true;
  for (t8 = 2; t8 < 101; t8++) {
    if (task8 % t8 === 0 && task8 > t8) {
      //чекаю множник
      isPrime = false;
    }
  }
  if (isPrime && task8 >= 2) {
    console.log(task8);
  }
}

// task 9 Створіть масив чисел від 1 до n,
//а потім виведіть тільки ті числа, що діляться на 5 без остачі.
//(Дано: n = 100)

console.log("TASK 9");
const arr = [];
for (task9 = 1; task9 < 101; task9++) {
  arr.push(task9);
}
for (task9 = 1; task9 < 101; task9++) {
  let number = arr[task9];
  if (number % 5 === 0) {
    console.log(number);
  }
}

//  task10 Дано масив чисел. Обчисліть суму чисел в цьому масиві.
//(Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log("TASK 10");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let task10 = 0;
for (i = 0; i < 10; i++) {
  task10 = task10 + array[i];
}
console.log(task10);
