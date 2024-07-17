const id = document.getElementById("container");
const img = document.querySelector("img");
id.addEventListener("mousemove", onZoom);
id.addEventListener("mouseover", onZoom);
id.addEventListener("mouseleave", offZoom);
function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(5)";
}
function offZoom(e) {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center"
}

// here e is used to get event details we know js events can have only two arg (this, event) but when we are dealing with eventlistener then we can have only one arg event