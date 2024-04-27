addEventListener("DOMContentLoaded", () => {
  document.querySelector(".search button").addEventListener("click", () => {
    let Temp = null;
    let humidity = null;
    let windSpeed = null;
    let name = null;

    const city = document.querySelector(".search input").value;
    const temperature = document.querySelector(".temp");
    const locationOutput = document.querySelector(".location");
    const humidityOutput = document.querySelector(".humidityData");
    const windOutput = document.querySelector(".windData");
    const icon = document.querySelector(".image");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c2d029a529fac94718a7119161f6025&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Temp = data.main.temp;
        humidity = data.main.humidity;
        windSpeed = data.wind.speed;
        name = data.name;
        locationOutput.innerHTML = name;
        temperature.innerHTML = Math.round(`${Temp}`) + "°C";
        windOutput.innerHTML = `${windSpeed} Km/h`;
        humidityOutput.innerHTML = `${humidity} %`;
        if (data.weather[0].main.toLowerCase() == "rain") {
          icon.outerHTML = '<div class="image"><img src="images/rain.png"></div>';
          console.log("rain");
        }
        if (data.weather[0].main.toLowerCase() == "clouds") {
          icon.outerHTML = '<div class="image"><img src="images/clouds.png"></div>';
          console.log("clouds");
        }
        if (data.weather[0].main.toLowerCase() == "clear") {
          icon.outerHTML = '<div class="image"><img src="images/clear.png"></div>';
          console.log("clear");
        }
        if (data.weather[0].main.toLowerCase() == "drizzle") {
          icon.outerHTML = '<div class="image"><img src="images/drizzle.png"></div>';
          console.log("drizzle");
        }
        if (data.weather[0].main.toLowerCase() == "mist") {
          icon.outerHTML = '<div class="image"><img src="images/mist.png"></div>';
          console.log("mist");
        }
        if (data.weather[0].main.toLowerCase() == "snow") {
          icon.outerHTML = '<div class="image"><img src="images/snow.png"></div>';
          console.log("snow");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(data.message);
      });
  });
});
