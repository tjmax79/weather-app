const form = document.getElementById('weather-form');
const weatherResult = document.getElementById('weather-result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Location not found');
        const data = await response.json();

        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    }
});
