const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 11500;
const breathTimeIn = 3000;
const holdTime = 3500;
const breathTimeOut = 5000;

breathAnimation();

function breathAnimation() {
    text.innerText = 'ដង្ហើមចូល';
    container.className = 'container grow';

    setTimeout(()=>{
        text.innerText = 'ទប់ដង្ហើម';

        setTimeout(()=> {
            text.innerText = 'ដង្ហើមចេញ';
            container.className = 'container shrink';

            setTimeout(()=>{

            }, breathTimeOut)
        }, holdTime);
    }, breathTimeIn);
}

setInterval(breathAnimation, totalTime);

document.addEventListener("click", play);
var audio = document.getElementById("audio");
var isPlaying = false;

function play() {
    audio.volume = 0.2;
    isPlaying ? audio.pause() : audio.play();
  };
  
  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  };