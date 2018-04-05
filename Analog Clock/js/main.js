
window.onload = function() {
    this.setInterval(setDate, 1000)
}

function setDate() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    var sec = document.querySelector(".sec-hand")
    var min = document.querySelector(".min-hand")
    var hour = document.querySelector(".hour-hand")
    
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    sec.style.transform = `rotate(${secondsDegrees}deg)`;
    min.style.transform = `rotate(${minutesDegrees}deg)`;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}