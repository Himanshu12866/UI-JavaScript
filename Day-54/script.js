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
      
        li.addEventListener('click', function () {
            var WindowObj = ['alert()', "prompt()", 'confirm()', "open()", "print()", "XHttpRequest", "fetch"];
            var DocumentObj = ["write()" , "innerHTML" , "innerText" , "getElementById()"]
            if (li.innerHTML === "Window Object") {
                div_1.innerHTML = ""
                WindowObj.map(item => {
                    div.classList = "m-3";
                    let btn = document.createElement("button");
                    btn.setAttribute("id", "btn-id")
                    btn.classList = "btn btn-warning my-2 mx-3 w-25";
                    btn.innerHTML = item + "<br>";
                    div_1.appendChild(btn);
                    document.getElementById("box-id").appendChild(div_1);
                   
                    btn.addEventListener("click" , LoadFunc)
                    
                })
            }
          else if (li.innerHTML === "Document Object") {
                div_1.innerHTML = ""
                DocumentObj.map(item => {
                    div.classList = "m-3";
                    let btn = document.createElement("button");
                    btn.setAttribute("id", "btn-id")
                    btn.classList = "btn btn-dark my-2 mx-3 w-25";
                    btn.innerHTML = item + "<br>";
                    div_1.appendChild(btn);
                    document.getElementById("box-id").appendChild(div_1);
                   
                    btn.addEventListener("click" , LoadFunc)
                    
                })
            }
            // else if(li.innerHTML = "Document Objects"){
            //     DocumentObj.map(item => {
            //         let div_2 = document.createElement("div");
            //         div_2.setAttribute("id", "div-id-2");
            //         div.classList = "m-3";
            //         let btn = document.createElement("button");
            //         btn.setAttribute("id", "btn-id")
            //         btn.classList = "btn btn-warning my-2 mx-3 w-25";
            //         btn.innerHTML = item + "<br>";
            //         div_2.appendChild(btn);
            //         document.getElementById("box-id").appendChild(div_2);
                   
            //         btn.addEventListener("click" , LoadFunc)
                    
            //     })
            // }
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
