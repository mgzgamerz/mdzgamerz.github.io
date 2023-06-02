var timeleft = 120;
var elem = document.getElementById('Timer');

var timerid = setInterval(countdown, 1000);


function countdown () {
if (timeLeft == 0 ) {
cleartimeout(timerId);
doSomething();
}
else {
    elem.innerHTML = timeleft  +  ' seconds remaining';timeLeft--;
}
}