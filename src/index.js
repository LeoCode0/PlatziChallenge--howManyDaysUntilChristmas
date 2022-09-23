const months = document.querySelector("#months");
const weeks = document.querySelector("#weeks");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const today = new Date();
const christmasYear = today.getFullYear();

if (today.getMonth() === 11 && today.getDate() > 25) {
  christmasYear += 1;
}

const christmasDate = new Date(christmasYear, 11, 25);
const daysMilliseconds = 1000 * 60 * 60 * 24;

const remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) / daysMilliseconds
);

console.log(remainingDays);

let monthsValue = parseInt(remainingDays / 30);
months.textContent = monthsValue;

let weeksValue = parseInt(remainingDays % 30);
weeksValue = Math.floor(weeksValue / 7);
weeks.textContent = weeksValue;

let daysValue = remainingDays % 30;
days.textContent = daysValue;

let hoursValue = 23;
let minutesValue = 59;
let secondsValue = 59;

hours.textContent = hoursValue;
minutes.textContent = minutesValue;
seconds.textContent = secondsValue;

setInterval(() => {
  if (secondsValue === 0) {
    seconds.textContent = 0;
    alert("Es navida");
  }
  if (secondsValue === 0) {
    secondsValue = 59;
    minutesValue -= 1;
    if (minutesValue === 0) {
      minutesValue = 59;
      hoursValue -= 1;
      if (hoursValue === 0) {
        hoursValue = 23;
        daysValue -= 1;
      }
      hours.textContent = hoursValue;
    }
    minutes.textContent = minutesValue;
  } else {
    secondsValue -= 1;
  }
  seconds.textContent = secondsValue;
}, 1000);
