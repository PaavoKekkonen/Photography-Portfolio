// Valitaan koko näytön kokoinen kuva, joka näytetään kun pienempää kuvaa klikataan sekä 'img'-viewer' divi, joka sisältää koko näytön kokoisen kuvan
const fullScreenImage = document.querySelector("#full-screen-image");
const imgViewer = document.querySelector("#img-viewer");

// Valitaan kaikki pienet kuvat joilla luokka 'img-source'
const images = document.querySelectorAll(".gallery-item-image");

// Koska images on nodelist, se täytyy muuttaa arrayksi, jotta sitä voidaan looppaamaan
const imagesArray = Array.from(images);

// Lisätään jokaiselle kuvalle click eventti, joka kutsuu full_view funktiota
imagesArray.forEach((image) => {
    image.addEventListener("click", function () {
        openFullScreen(this); // this viittaa siihen kuvaan, jota klikattiin
    });
});

function openFullScreen(element) {
    // Tallennettaan kuvan src-atributti muuttujaan
    const src = element.getAttribute('src')

    // Asetetaan pienen kuvan src koko näytön kokoisen kuvan src-atribuutiksi
    fullScreenImage.setAttribute('src', src);

    // Näytetään koko näytön kokoisen kuvan sisältävä divi
    imgViewer.style.display = "block";
};

// Kun koko näytön tilassa nappulaa klikataan, kuva suljetaan
const closeButton = document.querySelector("#close-image-button");

closeButton.addEventListener("click", function () {
    imgViewer.style.display = "none";
});

// kuvan voi sulkea painamalla mistä vain näyttöä
const background = document.querySelector("#img-viewer");

background.addEventListener("click", function () {
    imgViewer.style.display = "none";
});