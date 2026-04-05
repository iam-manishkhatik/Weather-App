let apikey = "387fc9366a9d43994628f02c06ca66c7";

let searchBtn = document.querySelector("#search-btn");
let weatherData = document.querySelector("#weather-data");

searchBtn.addEventListener("click", async () => {
  let cityName = document.querySelector("#city-name").value.trim();
  if (cityName === "") {
    weatherData.innerHTML = `<h3 style="color: rgb(182, 32, 42); text-align: center">Please enter a city name...</h3>`;
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`,
    );
    // console.log(res);

    if (!res.ok) {
      weatherData.innerHTML = `<h3 style="color: rgb(182, 32, 42); text-align: center">City not found...</h3>`;
      return;
    }

    let data = await res.json();
    console.log(data);

    weatherData.innerHTML = `
        <h1 style="color: #540505; text-align: center">${data.name}, ${data.sys.country}</h1>
        <h3 style="color: #555; text-align: center">Temperature: ${data.main.temp} °C</h3>
        <p style="color: #666; text-align: center">Wind Speed: ${data.wind.speed} m/s</p>
        <p style="color: #666; text-align: center"> <b> Humidity: </b>${data.main.humidity} g/m<sup>3</sup></p>
        <p style="color: #666; text-align: center"> <b> pressure: </b> ${data.main.pressure} Pa</p>
    `;
  } catch (error) {
    console.log(error, "error in Fetching API");
  }
});
