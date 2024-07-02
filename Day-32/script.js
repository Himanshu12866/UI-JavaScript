var n = parseInt(prompt("Enter a value"))
for(var i = 1; i<=n ; i++){
    for(var j = 1; j>=i; j++){
        document.write(" * " + "&nbsp;")
    }
    document.write("<br>")
}