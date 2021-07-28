async function getWeather() {
  try {
    let res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=8c09e15404c15569b220c8b7ff106abf"
    );
    let data = await res.json();

    console.log("data:", data);
  } catch (error) {
    console.log("error", error);
  }
}
