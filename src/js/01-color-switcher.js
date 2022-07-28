function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
const { bodyEl, btnStart, btnStop } = refs;

btnStart.addEventListener('click', onStartGenerateColor);
btnStop.addEventListener('click', onStopGenerateColor);

let timerId = null;
btnStop.setAttribute('disabled', 'disabled');

function onStartGenerateColor() {
  btnStart.setAttribute('disabled', 'disabled');
  btnStop.removeAttribute('disabled');

  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopGenerateColor() {
  clearInterval(timerId);

  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', 'disabled');
}
