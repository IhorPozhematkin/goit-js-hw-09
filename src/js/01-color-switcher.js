const startClick = document.querySelector('[data-start]');
const stopClick = document.querySelector('[data-stop]');
let changeColor;
stopClick.disabled = true;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
startClick.addEventListener('click', onClickStart);
stopClick.addEventListener('click', onClickStop);
function onClickStart(e) {
    e.preventDefault();
    stopClick.disabled = false;
    startClick.disabled = true;
    changeColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
}
function onClickStop (e) {
    clearInterval(changeColor);
    startClick.disabled = false;
    stopClick.disabled = true;
}