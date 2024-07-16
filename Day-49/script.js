// function InsertClick(t , e){
//     document.write(`
//         Name = ${t.name}<br>
//         Id = ${t.id}<br>
//         Value = ${t.value}<br>

//         Event = ${e.clientX}
//         `)
// }

function Media(t) {
    let p = document.querySelector("p")
    switch (t.name) {
        case "Prev":
            p.innerHTML = "Previous";
            break;
        case "Next":
            p.innerHTML = "Next";
            break;
        case "Play":
            p.innerHTML = "Play";
            break;
        case "Pause":
            p.innerHTML = "Pause";
            break;

    }
}