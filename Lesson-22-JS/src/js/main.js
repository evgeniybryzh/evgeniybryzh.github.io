"use strict";

const name = prompt("What is your name?");
alert(`Hi,${name}`);

const YEAR = 2020;
const birthDate = prompt("How old are you?");
alert("Your birth date is " + (YEAR - birthDate));

const A = prompt("What is your side length?");
alert(A * 4 + " is the perimeter of the square");

const PI = 3.1415;
const R = prompt("What is the circle radius?");
alert("S of the circle is " + PI * Math.pow(R, 2));

const KM = prompt("What is the distance between cities (in KM)?");
const TIME = prompt("How many time do you want to use for travel (hours)?");

alert("You need to move " + KM / TIME + " KM per hour to be in time!");

const DOLLAR = prompt("How many $ do you have?");
const EURO_VALUE = 0.91;
alert("You can get " + DOLLAR / EURO_VALUE + " EURO");

const FLESH = prompt("How big is your flesh card (GB)?");
alert(
  "You can upload on your flesh card " +
    ((FLESH * 1000) / 820).toFixed(0) +
    " Porn Films"
);

const MONEY_AMOUNT = prompt("How much money do you have?");
const CHOCLATE_PRICE = prompt("What is the price of one chocolate?");
const CAN_BUY = MONEY_AMOUNT / CHOCLATE_PRICE;
const REST = MONEY_AMOUNT % CHOCLATE_PRICE;
alert(
  "you can buy " +
    CAN_BUY.toFixed(0) +
    " chocolates and yor rest will be " +
    REST.toFixed(2) +
    " hrn"
);

// Сам не смог придумать формулу, как обычно гугл в помощ, надеюсь так норм)
const ANY__NUM = prompt(
  "Give me any 3 numbers!",
  "Any 3 numbers HERE please :)"
);
alert(
  ("" + ANY__NUM).split("").reverse().join("") + " How Do you like my magic?)"
);

const DEPOSIT_SUM = prompt("What is your deposit sum?");
const DEPOSIT_RESULT = (DEPOSIT_SUM / 100) * 5 * 2;
alert("You will get " + DEPOSIT_RESULT.toFixed(2) + " hrn for 2 years!");
