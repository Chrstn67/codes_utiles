# CARROUSEL

Pour agrémenter un site web, c'esst toujours agréable d'avoir quelques images qui défilent. De manière automatique ou manuelle, voici un code simple qui vous permet d'ajouter les images de votre choix sur votre site:

```html
<div class="carousel">
  <div class="carousel__slide">
    <img src="img1.jpg" alt="Image 1" />
  </div>
  <div class="carousel__slide">
    <img src="img2.jpg" alt="Image 2" />
  </div>
  <div class="carousel__slide">
    <img src="img3.jpg" alt="Image 3" />
  </div>
</div>

<button class="carousel__button carousel__button--prev">&#8249;</button>
<button class="carousel__button carousel__button--next">&#8250;</button>
<button class="carousel__button carousel__button--loop">Boucle</button>
```

```css
.carousel__button--loop {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1em;
  padding: 0.5em 1em;
  background: #ccc;
  border: none;
  border-radius: 0.25em;
  font-size: 1em;
  cursor: pointer;
}
```

```js
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".carousel__slide");
const prevButton = carousel.querySelector(".carousel__button--prev");
const nextButton = carousel.querySelector(".carousel__button--next");
const loopButton = carousel.querySelector(".carousel__button--loop");
let currentSlide = 0;
let isLooping = false;

// Affiche la slide active
const showSlide = (index) => {
  slides.forEach((slide) => slide.classList.remove("carousel__slide--active"));
  slides[index].classList.add("carousel__slide--active");
};

// Gestionnaire d'événement pour le bouton précédent
prevButton.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

// Gestionnaire d'événement pour le bouton suivant
nextButton.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

// Gestionnaire d'événement pour le bouton de boucle
loopButton.addEventListener("click", () => {
  isLooping = !isLooping;
  loopButton.textContent = isLooping ? "Désactiver boucle" : "Activer boucle";
});

// Affiche la première slide au chargement de la page
showSlide(currentSlide);

// Boucle automatique si la boucle est activée
let intervalId;
if (isLooping) {
  intervalId = setInterval(() => {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }, 3000);
}
```
