document.getElementById("ImageId").style.display = "none";


function ClickMe(){
    var product = {}
    var http = new XMLHttpRequest();
     http.open("get", "./data.json" , true);
     http.send();
     http.onreadystatechange = function(){
       
        if(http.readyState == 4){
            product = JSON.parse(http.responseText);
        }
     }
}