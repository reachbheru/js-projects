addEventListener("DOMContentLoaded", () => {

  document.querySelector(".search button").addEventListener('click',()=> {
    let Temp = null;
    let humidity = null;
    let windSpeed = null;
    let name = null;

    // function weatherCondition(condition){
    //   if (condition === "clear") {
    //     image.src = "images/clear.png";
    //   }
    //   else if(condition === "clouds"){
    //     image.src = "images/clouds.png"
    //   }
    //   else if(condition === "drizzle") {
    //     image.src = "image/drizzle.png"
    //   }
    //   else if(condition === "humidity"){
    //     image.src = "image/humidity.png"
    //   }
    // }
  
    const city = document.querySelector(".search input").value;
    const temperature = document.querySelector(".temp");
    const locationOutput = document.querySelector(".location");
    const humidityOutput = document.querySelector(".humidityData");
    const windOutput = document.querySelector(".windData");
    const image = document.querySelector(".image");
  
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
        temperature.innerHTML = Math.round(`${Temp}`)+"°C";
        windOutput.innerHTML = `${windSpeed} Km/h`;
        humidityOutput.innerHTML = `${humidity} %`;
        // weatherCondition(data.weather.main);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("error 404")
      });
  })

});

