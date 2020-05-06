"use strict";

// Task 1
const sumInRange = (a, b) => {
  if (a < b) {
    let c = [];
    for (let i = a; i <= b; i++) {
      c.push(i);
    }
    const resoult = c.reduce((cur, res) => {
      return Number(cur) + Number(res);
    });
    console.log(resoult);
  } else console.log(`First number should be less than second!`);
};

// sumInRange(1, 3);

// Task 2

function getNod() {
  for (var x = arguments[0], i = 1; i < arguments.length; i++) {
    let y = arguments[i];
    while (x && y) {
      x > y ? (x %= y) : (y %= x);
    }
    x += y;
  }

  console.log(x);
}
// getNod(5, 15);

// Task 3

const getDivider = (a) => {
  const numbers = [];
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      numbers.push(i);
    }
  }
  console.log(numbers);
};
// getDivider(132);

// Task 4

const getAmountOfSymbols = (a) => {
  const symbols = String(a);
  const newSymbols = symbols.split("");
  console.log(newSymbols.length);
};
// getAmountOfSymbols(1000000);

// Task 5

const getTenNumbers = (...args) => {
  let positive = [];
  let negative = [];
  let zero = [];
  let even = [];
  let notEven = [];

  args.forEach((el) =>
    el > 0
      ? positive.push(el)
      : el < 0
      ? negative.push(el)
      : el === 0
      ? zero.push(el)
      : alert(`Something wrong with this element "${el}" !`)
  );

  args.forEach((el) => (el % 2 ? notEven.push(el) : even.push(el)));

  console.log(
    `There are ${positive.length} positive numbers, ${negative.length} negative numbers, ${zero.length} zeroes, ${even.length} of them are even and ${notEven.length} of them are not even!`
  );
};
// getTenNumbers(4, 3, 6, 5);

// Task 6

const canculator = () => {
  let resoult;
  let decition;
  do {
    const a = prompt("Write first number");
    const b = prompt("White second number");
    const c = prompt("Write symbol", "/ , 8 , + or -");
    resoult =
      c === "/"
        ? a / b
        : c === "*"
        ? a * b
        : c === "+"
        ? Number(a) + Number(b)
        : c === "-"
        ? a - b
        : alert("Something wrong");
    console.log(resoult);
    decition = confirm("Do you want more?");
  } while (decition === true);
};
// canculator();

// Task 7

const moveNumbers = (a, b) => {
  let c = String(a);
  let d = c.split([]);
  d = d.splice(+b).concat(d);
  let i = d.join();

  console.log(i.replace(/[^-0-9]/gim, ""));
};
// moveNumbers(123456, 2);

// Task 8

const showDay = (a) => {
  const today = a;
  let day = today.getDate();
  day = day + 1;
  today.setDate(day);
  console.log(today);
};
const changeDay = () => {
  let newDate = new Date();
  let decition;
  do {
    decition = confirm("Show next day?");
    showDay(newDate);
  } while (decition === true);
};
// changeDay();

// Task 9

const table = () => {
  let number;
  let symbol;
  for (let item = 2; item <= 9; item++) {
    for (let item2 = 1; item2 <= 10; item2++)
      console.log(`${item} * ${item2} = ${item * item2}`);
  }
};
// table();

// Task 10

let question = (a) => {
  let input;
  do {
    input = prompt(`Ваше число > ${a}, < ${a} или = ${a}?`);
  } while (input !== ">" && input !== "<" && input !== "=");
  return input;
};

let guessNumber = () => {
  let numb = 100;
  alert(`Загадайте число от 1 до ${numb}.`);
  numb /= 2;
  let m = numb;
  let input = question(numb);
  while (input !== `=`) {
    m /= 2;
    if (input === `>`) {
      numb = numb + +m.toFixed();
    } else {
      numb = numb - +m.toFixed();
    }
    input = question(numb);
  }
  alert(`Финиш!!!`);
};
guessNumber();
