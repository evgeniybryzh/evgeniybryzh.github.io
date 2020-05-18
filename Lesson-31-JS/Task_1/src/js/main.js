"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function ChangeCardContent() {
    const $list = document.getElementById("list").children;
    const $content = document.getElementById("content").children;
    const $items = document.querySelectorAll(".card__item");
    const $item1 = $items[0].children;
    const $item2 = $items[1].children;
    const $item3 = $items[2].children;

    function changeContent(a, b, c, x, y, z, d, e, f, g, h, i) {
      $list[a].classList.add("card__item--checked");
      b[0].classList.add("card__svg--checked");
      $list[c].classList.remove("card__item--checked");
      x[1].classList.add("card__item-name--checked");
      y[1].classList.remove("card__item-name--checked");
      z[1].classList.remove("card__item-name--checked");
      d[0].classList.remove("card__svg--checked");
      $list[e].classList.remove("card__item--checked");
      f[0].classList.remove("card__svg--checked");
      $content[g].style.display = "flex";
      $content[h].style.display = "none";
      $content[i].style.display = "none";
    }
    document.addEventListener("click", (event) => {
      if (
        event.target == $list[0] ||
        event.target == $item1[0] ||
        event.target == $item1[1]
      ) {
        changeContent(
          0,
          $item1,
          1,
          $item1,
          $item2,
          $item3,
          $item2,
          2,
          $item3,
          0,
          1,
          2
        );
      } else if (
        event.target == $list[1] ||
        event.target == $item2[0] ||
        event.target == $item2[1]
      ) {
        changeContent(
          1,
          $item2,
          0,
          $item2,
          $item1,
          $item3,
          $item1,
          2,
          $item3,
          1,
          0,
          2
        );
      } else if (
        event.target == $list[2] ||
        event.target == $item3[0] ||
        event.target == $item3[1]
      ) {
        $content[2].style.display = "flex";
        changeContent(
          2,
          $item3,
          0,
          $item3,
          $item2,
          $item1,
          $item1,
          1,
          $item2,
          2,
          0,
          1
        );
      }
    });
  }
  ChangeCardContent();

  function changeStarValue() {
    const $stars = document.querySelectorAll(".card__svg-use");
    const $starsBox = document.getElementById("stars");
    function changeStarColor(a, b) {
      for (let i = 0; i <= 4; i++) {
        $stars[i].style.fill = "#4b536b";
      }
      for (let i = 0; i <= a; i++) {
        $stars[i].style.fill = "#ffdd3f";
      }
    }
    document.addEventListener("click", (event) => {
      if (event.target == $stars[0]) {
        changeStarColor(0);
      } else if (event.target == $stars[1]) {
        changeStarColor(1);
      } else if (event.target == $stars[2]) {
        changeStarColor(2);
      } else if (event.target == $stars[3]) {
        changeStarColor(3);
      } else if (event.target == $stars[4]) {
        changeStarColor(4);
      }
    });
  }
  changeStarValue();
});
