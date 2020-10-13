// The  date we wanna countdown to
const blackFriday = "27 nov 2020";

// get the element from the webpage that has the specified id timer value. (Default 0 on the html file)
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");

    // A function for finding how many days, hours, minutes and seconds it is from current time to black friday this year.
    // And display the countdown time till that day.
    function countdownTimer(){
    const blackFridayDate = new Date(blackFriday);
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
setInterval(countdownTimer, 1000);
// Initial call
countdownTimer();