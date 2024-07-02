var n = parseInt(prompt("Enter a value"))
for(var i = 1; i<=n ; i++){
    for(var j = 1; j<=i; j++){
        document.getElementById('id1').innerHTML += (" * &nbsp; ")
    }
    document.getElementById('id1').appendChild(document.createElement('br'))
}

// var n = parseInt(prompt("Enter a value"));
// var m = " ";

// for (var i = 1; i <= n; i++) {
//     for(var j = 1; j<=n; j++){
//         m += " ";

//     }
//     for(var k = 0; k < 2*1 - 1; k++){
//         m += "* &nbsp; "
//     }
//     m += "\n"

// }
// document.getElementById("id1").innerHTML = m