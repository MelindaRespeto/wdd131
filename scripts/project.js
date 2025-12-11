// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

console.log(JSON.parse(localStorage.getItem("reviewFormData")));


    // Get all input elements
    const productSelect = document.getElementById("product");
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const dateInput = document.getElementById("date");
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"][name="feature"]');
    const reviewTextarea = document.getElementById("review");
    const nameInput = document.getElementById("name");

    // Load saved data from localStorage
    const savedData = JSON.parse(localStorage.getItem("reviewFormData"));
    if (savedData) {
        productSelect.value = savedData.product || "";
        dateInput.value = savedData.install_date || "";
        reviewTextarea.value = savedData.review || "";
        nameInput.value = savedData.name || "";

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
    }

    // Save data to localStorage on submit
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission to server

        const selectedRating = Array.from(ratingInputs).find(r => r.checked)?.value || "";
        const selectedFeatures = Array.from(checkboxInputs)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const formData = {
            product: productSelect.value,
            rating: selectedRating,
            install_date: dateInput.value,
            feature: selectedFeatures,
            review: reviewTextarea.value,
            name: nameInput.value
        };

        localStorage.setItem("reviewFormData", JSON.stringify(formData));
        alert("Your review has been saved locally!");
    });

    // Update footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
