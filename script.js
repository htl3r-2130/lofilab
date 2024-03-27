const musicControlsBtn = document.querySelector(".musicControls-btn");
const backgroundSelectBtn = document.querySelector(".background-btn");
const musicControls = document.querySelector(".musicControls");
const backgroundSelect = document.querySelector(".backgroundSelect");
const timerBtn = document.querySelector(".timer-btn");
const timer = document.querySelector(".timer");

const switchTimer = document.querySelector("#switchTimer");
const switchClock = document.querySelector("#switchClock");
const clock = document.querySelector(".clock");
const timerTab = document.querySelector(".timerTab");

musicControlsBtn.addEventListener("click", function(){
     if (musicControlsBtn.classList.contains("menuBtnClicked")) {
          musicControls.classList.remove("visible");
          musicControlsBtn.classList.remove("menuBtnClicked");
     } else {
          musicControls.classList.add("visible")
          musicControlsBtn.classList.add("menuBtnClicked");
     }
});

timerBtn.addEventListener("click", function(){
     if (timerBtn.classList.contains("menuBtnClicked")) {
          timer.classList.remove("visible");
          timerBtn.classList.remove("menuBtnClicked");
     } else {
          timer.classList.add("visible")
          timerBtn.classList.add("menuBtnClicked");
     }
});

backgroundSelectBtn.addEventListener("click", function(){
     if (backgroundSelectBtn.classList.contains("menuBtnClicked")) {
          backgroundSelect.classList.remove("visible");
          backgroundSelectBtn.classList.remove("menuBtnClicked");
     } else {
          backgroundSelect.classList.add("visible");
          backgroundSelectBtn.classList.add("menuBtnClicked");
     }
});

switchClock.addEventListener("click", function(){
     clock.style.display="flex";
     timerTab.style.display="none";
     switchClock.classList.add("menuBtnClicked");
     switchTimer.classList.remove("menuBtnClicked");
})

switchTimer.addEventListener("click", function(){
     clock.style.display="none";
     timerTab.style.display="flex";
     switchClock.classList.remove("menuBtnClicked");
     switchTimer.classList.add("menuBtnClicked");
})
