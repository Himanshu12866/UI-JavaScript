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
            <p style="height:30px;font-size:15px"> ${data.title}</p>
            
            </div>
            <div class = "card-body">
            
            
            <span> ${data.category.toUpperCase()}</span><br>
            <span><b>$  ${data.price}</b></span><br>
          <span class="bi bi-star-fill"></span> ${data.rating.rate} Ratings & ${data.rating.count} Reviews</span>



            </div>
            <div class = "card-footer">
            <button onclick="AddItem(${data.id})" class="btn btn-dark w-100">Add to Cart</button>  
            </div>
         </div> 
         `
                document.getElementById("product").appendChild(div)
            })
        })
}

var cardItem = [];  // Create a empty array to add items when user clicks th add to cart button

// ---------------------------
var TotalCost = 0


function GetCount() {
    document.getElementById("count").innerHTML = cardItem.length

}

// ---------------------------



function AddItem(id) {


    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            TotalCost += data.price
            cardItem.push(data);
            alert("Added To Cart")
            GetCount()
        })

}

function VeiwCard() {
    if (cardItem.length == 0) {
        alert("Your Card is empty")
    }



    document.getElementById("tbody").innerHTML = "";
    document.getElementById("total").innerHTML = "$" + TotalCost.toFixed(2)
    cardItem.map(function (detail) {
      

        // Create a delete button
        var btn = document.createElement("button")
       
        btn.className = "btn btn-danger bi bi-trash"
        btn.addEventListener('click', function () {
            cardItem = cardItem.filter(item => item.id !== detail.id);
            alert("Your Item is removed from the cart")
            var BtnPrice = TotalCost - detail.price;
            TotalCost = BtnPrice;
            VeiwCard()
            GetCount()

        })

        // Create a table element 

        var tr = document.createElement("tr")
        var td_1 = document.createElement("td")
        var td_2 = document.createElement("td")
        var td_3 = document.createElement("td")
        var td_4 = document.createElement("td")

        td_4.appendChild(btn)

        td_1.innerHTML = detail.title;
        td_1.style.fontSize = "smaller"
        td_2.innerHTML = `<img style="width:50px; height:50px;" src = ${detail.image}>`;
        td_3.innerHTML = `$ ${detail.price} `;
        tr.appendChild(td_1)
        tr.appendChild(td_2)
        tr.appendChild(td_3)
        tr.appendChild(td_4)
        document.getElementById("tbody").appendChild(tr)

    })
}






function LoadData() {
    FetchAPI('https://fakestoreapi.com/products')
    GetCount();

}
