const dateInput = document.getElementById("date-input");
const calculateBtn = document.getElementById("calculateBtn");

const years = document.getElementById("years");
const months = document.getElementById("months");
const weeks = document.getElementById("weeks");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let birthDate;
let timer;

function calculateAge(dob){

birthDate = new Date(dob);

updateAge();

clearInterval(timer);

timer = setInterval(updateAge,1000);

}

function updateAge(){

let now = new Date();

let diff = now - birthDate;

let totalSeconds = Math.floor(diff / 1000);
let totalMinutes = Math.floor(totalSeconds / 60);
let totalHours = Math.floor(totalMinutes / 60);
let totalDays = Math.floor(totalHours / 24);
let totalWeeks = Math.floor(totalDays / 7);

let y = Math.floor(totalDays / 365.25);
let m = Math.floor(totalDays / 30.44);
let d = totalDays;

years.innerText = y;
months.innerText = m;
weeks.innerText = totalWeeks;
days.innerText = d;
hours.innerText = totalHours;
minutes.innerText = totalMinutes;
seconds.innerText = totalSeconds;

}

calculateBtn.addEventListener("click",()=>{

let dob = dateInput.value;

if(!dob){
alert("Please select a date");
return;
}

calculateAge(dob);

});