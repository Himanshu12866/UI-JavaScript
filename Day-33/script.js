function LoadBtn(){
    var inputNumber = document.getElementById("value").value;
    var valueLenght = document.getElementById("valueLenght").value;
    console.log(inputNumber)
    console.log(valueLenght)
    for(var i = 1; i<= 10; i++){
        document.querySelector("p").innerHTML += i * 2 + "<br>"
    }
}