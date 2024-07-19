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

            // document.getElementById("div-id").innerHTML = "" 


            var WindowObj = ['alert()', "prompt()", 'confirm()', "open()", "print()", "XHttpRequest", "fetch"]
            if (li.innerHTML === "Window Object") {

                WindowObj.map(item => {

                    div.classList = "m-3";

                    let btn = document.createElement("button");
                    btn.setAttribute("id", "btn-id")
                    btn.classList = "btn btn-warning my-2 mx-3 w-25";
                    btn.innerHTML = item + "<br>";
                    div_1.appendChild(btn);
                    document.getElementById("box-id").appendChild(div_1);
                    let value = document.getElementById("btn-id");
                    value.addEventListener("click", () => {
                        if (value.innerHTML = "alert()<br>") {
                            alert("alert() clicked")
                        }
                        else if (value.innerHTML = "prompt()<br>") {
                            prompt("prompt() clicked")
                        }
                    })
                })
            }
        })

        li.innerHTML = array[i];

        ul.appendChild(li);
        div.appendChild(ul);
        box.appendChild(div);
    }
}
