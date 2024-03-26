const musicControlsBtn = document.querySelector(".musicControls-btn");
musicControlsBtn.addEventListener("click", function(){

     if (musicControlsBtn.classList.contains("menuBtnClicked")) {
          musicControls.style.display="none";
          musicControlsBtn.classList.remove("menuBtnClicked");
     }
     else{
          musicControls.style.display="inline";
          musicControlsBtn.classList.add("menuBtnClicked");
     }
     
});

const backgroundSelectBtn = document.querySelector(".background-btn");
backgroundSelectBtn.addEventListener("click", function(){
     if (backgroundSelectBtn.classList.contains("menuBtnClicked")) {
          backgroundSelect.style.display="none";
          backgroundSelectBtn.classList.remove("menuBtnClicked");
     }
     else{
          backgroundSelect.style.display="flex";
          backgroundSelectBtn.classList.add("menuBtnClicked");
     }
});

const backgroundSelect = document.querySelector(".backgroundSelect");

const musicControls = document.querySelector(".musicControls");
let offsetX, offsetY, isDragging = false;

musicControls.addEventListener('mousedown', function(event) {
     //isDragging = true;
     offsetX = event.clientX - musicControls.getBoundingClientRect().left;
     offsetY = event.clientY - musicControls.getBoundingClientRect().top;
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

const musicMenu = document.querySelector(".musicMenu");

const soundMenu = document.querySelector(".soundMenu");