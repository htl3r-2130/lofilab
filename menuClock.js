function updateClock() {
     const menuClock = document.querySelector(".menuclock");
     const date = new Date();
     menuClock.innerHTML = padZero(date.getHours()) + ":" +  padZero(date.getMinutes());
     setTimeout(updateClock, 60000 - date.getSeconds() * 1000 - date.getMilliseconds());
 }
 
 function padZero(num) {
     return (num < 10 ? '0' : '') + num;
 }
 
 updateClock();