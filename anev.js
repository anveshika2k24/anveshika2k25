document.addEventListener("DOMContentLoaded", () => {

    /* ================= SLIDER ================= */

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let index = 0;
    let interval = null;

    // Show current slide
    function showSlide() {
        slides.forEach(s => s.classList.remove("active"));
        slides[index].classList.add("active");
    }

    // Next slide
    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide();
    }

    // Previous slide
    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide();
    }

    // Start auto slide
    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }

    // Stop auto slide
    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Only run slider if slides exist
    if (slides.length > 0) {
        showSlide();
        startAutoSlide();

        // Button events (only if buttons exist)
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            });
        }

        /* ===== MOBILE SWIPE ===== */
        let startX = 0;
        let endX = 0;

        const slider = document.querySelector(".news-slider");

        if (slider) {
            slider.addEventListener("touchstart", e => {
                startX = e.touches[0].clientX;
            });

            slider.addEventListener("touchend", e => {
                endX = e.changedTouches[0].clientX;

                if (startX - endX > 50) nextSlide();   // swipe left
                if (endX - startX > 50) prevSlide();   // swipe right
            });
        }
    }

    /* ================= BURGER MENU ================= */

    window.toggleMenu = function () {
        const navMenu = document.getElementById("navMenu");
        if (navMenu) {
            navMenu.classList.toggle("show");
        }
    };

});
