const menuClock = document.querySelector(".menuclock");
const date = new Date();
menuClock.innerHTML = date.getHours() + ":" +  date.getMinutes();