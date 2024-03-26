const container = document.querySelector(".container");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

img1.addEventListener("click", function(){
     container.style.backgroundImage = "url(resources/pics/pexels-james-wheeler-417074.jpg)";
});

img2.addEventListener("click", function(){
     container.style.backgroundImage = "url(resources/pics/pexels-pixabay-33109.jpg)";
});

img3.addEventListener("click", function(){
     container.style.backgroundImage = "url(resources/pics/pexels-pixabay-50594.jpg)";
});

img4.addEventListener("click", function(){
     container.style.backgroundImage = "url(resources/pics/pexels-veeterzy-39811.jpg)";
});
