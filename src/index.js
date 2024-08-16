function handleSearchSubmit(event) {
  event.preventDeFault();
  let searchIput = document.querySelector("#search-bar-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-bar-input");
searchFormElement.addEventListener("submit", handleSearchSubmit);
