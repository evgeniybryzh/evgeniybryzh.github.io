"use strict";

// Task1
const shoppingList = [
  { name: "Banana", amount: 10, status: "yes" },
  { name: "Apple", amount: 5, status: "no" },
  { name: "Strawberry", amount: 12, status: "yes" },
  { name: "Sigars", amount: 13, status: "no" },
  { name: "Books", amount: 45, status: "yes" },
];

function compareNumeric(a, b) {
  if (a.status > b.status) return 1;
  if (a.status < b.status) return -1;
}
shoppingList.sort(compareNumeric);
// console.log(shoppingList);

const addItem = (a, b) => {
  a = prompt("What do you want to buy?");
  b = prompt("How mutch?");
  let x = 0;
  for (let n of shoppingList) {
    if (n.name === a) {
      x = 1;
      if (n.name === "yes") {
      } else n.amount = n.amount + +b;
    }
  }
  if (x == 0) {
    shoppingList.push({ name: a, amount: +b, status: "no" });
  }
  shoppingList.sort(compareNumeric);
  console.log(shoppingList);
};
// addItem();

const matchBuyied = (a) => {
  a = prompt(
    "Что из списка уже куплено?",
    "Banana,Apple,Strawberry,Sigars or Books?"
  );
  for (let b of shoppingList) {
    if (b.name == a) {
      b.status = "Yes";
    }
  }
};
// console.log(shoppingList);
// matchBuyied();

// Task2

const billList = [
  { name: "Book", amount: 2, price: 50 },
  { name: "Table", amount: 1, price: 150 },
  { name: "Cup", amount: 3, price: 25 },
  { name: "Bread", amount: 2, price: 12 },
  { name: "Boots", amount: 1, price: 180 },
];

const showOnScreen = () => {
  for (let a = 0; a < billList.length; a++) {
    document.write(
      `Name - ${billList[a].name}, Amount - ${billList[a].amount}, Price - ${billList[a].price} hrn <br>`
    );
  }
};
// showOnScreen();

const getAmountPrice = () => {
  let sum = 0;
  for (let i = 0; i < billList.length; i++) {
    sum += billList[i].price;
  }
  return sum;
};
// getAmountPrice();

let getBiggestPrice = (a) => {
  let biggestPrice = 0;
  let j = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i].amount * a[i].price > a[i + 1].amount * a[i + 1].price) {
      biggestPrice = a[i].amount * a[i].price;
      j = i;
    } else {
      biggestPrice = a[i + 1].amount * a[i + 1].price;
      j = i + 1;
    }
  }
  console.log(biggestPrice);
};
// getBiggestPrice(billList);

let getAveragePrice = () => {
  let sumPrice = getAmountPrice();
  let averagePrice = sumPrice / (billList.length + 1);
  console.log(averagePrice);
};
// getAveragePrice();

// Task3
let styles = [
  { name: "color", value: "blue;" },
  { name: "font-size", value: "5rem;" },
  { name: "text-transform", value: "uppercase;" },
];
const writeStyles = (text) => {
  document.write(
    `<p style="${styles[0].name}:${styles[0].value}${styles[1].name}:${styles[1].value}${styles[2].name}:${styles[2].value}">${text}</p>`
  );
};
// writeStyles("hello");

// Task4
let auditory = [
  { name: "Auditory-1", places: 10, facultet: "Griffindor" },
  { name: "Auditory-2", places: 15, facultet: "Slitherin" },
  { name: "Auditory-3", places: 5, facultet: "Ra  venclaw" },
  { name: "Auditory-4", places: 35, facultet: "Hufflepuff" },
];
const showAuditiries = () => {
  for (let a = 0; a < auditory.length; a++) {
    document.write(
      `Name - ${auditory[a].name}, Places - ${auditory[a].places}, Facultet - ${auditory[a].facultet} <br>`
    );
  }
};
// showAuditiries();

const showAuditoryForFac = (a) => {
  let numberOne;
  let numberTwo;
  let numberThree;
  let numberFour;
  if (a == "Griffindor") {
    numberOne = String(auditory[0]["name"]);
  } else if (a == "Slitherin") {
    numberTwo = String(auditory[1]["name"]);
  } else if (a == "Ravenclaw") {
    numberThree = String(auditory[2]["name"]);
  } else if (a == "Hufflepuff") {
    numberFour = String(auditory[3]["name"]);
  }
  for (let i of auditory) {
    if (i.facultet == a && a == "Griffindor") {
      document.write(`${a} uses ${numberOne}`);
    }
    if (i.facultet == a && a == "Slitherin") {
      document.write(`${a} uses ${numberTwo}`);
    }
    if (i.facultet == a && a == "Ravenclaw") {
      document.write(`${a} uses ${numberThree}`);
    }
    if (i.facultet == a && a == "Hufflepuff") {
      document.write(`${a} uses ${numberFour}`);
    }
  }
};
// console.log(showAuditoryForFac("Hufflepuff"));

const getAuditory = (a) => {
  const searchedAuditory = auditory.find(
    (s) => s.name == a || s.places == a || s.facultet == a
  );
  let error =
    searchedAuditory === undefined
      ? document.write("Something goes wrong!")
      : document.write(
          `Facultet - ${searchedAuditory.facultet}, ${searchedAuditory.name}, ${searchedAuditory.places} places!`
        );
};
// getAuditory("111");

const getSortedAud = () => {
  auditory.sort((a, b) => a.places - b.places);
  console.log(auditory);
};
// getSortedAud();

const getSortedByLetter = () => {
  const a = [
    auditory[0].facultet,
    auditory[1].facultet,
    auditory[2].facultet,
    auditory[3].facultet,
  ];
  a.sort();
  console.log(a);
};
getSortedByLetter();
