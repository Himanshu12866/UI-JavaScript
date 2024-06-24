function LoadData() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            data.photos.map(function (details) {
                var div = document.createElement("div");
                div.className = "card m-2 p-3";
                div.style.width = "300px";
                div.style.height = "550px"
                div.innerHTML = `
                <a href = ${details.img_src} target = _blank ><img width=100 height=250 src = ${details.img_src} class = card-img-top><a>
                <div class = card-header>
                <h2>${details.id}</h2>
                <h5>${details.camera.full_name}</h5>
                <div class = card-body>
                <span> Camera ID : ${details.rover.id}</span>
               <p>Name : ${details.rover.name}</p>
                <p>Launch Date : ${details.rover.launch_date}
                <p>Status : ${details.rover.status}</p>  
                </div>
             </div>
            
            `
                document.querySelector("main").appendChild(div)
            })
        })
}