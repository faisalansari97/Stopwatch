"use strict"

var time = 0;
var i = 0;
var isRunning = false;
var lap = "00:00:00.00";

// used for synchronization of current time
var d = new Date();
const ml = d.getMilliseconds();
const s = d.getSeconds() * 1000; //convert milliseconds
const m = d.getMinutes() * 60 * 1000; //convert milliseconds
const h = d.getHours() * 60 * 60 * 1000; //convert milliseconds



//to start or stop
function start() {
    // capture startTime and save it to log
    var start = document.getElementById("Start").innerHTML;
    if(start === "Start"){
    var startTime = document.getElementById("timer").innerHTML;
    document.getElementById("startTime").innerHTML += startTime + "</br>";
    }
    //if clock is stop i.e when start 
    if (!isRunning) {
        isRunning = true;
        increment();
        document.getElementById("Start").innerText = "Resume"; 
    } 
}

function stop(){
    if(isRunning){
        isRunning = false;   
    }
    
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
                 
                lap = hours + ":" + mins + ":" + secs + "." + milli;
                document.getElementById("timer").innerHTML = lap;
                increment();
            }, 100)

    }
}

//to set things to 00:00:00:00    
function reset() {
    if(isRunning){
    //isRunning = true;
    var stopTime = document.getElementById("timer").innerText;
    document.getElementById("stopTime").innerHTML += stopTime + "</br>";
    }
    isRunning = false; 
    time = -1;
    i = 0;
    document.getElementById("timer").innerHTML = "00:00:00.00";
    document.getElementById("Start").innerText = "Start";
    document.getElementById("lap-times").innerHTML = null; 
   
}

function noteLap() {
    if(isRunning){
        i++;
        let output = "Lap " + i + " on : " + lap;
        console.log(lap);
        document.getElementById("lap-times").innerHTML += output + "</br>";
    }
    else{
        alert("Run timer and try again!");
    }

}

function logs(){
    var display = document.getElementById("history").hidden;
    if(display === true){
        document.getElementById("history").hidden = false;
    }
   else{
        document.getElementById("history").hidden = true;
    }

}

function timeDiff(){
    
     
}
timeDiff();
