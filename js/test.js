const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel-items");
const carouselItem = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
let totalItems = carouselItem.length;
let translateValue = 0;

function moveCarousel() {
  carouselItems.style.transform = `translateX(${translateValue}px)`;
}

nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    translateValue -= carouselItem[currentIndex].offsetWidth;
  } else {
    currentIndex = 0;
    translateValue = 0;
  }
  moveCarousel();
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    translateValue += carouselItem[currentIndex].offsetWidth;
  } else {
    currentIndex = totalItems - 1;
    translateValue =
      -carouselItems.offsetWidth + carouselItem[currentIndex].offsetWidth;
  }
  moveCarousel();
});

// Mise à jour de la fonction loopCarousel pour gérer le passage à la dernière image
function loopCarousel() {
  if (currentIndex === totalItems - 1) {
    currentIndex = 0;
    translateValue = 0;
  } else {
    currentIndex++;
    translateValue -= carouselItem[currentIndex].offsetWidth;
  }
  moveCarousel();
}

// Ajout d'une vérification pour le bouton Previous
prevButton.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = totalItems - 1;
    translateValue =
      -carouselItems.offsetWidth + carouselItem[currentIndex].offsetWidth;
  } else {
    currentIndex--;
    translateValue += carouselItem[currentIndex].offsetWidth;
  }
  moveCarousel();
});

setInterval(loopCarousel, 3000);
