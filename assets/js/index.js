"use strict";

/*
 1)Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
строки - итерируемые. 
*/

console.log("Count Vowels: ", countVowelsV2("string string oi"));

function countVowels(string) {
  let count = 0;

  for (const letter of string) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }
  }

  return count;
}

function countVowelsV2(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.split("").filter((letter) => vowels.includes(letter)).length;
}

/*
2)Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5; 
*/

//ok

//3) Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам.

function avg(...args) {
  return args.reduce((sum, value) => sum + value) / args.length;
}

/* 
4) Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная функция 
должна складывать получаемый аргумент с аргументом n возвращающей функции.
замыкание. 
*/

function addNum(initialValue = 0) {
  let state = initialValue;

  return function sumNumber(number) {
    return (state = state + number);
  };
}

function makeCounter() {
  let counterState = 0;

  return function counterAdd() {
    return ++counterState;
  };
}

//5) Напишите функцию operation(num1, num2, fn), в которой num1 и num2 — числовые переменные,
// а fn — функция, которая берет два аргумента и выполняет математическую операцию над ними

function operation(num1, num2, fn) {
  return fn(num1, num2);
}

const sumNumbers = (number1, number2) => {
  return number1 + number2;
};
console.log(operation(5, 10, sumNumbers));

//6) Создать объект obj, с методами method1(),method2() и method3().
// В методе method3() должна возвращаться строка «метод3».
// Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()

const obj = {
  method1() {
    return this;
  },
  method2() {
    return this;
  },
  method3() {
    return "method 3";
  },
};
obj.method1().method2().method3();

// Написать функцию logParenthis используя массивы, а не шаблонные строки.

function logPar(level) {
  let parenthisArray = [];
  logParenthis(level);

  function logParenthis(number) {
    if (number > 0) {
      parenthisArray = [...parenthisArray, "("];

      logParenthis(number - 1);

      parenthisArray = [...parenthisArray, ")"];
    }
  }

  return parenthisArray.join("");
}
logPar(3);

// =============================================================================== //

function ArrayMethods() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
      return this.length;
    }
  };

  this.pop = function () {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];

    delete this[lastIndex];

    --this.length;

    return lastItem;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.concat = function (array) {
    let result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }

    return result;
  };

  this.flat = function (depth = 1) {
    // нет array, тк не принимаем его -> this
    // нет метода concat -> написать concat
    // нет функции customFlat -> this.flat
    if (depth < 0) {
      console.error("depth must be a positive value");
      return;
    }

    let newArr = new MyArray();

    if (depth === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {

        const buffer = this[i].flat(depth - 1);
        
        newArr = newArr.concat(buffer);

      } else if (this[i] !== undefined) {

        newArr.push(this[i]);

      }
    }

    return newArr;
  };

  // this[Symbol.iterator] = function () {};
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }
}

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray(
  "test",
  2,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  [[[3]]],
  "test5",
  [[[[[5]]]]]
);

let array = ['letter','text'];
let res = [];
for(const word of array){
  res.push(word.charAt(0)) // correct!
}

let array1= ['letter','text'];
let res1 = [];
for(const word of array){
  res.push(word).charAt(0) // wrong!
}