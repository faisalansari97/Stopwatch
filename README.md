# Stopwatch

This is an simple Stopwatch consisting of 5 Buttons.

1) Start: calls the start function and the timer gets start.
2) Stop: This will call Stop function consisting of isRunning variable that becomes false and the timer gets stop.
3) Lap: This will call noteLap function and it will only work if the timer is On. If timer is off or stop than its will display an alert message to "run timer and try again!"
4) Reset: This will call the reset function and the value of timer gets set to initial value i.e 00:00:00.0 it will also capture the time on which the reset button is pressed and will store it in log as StopTime.
5) Log: This will display the logs of the last 10 times of stopwatch.

Log contains the value of the startTime, StopTime and difference.

For calculating the difference first the date object is initiated and the current time from the system when the start button is pressed gets stored in variable and same for stopTime when reset is pressed.

After that the time obtained startTime and StopTime is converted into milliseconds and than the difference is done which returns the value in milliseconds.

Now this difference in milliseconds is again converted to original time format i.e hh:mm:ss:ms
and the difference is displayed in logs.
