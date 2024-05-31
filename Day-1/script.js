// Using Input Form 


function Click(){
     var data1 = document.getElementById("txtInput").value;
    document.querySelector("p").innerHTML += " You inputted : " +  data1 + "<br>";
    document.getElementById("txtInput").value =null;
    
}
  

// Another Example Of prompt 

function ClickBtn(){
    var data = prompt("What is your name?");

    if(data == ""){
        alert("Empty String is not allowed");
    }
    else if(data == null){
        alert("Null value is not allowed")
    }
    else{
    document.querySelector("h5").innerHTML += " Your Details " + data +  " <br>";
    }

}

// Another Example of Input techniques 

function ONclick(){
    document.querySelector("h2").innerHTML = "New Folder : " + location.search.slice(2);
}
