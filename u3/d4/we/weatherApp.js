async function getWeatherData() {
  let city = document.getElementById("city").value;

  try {
    let res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8c09e15404c15569b220c8b7ff106abf`
    );

    var data = await res.json();

    showWeatherData(data);
  } catch (error) {
    console.log("error", error);
  }
  console.log(data);
}

let container = document.getElementById("container");

function showWeatherData(d) {
  let name = document.createElement("h3");
  name.innerHTML = `Name: ${d.name}`;

  let temp = document.createElement("h3");
  temp.innerHTML = `temperature: ${d.main.temp - 273}`;

  let humidity = document.createElement("h3");
  humidity.innerHTML = `Humidity: ${d.main.humidity}`;

  let pressure = document.createElement("h3");
  pressure.innerHTML = `Pressure: ${d.main.pressure}`;

  container.append(name, temp, humidity, pressure);
}
