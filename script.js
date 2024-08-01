let currentIndex = 0;
const slideInterval = 10000;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
    resetSlideInterval();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetSlideInterval();
}

// Función para reiniciar el intervalo de cambio automático
function resetSlideInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, slideInterval);
}

// Inicialización del carrusel
function initializeCarousel() {
    showSlide(currentIndex);
    intervalId = setInterval(nextSlide, slideInterval);
}

// Initialize the carousel
initializeCarousel();
