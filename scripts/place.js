/* =======================================
   Author: Melinda P. Competente
   File: place.js
   Description: Script for Boracay Philippines page
   Features: Displays current year, last modified date, 
             and calculates wind chill.
   ======================================= */

// ======== Display Current Year ========
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear();
  if (yearSpan) yearSpan.textContent = currentYear;

  // ======== Display Last Modified Date ========
  const dateSpan = document.getElementById("currentDate");
  if (dateSpan) {
    const lastModified = document.lastModified;
    dateSpan.textContent = lastModified;
  }
});

// ======== Wind Chill Calculator ========
function calculateWindChill() {
  const tempInput = document.getElementById("temperature");
  const windInput = document.getElementById("windSpeed");
  const result = document.getElementById("result");

  const temperature = parseFloat(tempInput.value);
  const windSpeed = par;}
