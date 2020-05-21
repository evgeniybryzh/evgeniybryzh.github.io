"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((myJson) => JSON.stringify(myJson))
    .catch((error) => {
      console.log("error");
      console.error(error);
    });
});
