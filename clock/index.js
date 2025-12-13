function updateclock(){
    const now = new Date()
    let hours = now.getHours();
    const merdian = hours > 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    hours= hours.toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    const timestring =  `${hours}:${min}:${sec} ${merdian}`;
    document.getElementById("clockcontent").textContent = timestring;
}

updateclock();
setInterval(updateclock, 1000);
