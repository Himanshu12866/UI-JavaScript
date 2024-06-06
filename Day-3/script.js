function ChangeAmount(){
 document.getElementById("rangeAmount").value =  document.getElementById("txtAmount").value
 

}
function ChangerangeAmount(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value
}

function ChangeDuration(){
    document.getElementById("rangeDuration").value =  document.getElementById("txtDuration").value

}
function ChangerangeDuration(){
    document.getElementById("txtDuration").value = document.getElementById("rangeDuration").value;
}
function ChangeInterest(){
    document.getElementById("rangeInterest").value = document.getElementById("txtInterest").value;
}
function ChangerangeInterest(){
    document.getElementById("txtInterest").value = document.getElementById("rangeInterest").value;
}

function CalculateClick(){
    var lblMsg = document.getElementById("lblMsg");

    let P = parseInt(document.getElementById("txtAmount").value);
    document.getElementById("EnteredAmt").innerHTML = P;
    
    let N = parseInt(document.getElementById("txtDuration").value) * 12;
    document.getElementById("EnteredDrn").innerHTML = N;
let Rate = parseFloat(document.getElementById("txtInterest").value)
    let R = parseFloat(document.getElementById("txtInterest").value) / 12 / 100;
    document.getElementById("EnteredRate").innerHTML = Rate;

  
    
    var EMI = Math.floor(P * R * Math.pow((1+R), N) / (Math.pow(1+R, N) - 1));

    lblMsg.innerHTML = EMI; 
    document.getElementById("final").innerHTML = EMI.toLocaleString("en-in",{style:"currency", currency:"INR"})
    
document.getElementById("detail").style.display = "block";
}



