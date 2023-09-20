addEventListener("DOMContentLoaded", () => {
  let lat = null;
  let lon = null;
  let time = null;
  let temp = null;
  let date = null;
  let maxTemp = null;
  let minTemp = null;

  const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let temperature = document.getElementsByClassName("temp");
  // const getLocationButton = document.getElementById('getLocation');
  const locationOutput = document.getElementById("locationOutput");

  //making api request

   fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=22&longitude=79&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      temp = data.hourly.temperature_2m[0];
      time = new Date(data.hourly.time[0]);
      date = time.toLocaleDateString("en-US", dateFormat);
      maxTemp = data.daily.temperature_2m_max[0];
      minTemp = data.daily.temperature_2m_min[0];
      lat = data.latitude;
      lon = data.longitude;
      locationOutput.textContent = `Hourly temperture is ${temp}, Daily maximum temperature is ${maxTemp}, Daily minimum temperature is ${minTemp}, date is ${date}, latitude is ${lat}, longitude is ${lon}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// taking user geolocation

//  getLocationButton.addEventListener('click', () => {

//     if ('geolocation' in navigator){

//        navigator.geolocation.getCurrentPosition( (position) => {

//           lat = position.coords.latitude;
//           lon = position.coords.longitude;

//        })

//     }

//  })
