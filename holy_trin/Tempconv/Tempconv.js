

function convert () {
    const ValuetoConv = Number(document.getElementById("number").value); 
    let CtoF; 
    let NewValue; 

    document.getElementById("toF").checked ? CtoF = true : CtoF = false; 
    if (CtoF){
        NewValue = (ValuetoConv*9/5)+32; 
        document.getElementById("result").textContent = String(NewValue.toFixed(3)) + " °F"; 
    }
    else {
        NewValue = (ValuetoConv-32)*5/9; 
        documsent.getElementById("result").textContent = String(NewValue.toFixed(3)) + " °C"; 
    }
}