function displayTemples(list = temples) {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; // clear previous cards

  list.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <div class="temple-name">${t.templeName}</div>
      <div class="Location">Location: ${t.location}</div>
      <div class="Dedicated">Dedicated: ${t.dedicated}</div>
      <div class="Area">Size: ${t.area.toLocaleString()} sq ft</div>
      <img class="img" src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

function applyFilter() {
  const main = document.querySelector("main");
  const filter = main.dataset.filter;

  let filtered = temples;

  if (filter === "old") filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  if (filter === "new") filtered = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
  if (filter === "large") filtered = temples.filter(t => t.area > 100000);
  if (filter === "small") filtered = temples.filter(t => t.area < 10000);

  displayTemples(filtered);
}

function updateLastModified() {
  document.getElementById('lastModified').textContent = document.lastModified;
}

function updateYear() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  applyFilter();
  updateYear();
  updateLastModified();
});
