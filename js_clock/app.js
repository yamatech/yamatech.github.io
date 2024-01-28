'use strict';

function padNumber(num) {
  return num < 10 ? `0${num}` : num;
}

function updateClock() {
  const clockEl = document.querySelector('.clock');
  const secondsEl = document.querySelector('.sec');
  const todayEl = document.querySelector('.today');

  const date = new Date();
  const hour = date.getHours();
  const minutes = padNumber(date.getMinutes());
  const seconds = padNumber(date.getSeconds());

  clockEl.textContent = `${hour}:${minutes}`;
  secondsEl.textContent = `:${seconds}`;
  todayEl.textContent = date.toDateString();
}

setInterval(updateClock, 1000);

// Change stylesheet
const changeCSS = document.getElementById('changeCSS');

changeCSS.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  const isLightMode = document.body.classList.contains('light-mode');
  changeCSS.src = isLightMode ? "src/icon1.svg" : "src/icon2.svg";
});
