// ~----------------------------------------------~

// Scenario 1: Weather Dashboard with Error Handting
// Build a small weather dashboard that fetches current weather data fro any public weather API (such as OpenWeatherMap).
// You must make the API request asynchronously using fetch with async/ await.
// If the API request fails (for example, due to an invalid city name), you must handle the error using try/catch.
// Additionally, create and throw custom errors based on weather conditions.
// For example:
// If the temperature is extremely high or extremely low, throw error and handle it properly in your code.

// ~----------------------------------------------~

async function getWeather(city) {
  try {
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;
    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );

    if (!raw.ok) {
      throw new Error("City not found, try something else ");
    } else {
      let realData = raw.json();
      // console.log(realData);
      console.log(raw);
    }
  } catch (err) {
    console.log(err.message);
  }
}
getWeather("Leh");

// ~----------------------------------------------~
