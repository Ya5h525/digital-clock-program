function clockrun(){
    const now = new Date();
    let hour = now.getHours();
    const AmPm = hour >= 12 ? "AM":"PM";
    hour = hour %2 || 12 ;
    hour =hour.toString().padEnd(2,0);
    const min = now.getMinutes().toString().padEnd(2,0);
    const sec =now.getSeconds().toString().padEnd(2,0);
    document.getElementById("clock").textContent =`${hour}:${min}:${sec} ${AmPm}`

}

clockrun();
setInterval(clockrun,1000);