// Set the date and time for the countdown
var countdownDate = new Date('2024-01-28T11:30:40').getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(updateCountdown, 1000);

// for refreshing timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;
    if (timeRemaining <= 0) {
        document.getElementById('countdown').innerHTML = 'its my birthday!';
        countdownDate = getNextYearDate();//call function for get new year
        clearInterval(countdownInterval);// stop counter
        change(true)// sleep counter
    } else {
        change(false);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        // for insert time in div tag
        document.getElementById('countdown').innerHTML =
            `Months: ${Math.floor(days / 30)}<br>
            Weeks: ${Math.floor(days / 7)}<br>
            Days: ${days}<br>
            Hours: ${hours}<br>
            Minutes: ${minutes}<br>
            Seconds: ${seconds}`;
    }
}

// for get new year 
function getNextYearDate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let nextYear = currentYear + 1;
    const countdownDate = new Date(`${nextYear}-01-28T11:00:00`).getTime();
    return countdownDate;
}
// for sleep timer for 12h after timerexpired
function change(state) {
    if (state == true) {
        window.alert("hii ");
        countdownInterval = setInterval(updateCountdown, (12 * 60 * 60 * 1000)); // for set new counter Interval
    }
    else {
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}