function ResultBtn() {
    var valueB = document.getElementById("val2").value;
    var valueC = document.getElementById("val3").value;
    var valueA = document.getElementById("val1").value;
    var result = document.getElementById("Result");
    console.log(valueA)
    document.getElementById("result-block").style.display = "block";
    if (valueA == valueB && valueB == valueC) {
        result.innerHTML = "All values are equal = Equilateral triangle";
    } else if (valueA == valueC || valueA == valueB || valueB == valueC) {
        result.innerHTML = "Two sides are equal = Isosceles triangle";
    }
    else {
        result.innerHTML = "No sides are equal = Scalene triangle";
    }

}