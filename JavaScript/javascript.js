let slideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.carrusel img').length;
    
    slideIndex += direction;
    
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    
    const newPosition = -(slideIndex * 100) + '%';
    slides.style.transform = 'translateX(' + newPosition + ')';
}
