let hour = 0;
let min = 0;
let second = 0;
let totalSeconds = 0;

function myTimer (){
    document.getElementById("stop").removeAttribute("disabled");
    document.getElementById("reset").removeAttribute("disabled");
    totalSeconds++;
    hour = Math.floor(totalSeconds / 3600);
    min = Math.floor(totalSeconds / 60);
    sec = Math.floor(totalSeconds - ((hour * 3600) + (min *60)));

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}

    document.getElementById("start").addEventListener('click', () => {
    intervalId = setInterval(myTimer, 1000);
  })

function setStop(){
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("reset").removeAttribute("disabled");
    clearInterval(intervalId);
}

function setZero(){
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("stop").removeAttribute("disabled");
    clearInterval(intervalId);
    totalSeconds = 0;
    hour = 0;
    min = 0;
    sec = 0;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}

