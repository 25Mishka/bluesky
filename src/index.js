function refreshWeather(response) {
  let temperaturesElement = document.querySelector("#temperatures");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  // Access temperature and city name based on the API response structure
  let temperatures = response.data.temperatures.current;

  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML =
    "${datee.getDay()} ${data.getHours()}:${date.getMinutes()}";
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = "${response.data.condition.humidity}%";
  temperaturesElement.innerHTML = Math.round(temperatures);
  windSpeedElement.innerHTML = "${response.data.wind.speed}km/h";
}

function formateDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = "0$(minutes}";
  }

  return "${day}  ${hours} :${minutes}";
}

function searchCity(city) {
  let apiKey = "607f2b3e7boc10f3aa38ta0b3f655e47";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");

  // Update cityElement
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;

  // Call searchCity with the user input
  searchCity(searchInput.value);
}

// Add event listener for form submission
let searchFormElement = document.querySelector("#search-bar");
searchFormElement.addEventListener("submit", handleSearchSubmit);

// Perform a default search
searchCity("Paris");
