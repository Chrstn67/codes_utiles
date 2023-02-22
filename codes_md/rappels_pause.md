# RAPPEL DE PAUSE

Il arrive que vous ne voyez pas le temps passer... Et c'est important pour un dév de faire des pauses régulières pour être le plus efficace possible !!

Alors, je vous ai concocté un code tout simple (personnalisable) que vous pouvez intégrer à vos sites, et qui fonctionne même sans recharger une page:

```html
<div id="modal" class="modal">
  <div class="modal-content">
    <p>
      Cela fait 20 minutes que tu travailles... <br />
      Pense à te dégourdir un peu, regarde dehors et bois un coup !
    </p>
    <button class="close-button">Fermer</button>
  </div>
</div>
```

```css
/_ Style pour le modal _/ .modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

/_ Style pour le bouton de fermeture du modal _/ .close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fcfcfc;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  animation: warning 1s linear infinite;
}

.close-button {
  background-color: #ff5a5f;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: 5px black solid;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
}

@keyframes warning {
  0% {
    background-color: red;
  }
  25% {
    background-color: white;
    border-radius: 50%;
    border: 10px solid yellow;
  }
  50% {
    background-color: red;
  }
  75% {
    background-color: white;
    border-radius: 50%;
    border: 10px solid yellow;
  }
  100% {
    background-color: red;
  }
}
```

```js
// ! GESTION DU TEMPS

// Définir la date de fin du compte à rebours (dans 20 minutes)
let countDownDate;
let interval;

function startCountdown() {
  // Récupérer la date de fin du compte à rebours à partir du stockage local, ou définir une nouvelle date de fin (dans 20 minutes)
  countDownDate =
    localStorage.getItem("countDownDate") ||
    new Date().getTime() + 20 * 60 * 1000;
  // ! Cette partie de calcul doit être identique à celle plus bas

  // Mettre à jour le compte à rebours toutes les secondes
  interval = setInterval(function () {
    // Obtenir la date et l'heure actuelles
    let now = new Date().getTime();

    // Calculer la différence entre la date de fin et la date actuelle
    let distance = countDownDate - now;

    // Si le compte à rebours est terminé, afficher le modal et arrêter le compte à rebours
    if (distance < 0) {
      clearInterval(interval);
      showModal();
    }
  }, 1000);
}

function showModal() {
  // Afficher le modal
  document.getElementById("modal").style.display = "block";

  // Ajouter un écouteur d'événement au bouton de fermeture
  document
    .querySelector(".close-button")
    .addEventListener("click", function () {
      // Fermer le modal
      document.getElementById("modal").style.display = "none";
      // Enregistrer une nouvelle date de fin dans le stockage local (dans 20 minutes à partir de maintenant)
      countDownDate = new Date().getTime() + 20 * 60 * 1000;
      // ! Cette partie de calcul doit être identique à celle plus haut
      localStorage.setItem("countDownDate", countDownDate);
      // Redémarrer le compte à rebours
      startCountdown();
    });
}

// Démarrer le compte à rebours
startCountdown();
```
