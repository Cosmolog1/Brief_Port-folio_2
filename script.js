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
function moveSlide(direction) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  index = (index + direction + totalSlides) % totalSlides;
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
