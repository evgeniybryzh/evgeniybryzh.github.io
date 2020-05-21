"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function changeCardContent() {
    const $listChildren = document.getElementById("list").children;
    const $contentChildren = document.getElementById("content").children;
    const $items = document.querySelectorAll(".tabs__item");
    const $item1 = $items[0].children; // это вообще уже сложно как то еще не стаильно? вдруг где не ьудет компонента будет undefined и станет код
    const $item2 = $items[1].children;
    const $item3 = $items[2].children;
    document.addEventListener("click", (event) => {
      if (
        event.target == $listChildren[0] ||
        event.target == $item1[0] ||
        event.target == $item1[1]
      ) {
        $listChildren[0].classList.add("item-active");
        $item1[0].classList.add("svg-active");
        $listChildren[1].classList.remove("item-active");
        $item1[1].classList.add("name-active");
        $item2[1].classList.remove("name-active");
        $item3[1].classList.remove("name-active");
        $item2[0].classList.remove("svg-active");
        $listChildren[2].classList.remove("item-active");
        $item3[0].classList.remove("svg-active");
        $contentChildren[0].style.display = "flex";
        $contentChildren[1].style.display = "none";
        $contentChildren[2].style.display = "none";
      } else if (
        event.target == $listChildren[1] ||
        event.target == $item2[0] ||
        event.target == $item2[1]
      ) {
        $listChildren[1].classList.add("item-active");
        $item2[0].classList.add("svg-active");
        $listChildren[0].classList.remove("item-active");
        $item2[1].classList.add("name-active");
        $item1[1].classList.remove("name-active");
        $item3[1].classList.remove("name-active");
        $item1[0].classList.remove("svg-active");
        $listChildren[2].classList.remove("item-active");
        $item3[0].classList.remove("svg-active");
        $contentChildren[1].style.display = "flex";
        $contentChildren[0].style.display = "none";
        $contentChildren[2].style.display = "none";
      } else if (
        event.target == $listChildren[2] ||
        event.target == $item3[0] ||
        event.target == $item3[1]
      ) {
        $contentChildren[2].style.display = "flex";
        $listChildren[2].classList.add("item-active");
        $item3[0].classList.add("svg-active");
        $listChildren[0].classList.remove("item-active");
        $item3[1].classList.add("name-active");
        $item2[1].classList.remove("name-active");
        $item1[1].classList.remove("name-active");
        $item1[0].classList.remove("svg-active");
        $listChildren[1].classList.remove("item-active");
        $item2[0].classList.remove("svg-active");
        $contentChildren[2].style.display = "flex";
        $contentChildren[0].style.display = "none";
        $contentChildren[1].style.display = "none";
      }
    });
  }
  changeCardContent();

  function changeStarValue() {
    const $star1 = document.getElementById("star1");
    const $star2 = document.getElementById("star2");
    const $star3 = document.getElementById("star3");
    const $star4 = document.getElementById("star4");
    const $star5 = document.getElementById("star5");
    const $allStars = [$star1, $star2, $star3, $star4, $star5];
    console.log($allStars);
    const $starsBox = document.getElementById("stars");
    function changeStarColor(a) {
      $allStars.forEach(
        (el, idx) => (el.style.fill = idx <= a ? "#ffdd3f" : "#4b536b")
      );
    }
    $allStars.forEach((el) => {
      el.addEventListener("click", () => {
        const idx = $allStars.indexOf(el);
        changeStarColor(idx);
      });
    });
  }
  changeStarValue();
});
