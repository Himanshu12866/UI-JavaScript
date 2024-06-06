function CalculateBMI() {
    var weight = parseInt(document.getElementById("kgWeight").value);
    console.log(weight);
    var height = document.getElementById("ftHeight").value;
    console.log(height)
    let parseHeight = parseFloat(height);
    parseHeight *= 0.3048;
    console.log(parseHeight)
    var yourIBM = weight / parseHeight ** 2;
    var result = yourIBM.toFixed(2);
    console.log(result);
    document.getElementById("viewWeight").innerHTML = weight;
    document.getElementById("viewHeight").innerHTML = height;
    document.getElementById("viewBMI").innerHTML = result;

    if (result < 18.5) {
        document.getElementById("resultValue").innerHTML = "Under Weight";
    }
    else if (result >= 18.5 && result <= 24.8) {
        document.getElementById("resultValue").innerHTML = "Normal";

    }
    else if (result >= 24.9 && result >= 29.9) {
        document.getElementById("resultValue").innerHTML = "Over Weight";

    }
    else if (result == 30 && result > 30) {
        document.getElementById("resultValue").innerHTML = "Dangerous";

    }
    else {
        alert("Please Enter Value")
    }
    document.getElementById("viewResult").style.display = "block"

}

