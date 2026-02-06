const noButton = document.querySelector(".no");
const yesButton = document.querySelector(".yes");
const gif = document.getElementById("random1");
const options = document.querySelector(".option");
const message = document.getElementById("message");
const title = document.querySelector("h1");

/* GIFs */
const gifNormal = "./src/Inicial2.gif";
const gifNo = "./src/no.gif";
const gifYes = "./src/yes.gif";

/* Mover botón NO */
function moveNoButton() {
  const padding = 100;

  const maxX = window.innerWidth - noButton.offsetWidth - padding;
  const maxY = window.innerHeight - noButton.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "fixed";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  gif.src = gifNo;
}

/* EVENTOS DEL NO */
noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("click", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);


/* EVENTO DEL SÍ */
yesButton.addEventListener("click", () => {
  gif.src = gifYes;
  options.style.display = "none";
  title.textContent = "💖"
  message.style.display = "block";
});
