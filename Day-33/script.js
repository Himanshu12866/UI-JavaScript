function LoadBtn() {
    var inputNumber = document.getElementById("valueNumber").value;
    var valueLength = document.getElementById("valueLength").value;

    document.querySelector("p").innerHTML = "";


    if (inputNumber <= 1000 && valueLength <= 100) {
        if (inputNumber === "" && valueLength === "") {
            alert("Please enter all values")
        }
        for (var i = 1; i <= valueLength; i++) {
            document.querySelector("p").innerHTML += `<div class="text-primary bi bi-arrow-right" style="font-size:20px">${inputNumber} X ${i} =  ${i * inputNumber}<div> &nbsp <br>`

        }
    }

    else {

        alert("Please enter a number between 1 and 1000")
    }
}
