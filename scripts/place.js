/* =======================================
   Author: Melinda P. Competente
   File: place.js
   Description: Handles navigation, footer date, and wind chill calculation
   ======================================= */

document.addEventListener("DOMContentLoaded", function () {
  // ==========================
  // NAV MENU TOGGLE
  // ==========================
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // ==========================
  // FOOTER DATE SCRIPT
  // ==========================
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  yearSpan.textContent = currentYear;
  lastModifiedSpan.textContent = lastModified;

  // ==========================
  // WIND CHILL FUNCTION (One line)
  // ==========================
  function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh / 3.6, 0.16) + 0.3965 * tempC * Math.pow(windKmh / 3.6, 0.16);
  }

  // ==========================
  // DISPLAY WIND CHILL
  // ==========================
  const tempElem = document.getElementById("temp");
  const windElem = document.getElementById("wind");
  const chillElem = document.getElementById("chill");

  const tempC = parseFloat(tempElem.textContent);
  const windKmh = parseFloat(windElem.textContent);

  if (tempC <= 10 && windKmh > 4.8) {
    const chill = calculateWindChill(tempC, windKmh).toFixed(1);
    chillElem.textContent = `${chill}°C`;
  } else {
    chillElem.textContent = "N/A";
  }
});
