"use strict";

// Task 1
function getNum(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else return 0;
}
// alert(getNum(3, 2));

// Task 2
function getFact(num) {
  if (num === 0) return 1;
  else return num * getFact(num - 1);
}
// alert(getFact(5));

// Task 3
function getNumTogether(num1, num2, num3) {
  return String(num1) + String(num2) + String(num3);
}
// alert(getNumTogether(1, 4, 3));

// Task 4
function getS(num1, num2) {
  if (num1 && num2 != undefined) return num1 * num2;
  else if (num2 == undefined) return Math.pow(num1, 2);
}
// alert(getS(20));

// Task 5

const perfectNumber = function (n, i = 1, sum = 0) {
  if (n / i < 1 || i >= n) {
    return n === sum && n;
  }
  return perfectNumber(n, i + 1, n % i ? sum : sum + i);
};

// Task 6
const perfectRange = function (a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  if (perfectNumber(min)) {
    console.log(min);
  }
  if (min < max) {
    perfectRange(min + 1, max);
  }
  return;
};
// Task 7
const setTime = (hh, mm = 0, ss = 0) => {
  const now = new Date();
  now.setHours(hh, mm, ss);
  return now;
};

const getTime = (...args) => {
  const now = new Date(setTime(...args));
  return now.toLocaleTimeString("ru", {
    hours: "numeric",
    minutes: "numeric",
    seconds: "numeric",
  });
};
// Task 8
const getTimeInSeconds = (...args) => {
  const now = new Date(setTime(...args));
  const hhInSeconds = now.getHours() * 60 * 60;
  const mmInSeconds = now.getMinutes() * 60;
  return hhInSeconds + mmInSeconds + now.getSeconds();
};

// // Task 9
const getTimeInMinuts = (a) => {
  const hours = Math.floor(a / 60 / 60);
  const minutes = Math.floor(a / 60) - hours * 60;
  const seconds = a % 60;
  if (isNaN(a)) {
    alert(`${a} is not a number!`);
  }
  return hours + ":" + minutes + ":" + seconds;
};

// Task 10
const getTwoDates = (hour1, min1, sec1, hour2, min2, sec2) => {
  const secFromHour1 = hour1 * 60 * 60;
  const secFromHour2 = hour2 * 60 * 60;
  const secFromMin1 = min1 * 60;
  const secFromMin2 = min2 * 60;
  const secResoult =
    +secFromHour1 + +secFromMin1 + +sec1 - +secFromHour2 - +secFromMin2 - +sec2;
  return getTimeInMinuts(secResoult);
};
// console.log(getTwoDates(40, 40, 30, 20, 400, 20));
