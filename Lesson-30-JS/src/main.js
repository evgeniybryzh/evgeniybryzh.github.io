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
  function reused(a) {
    let rowNumbers = document.getElementById(a);
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
  document.addEventListener("click", function (event) {
    const $table = document.querySelector("table");
    let $tableRow = document.getElementsByTagName("th");
    let $tableRowArr = [...$tableRow];
    if (event.target == $tableRowArr[0]) {
      reused("row1");
    } else if (event.target == $tableRowArr[1]) {
      reused("row2");
    } else if (event.target == $tableRowArr[2]) {
      reused("row3");
    } else if (event.target == $tableRowArr[3]) {
      reused("row4");
    } else if (event.target == $tableRowArr[4]) {
      reused("row5");
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
