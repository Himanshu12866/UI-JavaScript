function Move(e){
    var img = document.querySelector("img");
    img.style.position = "fixed";
    img.style.top = e.clientY + "px";
    img.style.left = e.clientX + "px"
}