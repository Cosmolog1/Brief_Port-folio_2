// Pour afficher du text en cliquant sur une liste
const nature = document.getElementById("nature");

nature.addEventListener("click", () => {
  const paragraphe = document.querySelector("#paragraphe");

  if (paragraphe) {
    paragraphe.remove();
  } else {
    const paragraphe = document.createElement("p");
    const texte = "lorem ipsum";
    paragraphe.textContent = texte;
    paragraphe.id = "paragraphe";
    nature.appendChild(paragraphe);
  }
});

// Slider

let index = 0;
// Creation de la fonction mouvement pour le silde
function moveSlide(direction) {
  // Recuperation des slides présent dans le html
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  // Parametre les limites de l'index par rapport au slides notament pur revenir a la 1er slide
  index = (index + direction + totalSlides) % totalSlides;
  // Parametres de vitesse du changement de slide
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Mode sombre/clair

const switchThemeBtn = document.querySelector(".changeTheme");
let toogleTheme = 0;

switchThemeBtn.addEventListener("click", () => {
  if (toogleTheme === 0) {
    document.documentElement.style.setProperty("--text", "#262626");
    document.documentElement.style.setProperty("--background", "#f1f1f1");
    toogleTheme++;
  } else {
    document.documentElement.style.setProperty("--text", "#f1f1f1f1");
    document.documentElement.style.setProperty("--background", "#262626");
    toogleTheme--;
  }
});

// Zoom
