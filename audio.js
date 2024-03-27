const softRain = document.querySelector("#softRainAudio");
const softRainVolume = document.getElementById("softRainVolume");

softRainVolume.addEventListener("input", function() {
     softRain.play();
     softRain.volume = softRainVolume.value;
     if (softRainVolume==0) {
          softRain.pause();
     }
});

const flowingRiver = document.querySelector("#flowingRiverAudio");
const flowingRiverVolume = document.querySelector("#flowingRiverVolume");

flowingRiverVolume.addEventListener("input", function() {
     flowingRiver.play();
     flowingRiver.volume = flowingRiverVolume.value;
     if (flowingRiverVolume==0) {
          flowingRiver.pause();
     }
});

const birds = document.querySelector("#birdsAudio");
const birdsVolume = document.querySelector("#birdsVolume");

birdsVolume.addEventListener("input", function() {
     birds.play();
     birds.volume = birdsVolume.value;
     if (birdsVolume==0) {
          birds.pause();
     }
});

const whiteNoise = document.querySelector("#whiteNoiseAudio");
const whiteNoiseVolume = document.querySelector("#whiteNoiseVolume");

whiteNoiseVolume.addEventListener("input", function() {
     whiteNoise.play();
     whiteNoise.volume = whiteNoiseVolume.value;
     if (whiteNoiseVolume==0) {
          whiteNoise.pause();
     }
});