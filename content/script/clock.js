function homeTime(){
    const date = new Date();

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const w = week[date.getDay()];

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];

    const d = date.getDate();
    const y = date.getFullYear();

    const time = date.toTimeString().slice(0,8) + " - " + w + ", " + month + " " + d + ", " + y;
    const clockElement = document.getElementById("ClockWidget");

    if (clockElement) {
        clockElement.textContent = time;
    }

    setTimeout(homeTime, 1000);
}

homeTime();
