const apiKey = "7121b8eb7affcaf5ca2519548bb8f3be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let weatherIcon = document.querySelector(".weather-icon")
let searchBox = document.querySelector(".search input")

let searchBtn = document.querySelector(".search button")


async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
  let data = await response.json();
  console.log(data);

  let temp = document.querySelector(".temp")
  temp.innerHTML = Math.round(data.main.temp) + "°C"

  let city = document.querySelector(".city")
  city.innerHTML = data.name;

  let wind = document.querySelector(".wind")
  wind.innerHTML = data.wind.speed + " km/hour";

  let humidity = document.querySelector(".humidity")
  humidity.innerHTML = data.main.humidity + "%";

  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  else if (data.weather[0].main == "Humidity") {
    weatherIcon.src = "images/humidity.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
  else if (data.weather[0].main == "Search") {
    weatherIcon.src = "images/search.png";
  }
  else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  }
  else if (data.weather[0].main == "Wind") {
    weatherIcon.src = "images/wind.png";
  }

}



searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value)
})