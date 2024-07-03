function LoadClick() {
    document.getElementById("P1").innerHTML = "";

    var rows = parseInt(prompt("Enter Value"));
    var pattern = "";
    if (rows < 100) {
        for (let i = 1; i <= rows; i++) {
            for (let j = i; j <= i; j++) {
                pattern += "* &nbsp";
            }
            document.getElementById("P1").innerHTML += pattern + "<br>";

        }
    }
    else {
        alert("Please Enter value less than 100")
    }
}

