
const Decbtn = document.getElementById("dec-btn"); 
const Resbtn = document.getElementById("res-btn"); 
const Incbtn = document.getElementById("inc-btn"); 
const countlabel = document.getElementById("countlabel"); 

let count = 0; 

function changelabel (counted){ 
    countlabel.innerText = counted; 
} 

// embedding one function within another 
Incbtn.onclick = function () {
    changelabel(count++); 
}

// using arrow functions for even more concise, one-liner functions 
Decbtn.onclick = () => changelabel((count--)); 

// there is a need to run a function onclick, because if we were to just use the '=' sign, 
// what happens is that you are passing in an undefined value since the function changelabel does not give anyth
Resbtn.onclick = function(){
    count = 0; 
    changelabel (count); 
}

