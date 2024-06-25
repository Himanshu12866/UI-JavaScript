function FetchAPI(url) {
    document.getElementById("product").innerHTML = ""
    if (url == "men") {
        url = "https://fakestoreapi.com/products/category/men's%20clothing";
    }

    if (url == "women") {
        url = "https://fakestoreapi.com/products/category/women's%20clothing";
    }

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (product) {
            product.map(function (data) {
                var div = document.createElement("div");
                div.innerHTML = `
         
         <div class = "card p-2" style = "width: 300px;">
        <div class="text-center">  <img src = " ${data.image}" class=" card-img-top object-fit-contain" style="width:100px;height: 100px"></div>
         <div class = "card-header fw-medium overflow-hidden">
            <p style="height:30px"> ${data.title}</p>
            
            </div>
            <div class = "card-body">
            
            
            <span> ${data.category}</span><br>
            <span><b> ${data.price}</b></span><br>
          <span class="bi bi-star-fill"></span> ${data.rating.rate} Ratings & ${data.rating.count} Reviews</span>



            </div>
            <div class = "card-footer">
            <button class="btn btn-dark w-100">Add to Cart</button>  
            </div>
         </div> 
         `
                document.getElementById("product").appendChild(div)
            })
        })
}

var cardItem = []
function GetCount(){
    document.getElementById("count").innerHTML = cardItem.length
}



function LoadData() {
    FetchAPI('https://fakestoreapi.com/products')
    GetCount()
}