let Inputvalue = document.getElementById("UserId");
let InputPsw = document.getElementById("PswId");
document.getElementById("psw-box").style.display = "none";
document.getElementById("btnlogin").style.display = "none";

let Match = /(?=.*[A-Z])\w{6,12}/
function VerifyInput() {

    if (Inputvalue.value.match(Match)) {

        document.getElementById("lblId").innerHTML = "Your Id is valid".fontcolor("green")
        document.getElementById("psw-box").style.display = "block";


    }
    else {
        alert("Please Enter Correct UnserName")
        document.getElementById("lblId").innerHTML = "Your Id is not valid".fontcolor("red")
        document.getElementById("psw-box").style.display = "none";

    }
}
function VerifyPsw() {
    if (InputPsw.value.match(Match)) {
        document.getElementById("lblPsw").innerHTML = "Your Password is valid".fontcolor("green")
        document.getElementById("btnlogin").style.display = "block";
    }
    else {
        alert("Please Enter Correct Password")
        document.getElementById("lblPsw").innerHTML = "Your Password is not valid".fontcolor("red");
        document.getElementById("btnlogin").style.display = "none";


    }

}