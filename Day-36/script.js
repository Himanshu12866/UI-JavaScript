// var FetchData = new Promise(function (resolve, reject) {
//     var url = prompt("Enter Your URL")
//     if (url == "https") {
//         resolve("Data Fetched Successfully")
//     }
//     else {
//         reject("Invalid URL")
//     }
// })
//     .then(success => {
//         alert("Fetched Success Fully")
//         document.write(success + "<br>")
//     })
//     .catch(err => {
//         alert("Invalid Input")
//         document.write(err + "<br>")
//     })
//     .finally(msg => {
//         document.write("Program End")
//     })





var name = new Promise(function(resolve,reject){
    var url = prompt("Enter Input");
    if(url == "Ram"){
        resolve("Correct Input")
    }
    else{
        reject("Wrong Input")
    }
})
.then(function(success){
    alert("Success");
    document.write(success+"<br>")
})
.catch(err => {
    alert("Invalid Input")
    document.write(err+"<br>")
})
.finally(alw => {
    document.write("Program End")
})



