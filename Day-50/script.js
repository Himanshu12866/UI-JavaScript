function BodyLoad(){
    fetch("./images.json")
    .then(response => {
        return response.json();
    })
    .then(imgsrc => {
        
        imgsrc.map(src => {
            let img = document.createElement("img");
            img.src = src.img;
            img.style.width = 100 + "px";
            img.style.height = 100 + "px";
            img.className = "d-lg-block m-1";
            img.addEventListener("click" , (e) => {
                document.getElementById("ImgId").src = e.target.src
            })
            document.getElementById("imgId").appendChild(img)
        })
    })
}