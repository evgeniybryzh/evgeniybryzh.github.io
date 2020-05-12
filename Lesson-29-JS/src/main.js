"use strict";
// Task1
var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const showMusic = () => {
  let $list = document.createElement("ol");
  playList.forEach((el) => {
    let $itemList = document.createElement("li");
    $itemList.innerText = `Author: ${el.author}; Song: ${el.song}`;
    $list.appendChild($itemList);
  });
  document.body.append($list);
};
// showMusic();

// Task2
const useModalWindow = () => {
  const $buttons = document.getElementsByClassName("button");
  const $buttonOpen = $buttons[0];
  const $buttonExit = $buttons[1];
  const $modals = document.getElementsByClassName("modal");
  const $modalWindow = $modals[0];

  const showModalWindow = () => {
    $modalWindow.style.display = "flex";
  };
  const closeModalWindow = () => {
    $modalWindow.style.display = "none";
  };
  $buttonOpen.onclick = showModalWindow;
  $buttonExit.onclick = closeModalWindow;
};
useModalWindow();

// Task3
const allColors = document.getElementsByClassName("traffic-light__colors");
const $button = document.body.querySelectorAll("button")[2];

const changeColors = () => {
  if (allColors[0].style.opacity != "1" && allColors[1].style.opacity != "1") {
    allColors[0].style.opacity = "1";
    allColors[1].style.opacity = "0.2";
    allColors[2].style.opacity = "0.2";
  } else if (allColors[1].style.opacity != "1") {
    allColors[1].style.opacity = "1";
    allColors[0].style.opacity = "0.2";
    allColors[2].style.opacity = "0.2";
  } else if (
    allColors[0].style.opacity != "1" &&
    allColors[2].style.opacity != "1"
  ) {
    allColors[2].style.opacity = "1";
    allColors[1].style.opacity = "0.2";
    allColors[0].style.opacity = "0.2";
  }
};
// changeColors();
$button.onclick = changeColors;
