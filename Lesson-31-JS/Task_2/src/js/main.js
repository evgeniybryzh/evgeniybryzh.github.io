"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $display = document.getElementById("display");
  const $body = document.getElementById("body");
  const $bodyItems = $body.children;
  document.addEventListener("mousedown", (event) => {
    event.preventDefault();
  });
  for (let i = 0; i < $bodyItems.length; i++) {
    $bodyItems[i].addEventListener("click", (event) => {
      let button = event.target;
      if (event.target.innerHTML == "=") {
        $display.innerHTML = eval($display.innerHTML);
      } else if (event.target.innerHTML == "C") {
        $display.innerHTML = "";
      } else $display.innerHTML = $display.innerHTML + button.innerHTML;
    });
  }
});
