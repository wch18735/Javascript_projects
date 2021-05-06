const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

// If you want to keep this application always working
// let tmpDate = new Date();
// let tmpYear = tmpDate.getFullYear();
// let tmpMonth = tmpDate.getMonth();
// let tmpDay = tmpDate.getDate();
// const futureDate = new Date(tmpYear, tmpMonth, tmpDay + 10, 11, 30, 0);

// If you want to exact this application with 10 sec left
let tmpDate = new Date();
let tmpYear = tmpDate.getFullYear();
let tmpMonth = tmpDate.getMonth();
let tmpDay = tmpDate.getDate();
let tmpHour = tmpDate.getHours();
let tmpMin = tmpDate.getMinutes();
let tmpSec = tmpDate.getSeconds();
let futureDate = new Date(tmpYear, tmpMonth, tmpDay, tmpHour, tmpMin, tmpSec + 10);

// months are zero index base
// let futureDate = new Date(2021, 4, 10, 13, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const days = futureDate.getDate();
const mins = futureDate.getMinutes();
let hours = futureDate.getHours();
let ampm = 'am'

if(hours == 0){
  hours = 12;
} else if (hours == 12)
{
  ampm = 'pm';
} else if (hours > 12)
{
  hours -= 12;
  ampm = 'pm';
}

giveaway.textContent = `giveaway ends on ${day}, ${days} ${month} ${year}, ${hours}:${mins}${ampm}`;

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function formatting(item){
  if(item < 10){
    return (item = `0${item}`);
  } return item;
}

function getRemainingTime(){
  const today = new Date().getTime();
  let total_diff = futureTime - today;

  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1day = 24hr

  if(total_diff < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }

  const oneDay = 24*60*60*1000; // milliseconds in one day 
  const oneHour = 60*60*1000;   // milliseconds in one hour
  const oneMin = 60*1000;       // milliseconds in one minute
  const oneSec = 1000;          // milliseconds in one second

  let days = Math.floor(total_diff / oneDay);
  total_diff %= oneDay;
  let hours = Math.floor(total_diff / oneHour);
  total_diff %= oneHour;
  let mins = Math.floor(total_diff / oneMin);
  total_diff %= oneMin;
  let secs = Math.floor(total_diff / oneSec);

  items.forEach(function(elem){
    if(elem.classList.contains('days')){
      elem.textContent = formatting(days);
    } else if(elem.classList.contains('hours')){
      elem.textContent = formatting(hours);
    } else if(elem.classList.contains('mins')){
      elem.textContent = formatting(mins);
    } else if(elem.classList.contains('secs')){
      elem.textContent = formatting(secs);
    }
  });
};

// to access in getRemainning function, make it global
let countdown = setInterval(getRemainingTime, 1000);