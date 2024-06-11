function InputVerify() {
    let inputData = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    let UserInput = document.getElementById("InputData").value;
    let lblInput = document.getElementById("lblInput");



    if (UserInput.match(inputData)) {
        document.getElementById("psw-container").style.display = "block"
        lblInput.innerHTML = "Valid Username".fontcolor("green")
    }
    else {
        lblInput.innerHTML = "Invalid Username".fontcolor("red");
        document.getElementById("psw-container").style.display = "none"

    }

}
function PswVerify() {
    let inputData = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    let UserPsw = document.getElementById("pswData").value;
    let lblPsw = document.getElementById("lblPsw")


    if (UserPsw.match(inputData)) {
        document.getElementById("btnlogin").style.display = "block";
        lblPsw.innerHTML = "Valid Password".fontcolor("green")

    }
    else {
        document.getElementById("btnlogin").style.display = "none";
        lblPsw.innerHTML = "Invalid Password".fontcolor("red")

    }
}
