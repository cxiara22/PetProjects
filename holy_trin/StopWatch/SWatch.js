/*
1. on click, let start button cause the timer to run (min:sec:milisec)
2. start button should change to stop button in red 
3. lapse button should add an additional p element below to record the timings
4. clear button should reset the timer to 00:00:00 again
*/

let isRunning = false; 
const ctrlBtn = document.getElementById("ctrlbtn"); 
const display = document.getElementById("DisplayTime"); 
const lapseTimes = document.getElementById("lapseTimes"); 
let startTime; 
let elapsedTime = 0; 
let timer; 

function Ctrl(){
    // if timer is not started -> start timer, change start to stop btn 
    if (!isRunning){
        // start stopwatch
        startTime = Date.now() - elapsedTime; 
        isRunning = true; 
        ctrlBtn.style.backgroundColor = "#dc3545"; 
        ctrlBtn.innerText = `Stop`; 
        timer = setInterval(updateClock, 50); 
    }
    else {
        // resume timer
        clearInterval(timer); 
        isRunning = false; 
        ctrlBtn.style.backgroundColor = "#198754"; 
        ctrlBtn.innerText = `Resume`; 
    } 
}

function updateClock(){
    // keep updating stopwatch with current time 
    var currTime = Date.now(); 
    elapsedTime = currTime - startTime; 
    let msec = Math.floor((elapsedTime%1000)/10); 
    let sec = Math.floor((elapsedTime/1000)%60); 
    let min = Math.floor((elapsedTime/(1000*60))%60); 
    let hr = Math.floor((elapsedTime/(1000*60*60))%60); 

    msec = String(msec).padStart(2, "0"); 
    sec = String(sec).padStart(2, "0"); 
    min = String(min).padStart(2, "0"); 
    hr = String(hr).padStart(2, "0"); 

    var DispTime = `${hr}:${min}:${sec}:${msec}`;

    display.innerText = DispTime; 
}

function Lapse(){
    // add a new p element to the times recorded below using the current time
    const newTime = document.createElement('p'); 
    newTime.textContent = display.innerText; 
    lapseTimes.appendChild(newTime); 
}

function Clear(){
    location.reload(); 
}

