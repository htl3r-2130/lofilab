function updateClock() {
     const clock = document.querySelector("#clockTime");
     const date = new Date();
     clock.innerHTML = padZero(date.getHours()) + ":" +  padZero(date.getMinutes());
     setTimeout(updateClock, 60000 - date.getSeconds() * 1000 - date.getMilliseconds());
     updateDay();
 }
 function updateDay() {
     const day = document.querySelector("#clockDay");
     const date = new Date();
     const wochentage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
     const wochentagIndex = date.getDay(); 
     const wochentagName = wochentage[wochentagIndex]; 
     day.innerHTML = wochentagName;
 }
 
 
 function padZero(num) {
     return (num < 10 ? '0' : '') + num;
 }
 
 updateClock();
 updateDay()