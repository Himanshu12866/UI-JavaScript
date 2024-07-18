let allBox = document.querySelector(".content").children;
const boxWidth = allBox[0].querySelector(".inner").offsetWidth;
const boxHeight = allBox[0].querySelector(".inner").offsetHeight;
var div = document.createElement("div");
document.oncontextmenu = () => {
    return false;
}
div.style.position = "absolute";
div.style.height = boxHeight + "px";
div.style.width = boxWidth + "px";
div.style.backgroundColor = "pink";
div.style.transition = "all .3s linear"
div.style.zIndex = 10;
div.style.left = allBox[0].querySelector(".inner").offsetLeft + "px";
div.style.top = allBox[0].querySelector(".inner").offsetTop + "px";
document.querySelector(".grid-box").appendChild(div)
for (let i = 0; i < allBox.length; i++) {
    allBox[i].querySelector(".inner").addEventListener("mouseover", function () {
        const x = this.offsetLeft;
        const y = this.offsetTop;
        div.style.left = x + "px";
        div.style.top = y + "px";
    })
}
navigator.geolocation.getCurrentPosition((position)=>{
    alert(`Latitude : ${position.coords.latitude}<br> Longitude : ${position.coords.longitude}`) 
})