import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const selectorEl = document.getElementById("datetime-picker");
const btnStartEl = document.querySelector("[data-start]");
const timer = document.querySelector(".timer");

const dataDays = timer.querySelector("[data-days]");
const dataHours = timer.querySelector("[data-hours]");
const dataMinutes = timer.querySelector("[data-minutes]");
const dataSeconds = timer.querySelector("[data-seconds]");

let clickStart = false;
let timerID = null;
btnStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      return alert("Please choose a date in the future");
    }
    btnStartEl.disabled = false;
    clickStart = true;

    btnStartEl.addEventListener("click", () => {
      function timer() {
        let countTime = selectedDates[0] - Date.now();
        if (countTime < 1000) {
          clearInterval(timerID);
          }
        convertMs(countTime);
      }
      timerID = setInterval(timer, 1000);
    })
  }
}

flatpickr(selectorEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  dataDays.textContent = days.toString().padStart(2, "0");
  dataHours.textContent = hours.toString().padStart(2, "0");
  dataMinutes.textContent = minutes.toString().padStart(2, "0");
  dataSeconds.textContent = seconds.toString().padStart(2, "0");
}



