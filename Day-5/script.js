// function ChangeStyle() {
//     var btn = document.querySelector("button")
//     console.log(btn)
//     if (btn.innerHTML == "Change Style") {
//         document.querySelector("p").innerHTML = "I am Added";
//         document.querySelector("p").className = "text-style";
//         document.getElementById("btn-style").innerHTML = "btn changed"
//         document.getElementById("btn-style").className = "btn btn-danger m-3"

//     }
//     else {
//         document.querySelector("p").innerHTML = "";
//         document.getElementById("btn-style").innerHTML = "Change Style"
//     }

// }

function DarkTheme() {
    var btn = document.querySelector("label").innerHTML;
    var card = document.getElementById("cardBox")

    if (btn == "Light") {

        document.querySelector("label").className = " bi bi-moon";
        document.querySelector("label").innerHTML = "Dark";

        card.className = " card bg-dark text-light p-2";

        document.querySelector("button").className = "btn btn-danger mt-4 w-100";


    }
    else{
        document.querySelector("label").className = " bi bi-sun";
        document.querySelector("label").innerHTML = "Light";

        card.className = " card bg-light text-dark p-2";

        document.querySelector("button").className = "btn btn-dark mt-4 w-100";

    }

}


// let pattern = `\+/91/d{10\}\`

function ValidBox(){
    var TextInput = document.getElementById("NameBox").value;
    console.log(TextInput)

    if(TextInput.length <= 6){
        document.getElementById("validationText").innerHTML = "Name Is Not Valid".fontcolor("red")
    }
    else if(TextInput.length > 6){
        document.getElementById("validationText").innerHTML = "Name Is Valid".fontcolor("green");

    }
}

function PswValid(){
    var psw = document.getElementById("PSWBox").value;
    console.log(psw)
    if(psw.length < 8){
       document.getElementById("ValidPsw").innerHTML = "Too Week".fontcolor("red") 
    }
    else if(psw.length > 8 && psw.length < 14){
        document.getElementById("ValidPsw").innerHTML = "Strong".fontcolor("blue")
    }
    else if(psw.length > 14){
        document.getElementById("ValidPsw").innerHTML = "Very Strong".fontcolor("green")
 
    }
}
