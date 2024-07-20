let box = document.getElementById("box");
let array = ["Window Object", "Document Object", "Navigator Object", "Location Objects", "History Objects"];

function LoadObj() {
    box.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div");
        div.setAttribute('id', "box-id")
        let ul = document.createElement("ul");
        ul.style.listStyle = "none"
        let li = document.createElement("button");
        li.style.fontWeight = "bold";

        li.classList = "btn btn-danger m-2 w-25";
        li.style.textAlign = "left";
        let div_1 = document.createElement("div");
        div_1.setAttribute("id", "div-id");
      
        li.addEventListener('click', function (e) {
            var WindowObj = ['alert()', "prompt()", 'confirm()', "open()", "print()", "XHttpRequest", "fetch"];
            var DocumentObj = ["write()" , "innerHTML" , "innerText" , "getElementById()"]
            console.log(e.target.innerText);
            if (e.target.innerText === "Window Object") {
                div_1.innerHTML = ""
                WindowObj.map(item => {
                    div.classList = "m-3";
                    let btn = document.createElement("button");
                    btn.setAttribute("id", "btn-id")
                    btn.classList = "btn btn-warning my-3 mx-2 w-25";
                    btn.innerHTML = item + "<br>";
                    div_1.appendChild(btn);
                    document.getElementById("box-id").appendChild(div_1);
                   
                    btn.addEventListener("click" , LoadFunc)
                    
                })
            }
          else if (e.target.innerText === "Document Object") {
                div_1.innerHTML = ""
                DocumentObj.map(item => {
                    div.classList = "m-3";
                    let btn = document.createElement("button");
                    btn.setAttribute("id", "btn-id")
                    btn.classList = "btn btn-dark my-3 mx-2 w-25";
                    btn.innerHTML = item + "<br>";
                    div_1.appendChild(btn);
                    // document.getElementById("box-id").appendChild(div_1);
                   e.target.insertAdjacentElement("afterend",div_1);
                    btn.addEventListener("click" , LoadFunc)
                    
                })
            }
         elseif(e.target.innerText === "")
        })
        li.innerHTML = array[i];
        ul.appendChild(li);
        div.appendChild(ul);
        box.appendChild(div);
    }
}
function LoadFunc(arguments) {
  if(document.getElementById("btn-id").innerHTML == "alert()<br>"){
    alert("Jia Sri Ram")
  }

console.log( arguments.target.innerText);
  if( arguments.target.innerText == "alert()<br>"){
    let name = prompt("Enter your name")
    alert("Your name is " + name)
  }
  else{
    alert("Unmatched")
  }

}
