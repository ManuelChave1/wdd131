  let windS  = document.querySelector("#windspeed");
  let temp = document.querySelector("#temperature");
  let condition = document.querySelector("#conditions");

  const temperature = 30;   
  const windSpeed = 30;   
  windS.textContent = windSpeed;
  temp.textContent = temperature;

  function calculateWindChill(temperature, windSpeed) {
    return (
      13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))
    ).toFixed(1);
  }

  function displayWindChill() {
    let result = "N/A";

    if (temperature <= 10 && windSpeed > 4.8) {
      result = calculateWindChill(temperature, windSpeed) + " °C";
    }

    document.getElementById("windchill").textContent = result;
  }

  window.addEventListener("load", displayWindChill);