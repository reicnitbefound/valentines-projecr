const clickText = document.getElementById("clickText");
const gifContainer = document.getElementById("gifContainer");
const ignoreBtn = document.getElementById("ignoreBtn");
const readBtn = document.getElementById("readBtn");
const secretMessage = document.getElementById("secretMessage");
const myGif = document.getElementById("myGif");
const buttonContainer = document.getElementById("buttonContainer");
const closeBtn = document.getElementById("closeBtn");

let ignoreClicks = 0;

clickText.addEventListener("click", function () {
  gifContainer.classList.remove("hidden");
  clickText.style.display = "none";
});

ignoreBtn.addEventListener("click", function () {
  ignoreClicks++;

  let scaleAmount = 1 - ignoreClicks * 0.3;
  ignoreBtn.style.transform = `scale(${scaleAmount})`;

  if (ignoreClicks === 1) {
    readBtn.innerText = "Are you really sure?";
  } 
  else if (ignoreClicks === 2) {
    readBtn.innerText = "Can't change your mind?";
  } 
  else if (ignoreClicks === 3) {
    readBtn.innerText = "Uhm... here's my message hihihi, tap me";
  } 
  else if (ignoreClicks === 3) {
    showMessage();
  }
});

readBtn.addEventListener("click", showMessage);

function showMessage() {
  secretMessage.classList.remove("hidden");
  myGif.style.filter = "blur(6px)";

  buttonContainer.classList.add("fadeOut");
  setTimeout(() => {
    buttonContainer.style.display = "none";
  }, 500);
}

closeBtn.addEventListener("click", function () {
  secretMessage.classList.add("hidden");
  myGif.style.filter = "blur(0)";
});