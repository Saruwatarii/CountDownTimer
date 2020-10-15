
// The  date we wanna countdown to
const blackFridayDatee = "27 nov 2020";
const christmasEveDatee = "24 dec 2020";


// get the element from the webpage that has the specified id timer value. (Default 0 on the html file)
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");

const header = document.querySelector("h1")

// A function for finding how many days, hours, minutes and seconds it is from current time to black friday this year.
// And display the countdown time till that day.
function christmasEveCountdownTimer() {
    const christmasEve = "Christmas Eve";
    const christmasEveDate = new Date(christmasEveDatee);
    const currentDate = new Date();
    // date time is shown in milliseconds, divide by 1000 to get the seconds
    const totalSeconds = (christmasEveDate - currentDate) / 1000;
    // 60 secs * 60 sec = 3600sec = 1h. 3600 sec * 24h = 86400 sec in a day(24h)
    // Using Math.floor() for showing whole numbers
    const days = Math.floor(totalSeconds / 86400);
    // Use remainder of 24, as we want to know the remaining hours left of the day
    const hours = Math.floor(totalSeconds / 3600) % 24;
    // The same as hours, but here we want to get the minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // Same approach as minutes with getting the remaining seconds
    const seconds = Math.floor(totalSeconds % 60)

    header.innerHTML = christmasEve;

    //Attach the time to the webpage
    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeFormat(hours);
    minutesEl.innerHTML = timeFormat(minutes);
    secondsEl.innerHTML = timeFormat(seconds);

}
// A function for finding how many days, hours, minutes and seconds it is from current time to black friday this year.
// And display the countdown time till that day.
function blackFridayCountdownTimer(){
    const blackFriday = "Black Friday";
    const blackFridayDate = new Date(blackFridayDatee);
    const currentDate = new Date();
    // date time is shown in milliseconds, divide by 1000 to get the seconds
    const totalSeconds = (blackFridayDate - currentDate) / 1000;
    // 60 secs * 60 sec = 3600sec = 1h. 3600 sec * 24h = 86400 sec in a day(24h)
    // Using Math.floor() for showing whole numbers
    const days = Math.floor(totalSeconds / 86400);
    // Use remainder of 24, as we want to know the remaining hours left of the day
    const hours = Math.floor(totalSeconds / 3600) % 24;
    // The same as hours, but here we want to get the minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // Same approach as minutes with getting the remaining seconds
    const seconds = Math.floor(totalSeconds % 60)

    header.innerHTML = blackFriday;

    //Attach the time to the webpage
    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeFormat(hours);
    minutesEl.innerHTML = timeFormat(minutes);
    secondsEl.innerHTML = timeFormat(seconds);
}   
// Display the 0 when the time gets below 10. e.g 09-01.
function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}
// Setting an interval for the timer on the webpage. As it is counting in milliseconds, 1 sec = 1000ms

// Initial call
/*
function countdownChanger() {
let bkImage = document.querySelector('img');
bkImage.onclick = function () {
    let imageSrc = bkImage.getAttribute("src");
    if(imageSrc === "img/xmas.jpg") {
        bkImage.setAttribute("src","img/sale.jpg");
        blackFridayCountdownTimer();
        let  handlebFriday = setInterval(blackFridayCountdownTimer, 1000);
        let  handleXmass = setInterval(christmasEveCountdownTimer, 1000);
        setTimeout(handleXmass)
    } else {
        bkImage.setAttribute("src","img/xmas.jpg");
        christmasEveCountdownTimer();
        let  handlebFriday = setInterval(blackFridayCountdownTimer, 1000);
        let  handleXmass = setInterval(christmasEveCountdownTimer, 1000);
        setTimeout(handlebFriday)
    }
}
}
*/

let x =  setInterval(blackFridayCountdownTimer, 1000);
let y =  setInterval(christmasEveCountdownTimer, 1000);

var mysrc = "img/sale.jpg";
function changeImage() {

    if (mysrc === "img/sale.jpg") {
        document.images["pic"].src = "img/sale.jpg";
        document.images["pic"].alt = "Sale written on the window";
        mysrc = "img/xmas.jpg";
        clearInterval(y);
        
        blackFridayCountdownTimer();
    } else {
        document.images["pic"].src = "img/xmas.jpg";
        document.images["pic"].alt = "Christmas ornament on floor";
        mysrc = "img/sale.jpg";
        clearInterval(x);
        christmasEveCountdownTimer();
    }
}

changeImage();
