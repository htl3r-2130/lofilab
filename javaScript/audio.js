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
const firePlace = document.querySelector("#firePlaceAudio");
const firePlaceVolume = document.querySelector("#firePlaceVolume");

firePlaceVolume.addEventListener("input", function() {
     firePlace.play();
     firePlace.volume = firePlaceVolume.value;
     if (firePlaceVolume==0) {
          firePlace.pause();
     }
});

const traffic = document.querySelector("#trafficAudio");
const trafficVolume = document.querySelector("#trafficVolume");

trafficVolume.addEventListener("input", function() {
     traffic.play();
     traffic.volume = trafficVolume.value;
     if (trafficVolume==0) {
          traffic.pause();
     }
});

const underwater = document.querySelector("#underwaterAudio");
const underwaterVolume = document.querySelector("#underwaterVolume");

underwaterVolume.addEventListener("input", function() {
     underwater.play();
     underwater.volume = underwaterVolume.value;
     if (underwaterVolume==0) {
          underwater.pause();
     }
});
const keyboard = document.querySelector("#keyboardAudio");
const keyboardVolume = document.querySelector("#keyboardVolume");

keyboardVolume.addEventListener("input", function() {
     keyboard.play();
     keyboard.volume = keyboardVolume.value;
     if (keyboardVolume==0) {
          keyboard.pause();
     }
});