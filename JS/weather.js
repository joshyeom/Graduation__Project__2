const API_KEY = "a761f73b41aeafc4443783d2de378f25";
const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
const weatherIcon = document.querySelector("#weather i");

function weatherChaser() {
  const lat = "37.5715";
  const lon = "126.9835";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      temp.innerText = Math.floor(data.main.temp) + "ºC";
      const weatherInfo = data.weather[0].main;
      switch (weatherInfo) {
        case "Rain":
          weatherIcon.classList.add("fa-solid", "fa-droplet");
          break;
        case "Thunderstorm":
          weatherIcon.classList.add("fa-solid", "fa-cloud-bolt");
          break;
        case "Drizzle":
          weatherIcon.classList.add("fa-solid", "fa-cloud-drizzle");
          break;
        case "Snow":
          weatherIcon.classList.add("fa-solid", "fa-cloud-snowflake");
          break;
        case "Mist":
          weatherIcon.classList.add("fa-solid", "fa-cloud-fog");
          break;
        case "Smoke":
          weatherIcon.classList.add("fa-solid", "fa-cloud-fog");
          break;
        case "Haze":
          weatherIcon.classList.add("fa-solid", "fa-sun-haze");
          break;
        case "Dust":
          weatherIcon.classList.add("fa-solid", "fa-sun-dust");
          break;
        case "Fog":
          weatherIcon.classList.add("fa-solid", "fa-cloud-fog");
          break;
        case "Sand":
          weatherIcon.classList.add("fa-solid", "fa-cloud-dust");
          break;
        case "Ash":
          weatherIcon.classList.add("fa-solid", "fa-cloud-dust");
          break;
        case "Squall":
          weatherIcon.classList.add("fa-solid", "fa-cloud-rain");
          break;
        case "Tornado":
          weatherIcon.classList.add("fa-solid", "fa-tornado");
          break;
        case "Clear":
          weatherIcon.classList.add("fa-solid", "fa-sun");
          break;
        case "Clouds":
          weatherIcon.classList.add("fa-solid", "fa-cloud");
          break;
      }
    });
}

weatherChaser();
