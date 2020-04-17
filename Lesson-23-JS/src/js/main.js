"use strict";

const age = prompt("How old are you?");
const howOld =
  age <= 0
    ? "Incorrect age!"
    : age <= 2
    ? "You are child"
    : age >= 12 && age < 18
    ? "You are teenager"
    : age >= 18 && age < 60
    ? "You are Adult"
    : age >= 60
    ? "You are old"
    : "What a strange age?";
alert(howOld);

const number = prompt("White number from 1 to 9");
const numberSymbol =
  number == 1
    ? "!"
    : number == 2
    ? "@"
    : number == 3
    ? "#"
    : number == 4
    ? "$"
    : number == 5
    ? "%"
    : number == 6
    ? "^"
    : number == 7
    ? "&"
    : number == 8
    ? "*"
    : number == 9
    ? "("
    : ")";
alert(numberSymbol);

const anyNumber = prompt(
  "Please, write any number with 3 symbols (123 for example)"
);
if (isNaN(anyNumber)) {
  alert("This is not a number");
} else if (anyNumber == null) {
  alert("You should write anything");
} else if (anyNumber == "") {
  alert("You should write anything");
} else if (anyNumber.length != 3) {
  alert("Your number has more or less than 3 symbols");
} else if (anyNumber[0] == anyNumber[1]) {
  alert(`Your number ${anyNumber} has two or more same symbols`);
} else if (anyNumber[0] == anyNumber[2]) {
  alert(`Your number ${anyNumber} has two or more same symbols`);
} else if (anyNumber[1] == anyNumber[2]) {
  alert(`Your number ${anyNumber} has two or more same symbols`);
} else alert(`Your number ${anyNumber} dont have any same symbols`);

const year = prompt("Write any year");
if (isNaN(year)) {
  alert("This is not a number");
} else if (year == "") {
  alert("You should white anything");
} else if (year == null) {
  alert("You should white anything");
} else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  alert("This is a lip year!");
} else alert("This is not leap year!");

const polindrom = prompt("Write some number with 5 symbols!");
const polindromCheck = polindrom.split("").reverse("").join("");
if (isNaN(polindrom)) {
  alert("This is not a number");
} else if (polindrom == "") {
  alert("You should white anything");
} else if (polindrom == null) {
  alert("You should white anything");
} else if (polindrom.length < 5) {
  alert("Your number is too shirt");
} else if (polindrom.length > 5) {
  alert("Your number is too long");
} else if (polindrom == polindromCheck) {
  alert("This is Polindrome");
} else alert("This is not a Polindrome");

const EUR = 0.92;
const UAN = 27.21;
const AZN = 1.7;
const money = prompt("How much USD do you want to exchange?");
if (isNaN(money)) {
  alert("This is not a number");
} else if (money == "") {
  alert("You should white any amount of money");
} else if (money == null) {
  alert("You should white any amount of mone");
}
const value = prompt(
  "What kind of money do you want to get?",
  "EUR , UAN or AZN"
).toUpperCase();
if (value == "") {
  alert("You should white anything");
} else if (value == null) {
  alert("You should white anything");
} else if (value == "EUR") {
  alert("You will get " + (money * EUR).toFixed(2) + " EUR!");
} else if (value == "UAN") {
  alert("You will get " + (money * UAN).toFixed(2) + " UAN!");
} else if (value == "AZN") {
  alert("You will get " + (money * AZN).toFixed(2) + " AZN!");
} else alert("Thats wrong kind of money!");

const purchaseValue = prompt(
  "Enter Your purchase value, please, which slould be more than 200"
);
if (isNaN(purchaseValue)) {
  alert("This is not a number");
} else if (purchaseValue == "") {
  alert("You should white anything");
} else if (purchaseValue == null) {
  alert("You should white anything");
} else if (purchaseValue >= 200 && purchaseValue < 300) {
  alert(
    "Your price will be " +
      (purchaseValue - (purchaseValue / 100) * 3).toFixed(2) +
      " with 3% discount!"
  );
} else if (purchaseValue >= 300 && purchaseValue < 500) {
  alert(
    "Your price will be " +
      (purchaseValue - (purchaseValue / 100) * 5).toFixed(2) +
      " with 5% discount!"
  );
} else if (purchaseValue >= 500) {
  alert(
    "Your price will be " +
      (purchaseValue - (purchaseValue / 100) * 7).toFixed(2) +
      " with 7% discount!"
  );
} else alert("There are no such prices! ");

const circleLength = prompt("Write the circumference,please!");
if (isNaN(circleLength)) {
  alert("This is not a number");
} else if (circleLength == "") {
  alert("You should white anything");
} else if (circleLength == null) {
  alert("You should white anything");
} else if (circleLength == 0) {
  alert("Zero is wrong value");
} else if (circleLength < 0) {
  alert("This is wrong value");
} else;
const squareP = prompt("Write the Perimeter of the square,please!");
if (isNaN(squareP)) {
  alert("This is not a number");
} else if (squareP == "") {
  alert("You should white anything");
} else if (squareP == null) {
  alert("You should white anything");
} else if (squareP == 0) {
  alert("Zero is wrong value");
} else if (squareP < 0) {
  alert("This is wrong value");
} else if (squareP / 4 >= circleLength) {
  alert("The circle can be squared!");
} else alert("The circle can not be squared! It is too big!");

let question1 = prompt(
  "What is football?",
  "Answer: game, country or animal?"
).toUpperCase();
if (Number(question1)) {
  alert("This is a wrong answer");
} else if (question1 == "") {
  alert("You should white anything");
} else if (question1 == null) {
  alert("You should white anything");
} else if (question1 == 0) {
  alert("Zero is wrong value");
} else if (question1 < 0) {
  alert("This is wrong value");
} else if (question1 === "GAME") {
  alert("You are right, + 2 points!");
  question1 = 2;
} else {
  alert("You are wrong, 0 points! ");
  question1 = 0;
}
let question2 = prompt(
  "What is Wikipedia?",
  "Answer: website, game or person name"
).toUpperCase();
if (Number(question2)) {
  alert("This is a wrong answer");
} else if (question2 == "") {
  alert("You should white anything");
} else if (question2 == null) {
  alert("You should white anything");
} else if (question2 == 0) {
  alert("Zero is wrong value");
} else if (question2 < 0) {
  alert("This is wrong value");
} else if (question2 === "WEBSITE") {
  alert("You are right, + 2 points! ");
  question2 = 2;
} else {
  alert("You are wrong, 0 points! ");
  question2 = 0;
}
let question3 = prompt(
  "What is Skibidi?",
  "Answer: song, bullshit or ball"
).toUpperCase();
if (Number(question3)) {
  alert("This is a wrong answer");
} else if (question3 == "") {
  alert("You should white anything");
} else if (question3 == null) {
  alert("You should white anything");
} else if (question3 == 0) {
  alert("Zero is wrong value");
} else if (question3 < 0) {
  alert("This is wrong value");
} else if (question3 === "SONG") {
  alert("You are right, + 2 points! ");
  question3 = 2;
} else {
  alert("You are wrong, 0 points! ");
  question3 = 0;
}
alert(
  "FINISH! You have got " + (question1 + question2 + question3) + " points!"
);

const personData = prompt(
  "Write any date,please",
  "Example:MONTH/DAY/YEAR or MONTH.DAY.YEAR"
);
let nextData = new Date(String(personData));
nextData.setDate(nextData.getDate() + 1);
alert(nextData);
