const apiKey = "50dd7fa7f1197ddb3acbbe3ca517997f";
const city = "Warsaw"; 

const url = `https://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=c3b32bdb278eee4d461fc8122e163cac&units=metric&lang=`;

fetch(url)
  .then(response => response.json())
  .then(data => {   
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('temperature').textContent = `Temperatura: ${temp}°C`;
    document.getElementById('description').textContent = `Opis: ${description}`;
    document.getElementById('humidity').textContent = `Wilgotność: ${humidity}%`;
    document.getElementById('wind').textContent = `Wiatr: ${windSpeed} m/s`;
  })
 