
//Global Variables
var time = 0;
var i = 0;
var isRunning = false;
var isStop = false;
var lap = "00:00:00.00";
var millisec;
var startTime;
var stopTime;
var onStart;
var onReset;
var difference;

//this will load all the values from Local Storage
document.addEventListener("DOMContentLoaded", getLocalStorageOnLoad());

// used for synchronization of current time
function getCurrentTime(){
var d = new Date();
const ml = d.getMilliseconds();
const s = d.getSeconds() * 1000; //convert milliseconds
const m = d.getMinutes() * 60 * 1000; //convert milliseconds
const h = d.getHours() * 60 * 60 * 1000; //convert milliseconds
millisec = h + m + s + ml;; //total time in milliseconds
return millisec;
}


//to start or stop
function start() {

    //current time status
    getCurrentTime();
    onStart = millisec;
    // console.log(onStart);


    // capture startTime and save it to log
    var start = document.getElementById("Start").innerHTML;
    if(start === "Start"){
    startTime = document.getElementById("timer").innerHTML;
    localStorage.setItem("startTime", startTime);
    var table = document.getElementById("log-display");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = startTime;
    }


    //if clock is stop i.e when start 
    if (!isRunning) {
        isRunning = true;
        increment();
        document.getElementById("Start").innerText = "Resume"; 
    } 
}


// This will stop the watch
function stop(){
        isRunning = false;  
        isStop = true; 
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

                //displaying 0 if value is less than 10
                if (mins < 10) { mins = "0" + mins; }
                if (milli < 10) { milli = milli + "0"; }
                if (hours < 10) { hours = "0" + hours; }
                if (secs < 10) { secs = "0" + secs; }

                //timer 
                lap = hours + ":" + mins + ":" + secs + "." + milli;
                localStorage.setItem("lap", lap);
                document.getElementById("timer").innerHTML = lap;
                increment(); //will call the function recursively and increase the timer
            }, 100)

    }
}

//to set timer to 00:00:00:00    
function reset() {

    getCurrentTime();
    onReset = millisec;

    // console.log(onReset);
    if(isStop){
     isRunning = true;
    }

    //Will store the stopTime to logs and local Storage
    if(isRunning){

    isStop = false;
    isRunning = false;
    var rows = document.getElementById("log-display").rows.length-1;
    stopTime = document.getElementById("timer").innerText;
    var firstRow = document.getElementById("log-display").rows[rows];
    var x = firstRow.insertCell(-1);
    localStorage.setItem("stopTime", stopTime);
    x.innerHTML = stopTime;

    //calculating difference betwween startTime and stopTime
    diff();

    //if value of log exceeds limit of 10 it will delete from row 1
    if(rows > 10) {
        document.getElementById("log-display").deleteRow(1); 
    }
}
    time = -1;
    i = 0;
    document.getElementById("timer").innerHTML = "00:00:00.00";
    document.getElementById("Start").innerText = "Start";
    document.getElementById("lap-times").innerHTML = null; 
}


// captures the lap timings
function noteLap() {
    if(isRunning){
        i++;
        let output = "Lap " + i + " on : " + lap + difference;
        // console.log(lap);
        document.getElementById("timer").innerHTML = lap;
        document.getElementById("lap-times").innerHTML += output + "</br>";
    }
    else{
        alert("Run timer and try again!");
    }

}

// onClick log button displays and hides the log bar
function logs(){
    var display = document.getElementById("history").hidden;
    if(display === true){
        document.getElementById("history").hidden = false;
    }
   else{
        document.getElementById("history").hidden = true;
    }

}

// Finding difference between times
function diff(){
    var difference = parseInt(onReset) - parseInt(onStart);
    // console.log(difference);
    var difference = msToTime(difference);
    var rows = document.getElementById("log-display").rows.length-1;
    var firstRow = document.getElementById("log-display").rows[rows];
    var x = firstRow.insertCell(-1);
    localStorage.setItem("diff", difference);
    x.innerHTML = difference;
}  

// converting milliseconds to time format
function msToTime(duration) {

    // console.log("Start", duration);
    var milliseconds = parseInt((duration % 1000)),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    var duration = hours + ":" + minutes + ":" + seconds + "." + milliseconds + "ms";
    // console.log("End", duration);
    return duration;

  }

 function getLocalStorageOnLoad(){

     if(lap === null){
      lap = lap;
    }

    var lap = localStorage.getItem("lap");
    document.getElementById("timer").innerHTML = lap;
    var difference = localStorage.getItem("diff");
    document.getElementById("diff").innerHTML = difference;
    var startTime = localStorage.getItem("startTime");
    document.getElementById("startTime").innerHTML = startTime;
    var stopTime = localStorage.getItem("stopTime");
    document.getElementById("stopTime").innerHTML = stopTime;
     
 }