let box = document.getElementById("box");
let array = ["Window Object" , "Document Object" , "Navigator Object" , "Location Objects" , "History Objects"];

function LoadObj(){
    box.innerHTML = ""
    for(let i = 0; i<array.length; i++){
        let ul = document.createElement("ul");
ul.style.listStyle = "none"
        let li = document.createElement("li");
        li.style.fontWeight = "bold"
       
        li.innerHTML = (i+1) + " -" + array[i];
        ul.appendChild(li);
        box.appendChild(ul);
    }
}