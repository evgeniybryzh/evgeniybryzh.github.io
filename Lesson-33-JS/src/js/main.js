"use strict";

// Определяем основные апи ендпоинты и ключ
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `4d0e0a8ddc91a1f349d93ca60c7121fe`;
// Генерация урла с поиском
const getSearchUrl = (query) =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

const $filmSearch = document.getElementById("film-search");
const $input = document.getElementById("inp"); // let => const
const $films = document.getElementById("films"); // Когда ты делаешь createElement ты делаешь его постоянно каждый раз и утебя даже при пустом вводе он содается, открой девтулс и увидишь что если повводить и поудлять символы появится 100 дивов и пустых и полных и изза этого повторы появляются еще
const $details = document.getElementById("details");
const getMovieCard = (movie) => {
  return `
  <li class="film__item-box animate__animated animate__zoomInDown">
    ${
      movie.poster_path
        ? `<img class="film__poster" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="img">`
        : `<img class="film__poster" title="No poster for now" src="images/ph.png" alt="img">`
    }
    <h2 class="film__title">${movie.original_title}</h2>
    <a href="#details" id="button" class="button">WATCH DETAILS</a>
  </li>`;
};

const renderMovies = (movies) => {
  const content = movies.map(getMovieCard);
  $films.innerHTML = content.join("");
};

const getDescription = (link) => {
  const detailsTitle = document.getElementById("details-title");
  const detailsDescription = document.getElementById("details-description");
  const detailsRelease = document.getElementById("details-release");
  const deatilsRating = document.getElementById("deatils-rating");

  detailsTitle.innerText = `${link.title}`;
  detailsDescription.innerText = `Description: ${link.overview}`;
  detailsRelease.innerText = `Release Date: ${link.release_date}`;
  deatilsRating.innerText = `Worlds Rating: ${link.vote_average}`;
};
const showDescription = (APIData) => {
  const $button = document.querySelectorAll(".button");
  for (let i = 0; i < $button.length; i++) {
    document.addEventListener("click", (event) => {
      if (event.target == $button[i]) {
        $details.classList.add("active");
        getDescription(APIData[i]);
      }
    });
  }
};

const getMovies = (query) => {
  if (query) {
    fetch(getSearchUrl(query))
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          renderMovies(data.results), showDescription(data.results);
        }
      })
      .catch((err) => console.log(err));
  } else {
    $films.innerHTML = "";
    $details.classList.remove("active");
  }
};

$input.addEventListener("input", (event) => {
  const { value } = event.target;
  getMovies(value);
});

// Это все многословие, если что браузер сам умеет разделять пробелы

// $input.addEventListener('input', (event) => {
// Это все многословие, если что браузер сам умеет разделять пробелы

// let filmName = event.target.value;
// let link;
// let filmNameCount = filmName;

// filmNameCount
//   .replace(/\r\n?|\n/g, " ")
//   .replace(/ {2,}/g, " ")
//   .replace(/^ /, "")
//   .replace(/ $/, "");
// let wordCount = filmNameCount.split(" ");

// if (wordCount.length < 2) {
//   link = `https://api.themoviedb.org/3/search/movie?api_key=4d0e0a8ddc91a1f349d93ca60c7121fe&query=${filmName}`;
// } else if (wordCount.length >= 2) {
//   let filmWords = "";
//   wordCount.forEach((element) => {
//     filmWords += ` ${element}`;
//   });
//   let finalFilmNames = filmWords.split("").splice(1, 1000).join("");
//   link = `https://api.themoviedb.org/3/search/movie?api_key=4d0e0a8ddc91a1f349d93ca60c7121fe&query=${finalFilmNames}`;
// }

//   function getResponse() {
//     let $film = document.getElementById('film');
//     if (event.target.value != '') {
//       if ($filmSearch.children.length > 2) {
//         while ($film.firstChild) {
//           $film.removeChild($film.firstChild);
//         }
//       }
//       fetch(link)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           const filmElement = document.createElement('div');
//           filmElement.classList.add('film');
//           filmElement.id = 'film';
//           $filmSearch.appendChild(filmElement);

//           for (let i = 0; i <= 10; i++) {
//             let searchResoult = [...data.results];
//             const $elementsWrapper = document.createElement('div');
//             if (searchResoult[i].poster_path != null) {
//               $elementsWrapper.innerHTML += `<img class="film__poster" src="https://image.tmdb.org/t/p/original${searchResoult[i].poster_path}" alt="img"</img>`;
//             } else
//               $elementsWrapper.innerHTML += `<img class="film__poster" title="No poster for now" src="images/ph.png" alt="img"</img>`;
//             $elementsWrapper.innerHTML += `<h2 class="film__title">${searchResoult[i].original_title}</h2>`;
//             $elementsWrapper.innerHTML += `<a href="#details" class="button">WATCH DETAILS</a>`;
//             $elementsWrapper.classList.add(
//               'film__item-box',
//               'animate__animated',
//               'animate__zoomInDown'
//             );
//             $film.appendChild($elementsWrapper);
//           }
//           //Вешаю событие на созданную кнопку (показ детальной инфо. и скролл к ней)
//           document.addEventListener('click', (event) => {
//             const $button = document.querySelectorAll('.button');
//             for (let i = 0; i < $button.length; i++) {
//               if (event.target == $button[i]) {
//                 let $details = document.getElementById('details');
//                 let $detailsTitle = document.getElementById('deatils-title');
//                 let $detailsDescription = document.getElementById(
//                   'details-description'
//                 );
//                 let $detailsRelease = document.getElementById(
//                   'details-release'
//                 );
//                 let $detailsRating = document.getElementById('deatils-rating');
//                 let searchResoult = [...data.results];
//                 $details.classList.add('active');
//                 $detailsTitle.innerText = searchResoult[i].title;
//                 $detailsDescription.innerText = `Description: ${searchResoult[i].overview}`;
//                 $detailsRelease.innerText = `Release Date: ${searchResoult[i].release_date}`;
//                 $detailsRating.innerText = `World Rating: ${searchResoult[i].vote_average}`;
//               }
//             }
//           });
//         })
//         // Ловлю ошибки и возвращаю состояние элементов
//         .catch((error) => {
//           console.log(error);
//         });
//     } else
//       $filmSearch.removeChild(document.getElementById('film')),
//         document.getElementById('details').classList.remove('active');
//   }

//   getResponse();
// });
