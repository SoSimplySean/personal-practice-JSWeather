// PARSE DATA AND RETURN IN JSON FORMAT

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`
  );
  const data = await response.json();
  renderDisplay(data);
}

// CHECK FORM INPUT DATA
const search = document.querySelector("#search");
search.addEventListener(`keypress`, function (e) {
  if (e.key === `Enter`) {
    getWeatherData(search.value.toLowerCase());
  }
});

// RENDER DATA
const weather = document.querySelector(`.weather`);
const location = document.querySelector(`.location`);
const temperature = document.querySelector(`.temperature`);
const feels = document.querySelector(`.feels`);
const wind = document.querySelector(`.wind`);
const humidity = document.querySelector(`.humidity`);

function renderDisplay(data) {
  weather.innerHTML = `${data.current.condition.text.toUpperCase()}`;
  location.innerHTML = `${data.location.country}`;
  temperature.innerHTML = `${data.current.temp_c}C`;
  feels.innerHTML = `FEELS LIKE: ${data.current.feelslike_c}C`;
  wind.innerHTML = `WIND: ${data.current.wind_kph}KPH`;
  humidity.innerHTML = `HUMIDITY: ${data.current.humidity}%`;
}
