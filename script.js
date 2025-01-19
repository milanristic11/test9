const boxes = document.querySelectorAll('.zvuk, .carousel-arrow, .rectangle');

const hoverSound = new Audio('zvuk/macmouse.mp3');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0; 
    hoverSound.play(); 
  });
});

let currentIndex = 0;
const cards = document.querySelectorAll('.carousel .card');
const totalCards = cards.length;

function moveRight() {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const cardWidth = cards[0].offsetWidth + 20; // account for margin
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}