


function ClickMe(){
    var product = {}
    var http = new XMLHttpRequest();
     http.open("get", "./data.json" , true);
     http.send();
     http.onreadystatechange = function(){
       
        if(http.readyState == 4){
            product = JSON.parse(http.responseText);
            document.getElementById("ImageId").src = product.image;
            document.getElementById("TitleId").innerHTML = product.title;
            document.getElementById("DescpId").innerHTML = product.description;
        }
     }
}