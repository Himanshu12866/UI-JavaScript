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
function GetData(...product){
    let div = document.querySelector("div")
    for(let property in product){
        div.innerHTML += `${property} : ${product[property]}<br>`
    }
}
var img = ["../images/image-1.jpg" , "../images/image-2.jpg" , "../images/image-3.jpg"]
function BodyLoad(){
   img.map(data => {
    var Img = document.createElement("img");
    Img.style.width = "100px";
    Img.style.height = "100px";
    Img.src = data;
    Img.addEventListener("mouseover" , (e) => {
        document.getElementById("Preview").src = data
    })
    document.querySelector("nav").appendChild(Img)

   })

}