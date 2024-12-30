document.addEventListener("DOMContentLoaded", () => {
    const viewCvBtn = document.getElementById("view-cv-btn");

    if (viewCvBtn) {
        viewCvBtn.addEventListener("click", () => {
            window.open("cv.pdf", "_blank");
        });
    }
});