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
   
    lblMsg.innerHTML = P ; 
    

}

