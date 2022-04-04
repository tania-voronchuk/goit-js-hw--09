const btnStartEl = document.querySelector("button[data-start]");
const btnStopEl = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

function colorChange() {
  body.style.backgroundColor = getRandomHexColor();
}

btnStartEl.addEventListener("click", (changeBackgroundColor) => {
  if (changeBackgroundColor) {
    btnStartEl.disabled = "true";
    btnStopEl.disabled = "";
  }
  intervalId = setInterval(colorChange, 1000)
});

btnStopEl.addEventListener("click", (stopChangeColor) => {
  if (stopChangeColor) {
    btnStopEl.disabled = "true";
    btnStartEl.disabled = "";
  }
  clearInterval(intervalId);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  