function Change() {
    var btn = document.querySelector("button");


    if (btn.innerHTML == "Dark") {
        btn.innerHTML = "Light";
        document.getElementById("spanbtn").className = "bi bi-moon text-light"
        document.getElementById("BodyColor").style.backgroundColor = "black"
        document.getElementById("Heading").style.color = "white";
        document.getElementById("Heading-1").style.color = "white";
        document.getElementById("labelId").className = "text-light my-2"
        document.getElementById("labelId-1").className = "text-light my-2"
        document.getElementById("labelId-2").className = "text-light my-2"
        document.getElementById("labelId-3").className = "text-light my-2"
        document.getElementById("mainBox").style.backgroundColor = "#00000094"
        document.getElementById("mainBox").style.border = "2px solid #0ef"
    } else {
        btn.innerHTML = "Dark";
        document.getElementById("spanbtn").className = "bi bi-sun text-dark"
        document.getElementById("BodyColor").style.backgroundColor = "white"
        document.getElementById("Heading").style.color = "black"
        document.getElementById("Heading-1").style.color = "black"
        document.getElementById("labelId").className = "text-dark my-2"
        document.getElementById("labelId-1").className = "text-dark my-2"
        document.getElementById("labelId-2").className = "text-dark my-2"
        document.getElementById("labelId-3").className = "text-dark my-2"
        document.getElementById("mainBox").style.backgroundColor = "white"
        document.getElementById("mainBox").style.border = "1px solid black"



    }
}
function NameInputForm() {
    let InputValue = document.getElementById("NameInput").value;
    let lblValue = document.getElementById("labelId-1");
    // console.log(InputValue)
    if (InputValue.length < 4) {
        lblValue.innerHTML = "Name Is too short".fontcolor("red")
    }
    else if(InputValue.length > 16){
        lblValue.innerHTML = "Name must be less than 16 Charactes".fontcolor("red")
    }
    else{
        lblValue.innerHTML = "Accepted".fontcolor("green")
    }


}
function PasswordInputForm() {
    let PswValue = document.getElementById("PasswordInput").value;
    let Pswlbl = document.getElementById("Pswlbl")
    let pattern = /(?=.*[A-Z])\w{4,15}/
    // console.log(PswValue)
    if(PswValue.match(pattern)){
        Pswlbl.innerHTML = "Srtong Password".fontcolor("green")
    }
    else {
        if(PswValue.length < 6){
            Pswlbl.innerHTML = "Password is too short".fontcolor("red")
        }
        else if(PswValue.length > 16){
            Pswlbl.innerHTML = "Password must be less than 16".fontcolor("red")
        }
    }
}
function Hide(){
    let InputValue = document.getElementById("PasswordInput");
    if(InputValue.type == "password"){
        InputValue.type = "text";
        document.getElementById("visible").className = " bi bi-eye input-group-text"
    }
    else {
        InputValue.type = "password";
        document.getElementById("visible").className = " bi bi-eye-slash input-group-text"
    }
}
