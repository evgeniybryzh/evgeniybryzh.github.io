"use strict";

// TASK 1

class circle {
  constructor(a, b) {
    this.radius = a;
    this.width = b;
  }
  get circleRadius() {
    return this.radius;
  }
  set circleRadius(newRadiusValue) {
    this.radius = newRadiusValue;
  }
  get circleDiameter() {
    return this.radius * 2;
  }
  getCircleS() {
    let p = 3.1415;
    let s = p * Math.pow(this.radius, 2);
    return s.toFixed(4);
  }
  getCircleLength() {
    let p = 3.1415;
    let l = 2 * p * this.radius;
    return l.toFixed(4);
  }
}
let circleData = new circle(15, 25);
circleData.circleRadius = 15;
// console.log(circleData.getCircleS());
// console.log(circleData.getCircleLength());

// TASK 2

class marker {
  constructor(a, b) {
    this.color = a;
    this.value = b;
  }

  print(a) {
    do {
      let $span = document.createElement("span");
      $span.innerHTML = a;
      $span.style.color = this.color;
      document.body.appendChild($span);
      let string = a.split("");
      this.value = this.value - string.length * 0.5;
    } while (this.value >= 0.5);
  }
}
let printed = new marker("green", 30);

// console.log(printed.print("Hello"));

class rechargedMarker {
  constructor() {
    this.color = printed.color;
    this.value = printed.value;
  }
  recharge(a) {
    this.value = a;
  }
}

let newPrinted = new rechargedMarker();
newPrinted.recharge(200);
// console.log(newPrinted);

// TASK 3
let bankWorkers = [];
class Employee {
  constructor(a, b, c) {
    this.name = a;
    this.subname = b;
    this.age = c;
  }
}

bankWorkers.push(
  new Employee("Serhiy", "Baranov", 35),
  new Employee("Ivan", "Gay", 25),
  new Employee("Mathy", "Perry", 75),
  new Employee("Illia", "Kuchurmetov", 19)
);

class EmpTable {
  constructor(workers) {
    this.bankWorkers = workers;
  }
  writeTable() {
    let $ol = document.createElement("ol");
    for (let i = 0; i < newWorkers.bankWorkers.length; i++) {
      let $li = document.createElement("li");
      $li.innerHTML = `<span>${newWorkers.bankWorkers[i].name} ${newWorkers.bankWorkers[i].subname}, age: ${newWorkers.bankWorkers[i].age} </span>`;
      $ol.append($li);
    }
    document.body.appendChild($ol);
  }
}
let newWorkers = new EmpTable(bankWorkers);
// console.log(newWorkers.writeTable());
