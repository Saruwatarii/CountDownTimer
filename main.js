const blackFriday = "27 nov 2020";



function countdownTimer(){
    const blackFridayDate = new Date(blackFriday);
    const currentDate = new Date();

    const totalSeconds = (blackFridayDate - currentDate) / 1000;
    // 60 secs * 60 sec = 3600sec = 1h. 3600 sec * 24h = 86400 sec in a day(24h)
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)

    console.log(days, hours, minutes, seconds)

}

setInterval(countdownTimer, 1000);

// Initial call
countdownTimer();