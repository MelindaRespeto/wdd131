// ===============================
// Author: Melinda P. Competente
// ===============================

// Static weather values (as shown in the HTML)
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);
const windChillElement = document.getElementById("windchill");

// 1️⃣ Function to calculate wind chill (Celsius version)
function calculateWindChill(tempC, speedKmh) {
  // Convert km/h to m/s for formula consistency
  const speedMs = speedKmh / 3.6;
  // Standard wind chill formula (°C)
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedMs, 0.16) + 0.3965 * tempC * Math.pow(speedMs, 0.16)).toFixed(1);
}

// 2️⃣ Apply only if valid conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${chill} °C`;
} else {
  windChillElement.textContent = "N/A";
}

// 3️⃣ Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;





// --- Wind Chill Calculator ---
function calculateWindChill(temp, speed) {
  // Formula for wind chill (Fahrenheit and mph)
  return (
    35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function updateWindChill() {
  const tempInput = document.getElementById("tempInput").value;
  const windInput = document.getElementById("windInput").value;
  const windChillElement = document.getElementById("windChillResult");
  const weatherOutput = document.getElementById("windchill");

  const t = parseFloat(tempInput);
  const s = parseFloat(windInput);

  // Check valid input and conditions for wind chill
  if (t <= 50 && s > 3) {
    const chill = calculateWindChill(t, s);
    windChillElement.textContent = `${chill} °F`;
    weatherOutput.textContent = `Wind Chill: ${chill} °F`;
  } else {
    windChillElement.textContent = "N/A";
    weatherOutput.textContent = "Wind Chill: N/A";
  }
}

// Listen for button click
document.getElementById("calcBtn").addEventListener("click", updateWindChill);
