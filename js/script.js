let currentIndex = 0;
let timer;

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Set the animation class to trigger the smooth transition
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.classList.add('animate');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Reset timer
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => changeSlide(1), 3000); // Change slide every 3 seconds
}

// Initial timer setup
resetTimer();

// Remove animation class after transition ends
document.querySelector('.carousel-inner').addEventListener('transitionend', () => {
    document.querySelector('.carousel-inner').classList.remove('animate');
});