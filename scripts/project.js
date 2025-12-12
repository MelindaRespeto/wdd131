(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // --- Form Handling ---
    const form = document.querySelector("form");
    if (!form) return console.warn("No form found on this page.");

    const productSelect = document.getElementById("product");
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const dateInput = document.getElementById("date");
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"][name="feature"]');
    const reviewTextarea = document.getElementById("review");
    const nameInput = document.getElementById("name");

    // Load saved data from localStorage
    const savedData = JSON.parse(localStorage.getItem("reviewFormData")) || {};

    if (productSelect) productSelect.value = savedData.product || "";
    if (dateInput) dateInput.value = savedData.install_date || "";
    if (reviewTextarea) reviewTextarea.value = savedData.review || "";
    if (nameInput) nameInput.value = savedData.name || "";

    // Load rating
    if (savedData.rating) {
      const ratingInput = document.querySelector(`input[name="rating"][value="${savedData.rating}"]`);
      if (ratingInput) ratingInput.checked = true;
    }

    // Load checkboxes
    if (savedData.feature && Array.isArray(savedData.feature)) {
      checkboxInputs.forEach(cb => {
        cb.checked = savedData.feature.includes(cb.value);
      });
    }

    console.log("Loaded localStorage data:", savedData);

    // Save data to localStorage on submit
    form.addEventListener("submit", e => {
      e.preventDefault();

      const selectedRating = Array.from(ratingInputs).find(r => r.checked)?.value || "";
      const selectedFeatures = Array.from(checkboxInputs)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      const formData = {
        product: productSelect?.value || "",
        rating: selectedRating,
        install_date: dateInput?.value || "",
        feature: selectedFeatures,
        review: reviewTextarea?.value || "",
        name: nameInput?.value || ""
      };

      localStorage.setItem("reviewFormData", JSON.stringify(formData));

      console.log("Saved form data:", formData);
      alert("Your review has been saved locally!");
    });

    // --- Footer Update ---
    const currentYearEl = document.getElementById("currentYear");
    const lastModifiedEl = document.getElementById("lastModified");

    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) {
      const lastModifiedDate = new Date(document.lastModified);
      lastModifiedEl.textContent = lastModifiedDate.toLocaleString("en-PH", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
  });
})();
