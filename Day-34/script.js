function LoadClick() {
    document.getElementById("P1").innerHTML = "";

    let rows = parseInt(prompt("Enter Value"));
    let pattern = "";
    if (rows < 100) {
        for (let i = 1; i <= rows; i++) {
            for (let j = i; j <= i; j++) {
                // pattern += i + " &nbsp";
                pattern += "*" + " &nbsp";
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
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= rows - i; j++) {
            pattern += "&nbsp&nbsp";
        }
        for (k = 1; k <= 2 * i - 1; k++) {
            pattern += i
        }
        document.getElementById("P4").innerHTML += pattern + "<br>"
    }

}
// function LoadClick3(){
//     let rows = parseInt(prompt("Enter value"));

// // pattern variable carries the final pattern in string format

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//     let pattern = "";
//    // Inner Loop - I -> for the spaces
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }

//    // Inner Loop - II -> for the numbers
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern += num + "<&nbsp;>";
//       document.getElementById("P4").innerHTML += pattern + "<br>";
//    }

// }
// }


function LoadClick4() {
    let rows = parseInt(prompt("Enter a value"))
    let pattern = " ";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows - i; j++) {
            pattern += "<br>"
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += "*";
        }
    }
    document.getElementById("P5").innerHTML = pattern + "<br>"

}
function LoadClick5() {
    let value = prompt("Enter Name");
    let length = parseInt(prompt("Enter length"))
    document.getElementById("P6").innerHTML = "";
    for (let i = 0; i <= length; i++) {
        document.getElementById("P6").innerHTML += value + " || "
    }
}

// function counterSelected(selectObj){
//     let numSelected = 0;
//     for(let i = 0; i < selectObj.options.length; i++){
//         if(selectObj.options[i].selected){
//             numSelected++;
//         }
//     }
// return numSelected;
//  }
// const btn = document.getElementById("btn");
// btn.addEventListener("click" , () => {
//     const musicTypes = document.getElementById("musicTypes")

//     alert(` You have Selected ${counterSelected(musicTypes.value)}`);
// })
// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   }

//   const btn = document.getElementById("btn");

//   btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
//   });

// function counterSelected(selectObj){
//     let numSelected = 0;
//     for(let i = 0; i < selectObj.options.length; i++){
//         if(selectObj.options[i].selected){
//             numSelected++;
//         }
//     }
//     return numSelected;
// }

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     const musicTypes = document.getElementById("musicTypes");
//     alert(`You have selected ${counterSelected(musicTypes)} options.`);
// });

function LoadClick6() {
    let value = parseInt(prompt("Enter value"));
    let result = document.getElementById("P7")
    result.innerHTML = ""
    result.classList = "text-center p-2 bg-warning m-2 text-light"
    do {
        result.innerHTML += `<br>Your value is ${value}`;
        value++;

    }
    while (value <= 20)
}