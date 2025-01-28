function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperatures");
  let temperatures = response.data.temperatures.current;
  let cityElement = document.querySelector("city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperatures);
}

function searchCity(city) {
  let apiKey = "b607f2b3e7boc10f3aa38ta0b3f655e47";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");

  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-bar");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
