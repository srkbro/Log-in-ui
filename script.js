const dateInput = document.getElementById("date-input");
const calculateBtn = document.getElementById("calculateBtn");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

function calculateAge(dob){

let today = new Date();
let birth = new Date(dob);

let y = today.getFullYear() - birth.getFullYear();
let m = today.getMonth() - birth.getMonth();
let d = today.getDate() - birth.getDate();

if(d < 0){
m--;
d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}

if(m < 0){
y--;
m += 12;
}

animateNumber(years,y);
animateNumber(months,m);
animateNumber(days,d);

}

function animateNumber(element,value){

let start = 0;

let interval = setInterval(()=>{

element.innerText = start;

if(start >= value){
clearInterval(interval)
}

start++;

},20)

}

calculateBtn.addEventListener("click",()=>{

let dob = dateInput.value;

if(!dob){
alert("Please select a date");
return;
}

calculateAge(dob);

});
