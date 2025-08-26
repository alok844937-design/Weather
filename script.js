const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultBox = document.getElementById("weatherResult");

  if (city === "") {
    resultBox.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;

    resultBox.innerHTML = `
      🌍 City: ${data.name} <br>
      🌡️ Temperature: ${temp} °C <br>
      ☁️ Weather: ${desc} <br>
      💧 Humidity: ${humidity}%
    `;
  } catch (error) {
    resultBox.innerHTML = "❌ Error: " + error.message;
  }
}
