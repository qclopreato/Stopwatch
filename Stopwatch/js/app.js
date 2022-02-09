let min = 0;
let sec = 0;
let frac = 00;
let stopAll = 0;

function myTimer(){
    if (stopAll === 0){
    document.getElementById("fractionSeconds").innerHTML = frac;
    frac++;
    setTimeout(myTimer, 10);
    if (frac === 100){
        sec++;
        document.getElementById("seconds").innerHTML = sec ;
        console.log(sec);
        frac = 0;
        if (sec === 60){
            min++;
            document.getElementById("minutes").innerHTML = min ;
            sec = 0;
        }
    }
    }
    if (stopAll === 1){
        document.getElementById("fractionSeconds").innerHTML = frac;
        document.getElementById("seconds").innerHTML = sec ;
        document.getElementById("minutes").innerHTML = min ;
        frac = 0;
        sec = 0;
        min = 0;
        stopAll = 2;
    }
    if (stopAll === 2){
        stopAll = 0;
        return;
    }
}

function setZero(){
    frac = 0;
    sec = 0;
    min = 0;
    stopAll = 1;
    return;
}


