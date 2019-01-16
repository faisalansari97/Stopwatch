//Defining Variables
var time = 0;
var lap = "00:00:00:00";
var isRunning = false;

function timedisplay(){
    time++;
    var t = time/10;

    //setting values of time
    var milli = time % 10;
    var secs = Math.floor(t % 60);
    var min = Math.floor(t/60);
    var hours = Math.floor(t/60);

    //setting display of zeros
    if(mins<10){
        mins = '0' + mins;
    }
    if(milli<10){
        milli = milli + '0';
    }
    if(hours<10){
        hours = '0' + hours;
    }
    if(secs<10){
        secs = '0' + secs;
    }

    //Output
    lap = hours + ":" + mins + ":" + secs + ":" + milli;
}
    


//Starts the timer
function start(){
    if(!isRunning){
        isRunning = true;
        setTimeout(timedisplay(), 100);
    }

}
