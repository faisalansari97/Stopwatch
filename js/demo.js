"use strict"

var time = 0;
var i = 0;
var isRunning = false;
var lap = "00:00:00:00";


//to start or stop
function start() {
    //if clock is stop i.e when start 
    if (!isRunning) {
        isRunning = true;
        increment();
    }
    else {
        isRunning = false;
    }

}

function pause(){
    isRunning=false;

}

//To increase time by 1 every 10 milliseconds
function increment() {
    if (isRunning) {
        setTimeout(function () {
                time++;
                var t = time / 10;

                //to set time
                var milli = time % 10;
                var secs = Math.floor(t % 60);
                var mins = Math.floor(t / 60);
                var hours = Math.floor(t / 3600);

                //minor changes
                if (mins < 10) { mins = "0" + mins; }
                if (milli < 10) { milli = milli + "0"; }
                if (hours < 10) { hours = "0" + hours; }
                if (secs < 10) { secs = "0" + secs; }

                //output  
                lap = hours + ":" + mins + ":" + secs + ":" + milli;

                document.getElementById("timer").innerHTML = lap;

                increment();
            }, 100)

    }
}

//to set things to 00:00:00:00    
function reset() {
    isRunning = false; 
    time = -1;
    i = 0;
    document.getElementById("timer").innerHTML = "00:00:00:00";
}

function noteLap() {
        i++;
        let output = "Lap " + i + " on : " + lap;
        console.log(output);
        for(let j=0; j<10; j++){
        let li = document.createElement("li");
        li.innerText = output;
        document.getElementById("lap-times").innerHTML = li;
        j++;
}
}

