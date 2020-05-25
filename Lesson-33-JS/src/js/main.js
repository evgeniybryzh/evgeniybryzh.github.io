"use strict";
//Готовлю ссылку, которая будет мнятся при вводе названия фильма
const $filmSearch = document.getElementById("film-search");
let $input = document.getElementById("inp");
$input.addEventListener("input", (event) => {
  let filmName = event.target.value;
  let link;
  let filmNameCount = filmName;

  filmNameCount
    .replace(/\r\n?|\n/g, " ")
    .replace(/ {2,}/g, " ")
    .replace(/^ /, "")
    .replace(/ $/, "");
  let wordCount = filmNameCount.split(" ");

  if (wordCount.length < 2) {
    link = `https://api.themoviedb.org/3/search/movie?api_key=4d0e0a8ddc91a1f349d93ca60c7121fe&query=${filmName}`;
  } else if (wordCount.length >= 2) {
    let filmWords = "";
    wordCount.forEach((element) => {
      filmWords += `+${element}`;
    });
    let finalFilmNames = filmWords.split("").splice(1, 1000).join("");
    link = `https://api.themoviedb.org/3/search/movie?api_key=4d0e0a8ddc91a1f349d93ca60c7121fe&query=${finalFilmNames}`;
  }
  //Реализация поиска фильмов по сгенерированной ссылке через фетч запрос
  function getResponse() {
    let $film = document.getElementById("film");
    if (event.target.value != "") {
      if ($filmSearch.children.length > 2) {
        while ($film.firstChild) {
          $film.removeChild($film.firstChild);
        }
      }
      fetch(link)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const filmElement = document.createElement("div");
          filmElement.classList.add("film");
          filmElement.id = "film";
          $filmSearch.appendChild(filmElement);

          for (let i = 0; i <= 10; i++) {
            let searchResoult = [...data.results];
            const $elementsWrapper = document.createElement("div");
            if (searchResoult[i].poster_path != null) {
              $elementsWrapper.innerHTML += `<img class="film__poster" src="https://image.tmdb.org/t/p/original${searchResoult[i].poster_path}" alt="img"</img>`;
            } else
              $elementsWrapper.innerHTML += `<img class="film__poster" title="No poster for now" src="images/ph.png" alt="img"</img>`;
            $elementsWrapper.innerHTML += `<h2 class="film__title">${searchResoult[i].original_title}</h2>`;
            $elementsWrapper.innerHTML += `<a href="#details" class="button">WATCH DETAILS</a>`;
            $elementsWrapper.classList.add(
              "film__item-box",
              "animate__animated",
              "animate__zoomInDown"
            );
            $film.appendChild($elementsWrapper);
          }
          //Вешаю событие на созданную кнопку (показ детальной инфо. и скролл к ней)
          document.addEventListener("click", (event) => {
            const $button = document.querySelectorAll(".button");
            for (let i = 0; i < $button.length; i++) {
              if (event.target == $button[i]) {
                let $details = document.getElementById("details");
                let $detailsTitle = document.getElementById("deatils-title");
                let $detailsDescription = document.getElementById(
                  "details-description"
                );
                let $detailsRelease = document.getElementById(
                  "details-release"
                );
                let $detailsRating = document.getElementById("deatils-rating");
                let searchResoult = [...data.results];
                $details.classList.add("active");
                $detailsTitle.innerText = searchResoult[i].title;
                $detailsDescription.innerText = `Description: ${searchResoult[i].overview}`;
                $detailsRelease.innerText = `Release Date: ${searchResoult[i].release_date}`;
                $detailsRating.innerText = `World Rating: ${searchResoult[i].vote_average}`;
              }
            }
          });
        })
        // Ловлю ошибки и возвращаю состояние элементов
        .catch((error) => {
          console.log(error);
        });
    } else
      $filmSearch.removeChild(document.getElementById("film")),
        document.getElementById("details").classList.remove("active");
  }

  getResponse();
});
