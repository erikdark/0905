document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carusel-inner');
    const carouselItems = document.querySelectorAll('.carusel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    });
});