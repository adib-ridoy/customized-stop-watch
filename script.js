let hours = 0
let minutes = 0
let seconds = 0
let interval = 1000
let increment = 3
let stopAt = 30
let timerId = null
let flag = false
function updateTimer(){

    let sec = seconds < 10 ? "0" + seconds : seconds;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let hour = minutes < 10 ? "0" + hours : hours;
    document.getElementById("stop-watch-timer").innerHTML = `${hour}:${min}:${sec}`;
}


function start(){
    if (flag == false){
        flag = true;
        timerId = setInterval(() => {
            seconds += increment;
            if (seconds == 60){
                seconds = 0;
                minutes += 1;
            }
            if (minutes == 60){
                minutes = 0;
                hours += 1;
            }
            updateTimer();
            if (seconds == stopAt){
                stop();
            }
        }, interval);
        document.getElementById("startButton").disabled = true;
    }
}

function stop(){
    clearInterval(timerId);
    flag = false;
}

function reset(){
    clearInterval(timerId);
    flag = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
}


if (document.location.pathname.endsWith("index.html") || document.location.pathname.endsWith("customize.html") || document.location.pathname.endsWith("/") ){
    updateTimer();
}


if (document.location.pathname.endsWith("customize.html")){
    document.getElementById("timerIntervel").textContent = interval/1000 + " seconds.";
    document.getElementById("timerIncrement").textContent = increment + " seconds.";
    stopAt = 0
    function submitIntervel(){
        let timerInterval = document.getElementById("T-intervel").value;
        console.log(typeof timerInterval);
        if (timerInterval.trim() != ""){
            interval = timerInterval * 1000
            console.log(interval);
            document.getElementById("T-intervel").value="";
            document.getElementById("timerIntervel").textContent = interval/1000 + " seconds.";
        } 
        else{
            alert("Please enter something!");
        }           
    }
    function submitIncrement(){
        let timerIncrement = document.getElementById("T-increment").value;

        if (timerIncrement.trim() != ""){
            increment = Number(timerIncrement)
            console.log(increment)
            document.getElementById("T-increment").value="";
            document.getElementById("timerIncrement").textContent = increment + " seconds.";
        } 
        else{
            alert("Please enter something!");
        }           
    } 
  

}


    



document.getElementById("ModifiedTime").textContent = document.lastModified;


