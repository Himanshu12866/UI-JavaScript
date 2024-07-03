function LoadClick() {
    document.getElementById("P1").innerHTML = "";

    let rows = parseInt(prompt("Enter Value"));
    let pattern = "";
    if (rows < 100) {
        for (let i = 1; i <= rows; i++) {
            for (let j = i; j <= i; j++) {
                pattern += i + " &nbsp";
            }
            document.getElementById("P1").innerHTML += pattern + "<br>";

        }
    }
    else {
        alert("Please Enter value less than 100")
    }
}

function LoadClick1() {
    document.getElementById("P2").innerHTML = "";
    let rows = parseInt(prompt("Enter Value"));
    let vari = 1;
    if (rows < 20) {
        for (let i = 1; i <= rows; i++) {
            let pattern = "";
            for (let j = 1; j <= i; j++) {
                pattern += vari + "&nbsp";
                vari++;
            }
            document.getElementById("P2").innerHTML += pattern + "<br>";

        }

    }
    else {
        alert("Please Enter value less than 20");
    }
}
function LoadClick2() {
    document.getElementById("P3").innerHTML = "";
    let rows = parseInt(prompt("Enter Value"));
    for (let i = 1; i < rows; i++) {
        let pattern = "";
        for (let j = 1; j < rows + 1 - i; j++) {
            pattern += i + "&nbsp";
        }
        document.getElementById("P3").innerHTML += pattern + "<br>"
    }
}

function LoadClick3() {
    document.getElementById("P4").innerHTML = "";
    let rows = parseInt(prompt("Enter Value"));
    for (let i = 0; i < rows; i++) {
        let pattern = "";
        for (let j = 0; j < rows - i; j++) {
            pattern += "&nbsp&nbsp";
        }
        for (k = 1; k < 2 * i - 1; k++) {
            pattern += i
        }
        document.getElementById("P4").innerHTML += pattern + "<br>"
    }

}