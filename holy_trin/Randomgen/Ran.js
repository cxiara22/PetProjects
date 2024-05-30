
const RollBtn = document.getElementById("RollBtn"); 
const ran1 = document.getElementById("ran-1"); 
const ran2 = document.getElementById("ran-2"); 
const ran3 = document.getElementById("ran-3"); 
let clickCount = 0; 

console.log(clickCount); 

function gennum (minimum, maximum) {
    return Math.floor((Math.random() * maximum-minimum) + minimum); 
}

RollBtn.onclick = function() {
    let min = parseInt(document.getElementById("minnum").value); 
    let max = parseInt(document.getElementById("maxnum").value); 
    if (clickCount == 0) {
        ran1.textContent = gennum(min, max); 
    }
    else if (clickCount == 1) {
        ran2.textContent = gennum(min, max); 
    } else if (clickCount == 2) { 
        ran3.textContent = gennum(min, max); 
    } 
    clickCount ++; 
}; 

