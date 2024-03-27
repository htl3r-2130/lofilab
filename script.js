const musicControlsBtn = document.querySelector(".musicControls-btn");
const backgroundSelectBtn = document.querySelector(".background-btn");
const musicControls = document.querySelector(".musicControls");
const backgroundSelect = document.querySelector(".backgroundSelect");

musicControlsBtn.addEventListener("click", function(){
     if (musicControlsBtn.classList.contains("menuBtnClicked")) {
          musicControls.classList.remove("visible");
          musicControlsBtn.classList.remove("menuBtnClicked");
     } else {
          musicControls.classList.add("visible")
          musicControlsBtn.classList.add("menuBtnClicked");
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
     console.log(backgroundSelect.className);
});

let offsetX, offsetY, isDragging = false;

musicControls.addEventListener('mousedown', function(event) {
     offsetX = event.clientX - musicControls.getBoundingClientRect().left;
     offsetY = event.clientY - musicControls.getBoundingClientRect().top;
 });
 
 backgroundSelect.addEventListener('mousedown', function(event) {
     offsetX = event.clientX - backgroundSelect.getBoundingClientRect().left;
     offsetY = event.clientY - backgroundSelect.getBoundingClientRect().top;
 });
 
 document.addEventListener('mousemove', function(event) {
      if (isDragging) {
          let x = event.clientX - offsetX;
          let y = event.clientY - offsetY;
  
          const menuHeight = document.querySelector('.menu').offsetHeight;
          const maxY = window.innerHeight - musicControls.offsetHeight - menuHeight - 20;
  
          x = Math.min(Math.max(x, 0), window.innerWidth - musicControls.offsetWidth);
          y = Math.min(Math.max(y, 0), maxY);
  
          musicControls.style.left = x + 'px';
          musicControls.style.top = y + 'px';
      }
  });
  
 
 document.addEventListener('mouseup', function() {
     isDragging = false;
 });
