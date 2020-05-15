"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const $text = document.getElementById("text");
  const $textarea = document.getElementById("textarea");
  function stopDefAction(evt) {
    evt.preventDefault();
  }
  function sortNumbers(a, b) {
    return a - b;
  }
  // document.addEventListener("keydown", function (event) {
  //   console.log(event.code);
  // });

  // Task1
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.code == "KeyE") {
      stopDefAction(event);
      let textInDiv = $text.innerText;
      $text.style.display = "none";
      $textarea.style.display = "block";
      $textarea.innerText = textInDiv;
    }
    if (event.ctrlKey && event.code == "KeyS") {
      stopDefAction(event);
      $text.style.display = "block";
      $textarea.style.display = "none";
      let newTextInDiv = $textarea.value;
      $text.innerText = newTextInDiv;
    }
  });
  // Task2
  document.addEventListener("click", function (event) {
    const $table = document.querySelector("table");
    let $tableRow = document.getElementsByTagName("th");
    let $tableRowArr = [...$tableRow];
    if (event.target == $tableRowArr[0]) {
      let rowNumbers = document.getElementById("row1");
      let rowNumbersArr = rowNumbers.children;
      let numbers = [];
      for (let i = 1; i < rowNumbersArr.length; i++) {
        numbers.push(rowNumbersArr[i].innerText);
      }
      numbers.sort(sortNumbers);
      let f = 1;
      for (let s = 0; s < numbers.length; s++) {
        rowNumbersArr[f].innerText = numbers[s];
        f++;
      }
    } else if (event.target == $tableRowArr[1]) {
      let rowNumbers = document.getElementById("row2");
      let rowNumbersArr = rowNumbers.children;
      let numbers = [];
      for (let i = 1; i < rowNumbersArr.length; i++) {
        numbers.push(rowNumbersArr[i].innerText);
      }
      numbers.sort(sortNumbers);
      let f = 1;
      for (let s = 0; s < numbers.length; s++) {
        rowNumbersArr[f].innerText = numbers[s];
        f++;
      }
    } else if (event.target == $tableRowArr[2]) {
      let rowNumbers = document.getElementById("row3");
      let rowNumbersArr = rowNumbers.children;
      let numbers = [];
      for (let i = 1; i < rowNumbersArr.length; i++) {
        numbers.push(rowNumbersArr[i].innerText);
      }
      numbers.sort(sortNumbers);
      let f = 1;
      for (let s = 0; s < numbers.length; s++) {
        rowNumbersArr[f].innerText = numbers[s];
        f++;
      }
    } else if (event.target == $tableRowArr[3]) {
      let rowNumbers = document.getElementById("row4");
      let rowNumbersArr = rowNumbers.children;
      let numbers = [];
      for (let i = 1; i < rowNumbersArr.length; i++) {
        numbers.push(rowNumbersArr[i].innerText);
      }
      numbers.sort(sortNumbers);
      let f = 1;
      for (let s = 0; s < numbers.length; s++) {
        rowNumbersArr[f].innerText = numbers[s];
        f++;
      }
    } else if (event.target == $tableRowArr[4]) {
      let rowNumbers = document.getElementById("row5");
      let rowNumbersArr = rowNumbers.children;
      let numbers = [];
      for (let i = 1; i < rowNumbersArr.length; i++) {
        numbers.push(rowNumbersArr[i].innerText);
      }
      numbers.sort(sortNumbers);
      let f = 1;
      for (let s = 0; s < numbers.length; s++) {
        rowNumbersArr[f].innerText = numbers[s];
        f++;
      }
    }
  });
  // Task3
  document.addEventListener("mousedown", (event) => {
    const $borderedBox = document.getElementById("box");
    $borderedBox.style.resize = "both";
  });
  document.addEventListener("mouseup", (event) => {
    const $borderedBox = document.getElementById("box");
    $borderedBox.style.resize = "none";
  });
});
