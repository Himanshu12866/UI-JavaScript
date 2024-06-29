function FetchAPI(url){
    if(url == "men"){
        url = "https://fakestoreapi.com/products/category/men's%20clothing"
    }
    if(url == "women"){
        url = "https://fakestoreapi.com/products/category/women's%20clothing"
    }


    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
       document.getElementById("products").innerHTML = ""
        data.map(item => {
            var div = document.createElement("div");
            div.innerHTML = `
            
            <div class="card" style="width:300px; height:500px" >
             <img class="card-img-top" style="width:100%; height:300px" src= "${item.image}"> 
            <div class="card-header">
            <h6>${item.title}</h6>
            
            </div>
            <div class="card-body">
          <spna> &#8377; ${item.price}</span>
          <span>Ratings  ${item.rating.rate}</span>
          <span> ${item.rating.count}</span>
            
            </div>
            <div class="card-footer">
            <button onclick="AddItem(${item.id})" class="btn btn-dark w-100">Add To Cart</button>
            </div>
            
            
            </div>
            
            
            `

            document.getElementById("products").appendChild(div)
        })
    })
}


var CartItem = [];
var TotalCost = 0;
function AddItem(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
        return response.json()
    })
    .then(data=>{
       CartItem.push(data)
       alert("Added to Cart")
       TotalCost += data.price
    })
   
    GetCount()
}



function ViewCard(){
    document.querySelector("tbody").innerHTML = "";
    if(CartItem.length == 0){
        alert("No Items in Cart")
    }

    CartItem.map(list => {
        var btn =document.createElement("button");
        btn.className="btn btn-danger bi bi-trash m-1 p-2 "
        btn.addEventListener('click' , function(){
         CartItem = CartItem.filter(item => item.id !== list.id)
         alert("Item removed from the cart")
         var BtnPrice = TotalCost - list.price 
         TotalCost = BtnPrice;
         ViewCard();
         GetCount();
 
        })
        var tr = document.createElement("tr");
        var td_1 = document.createElement("td")
        var td_2 = document.createElement("td")
        var td_3 = document.createElement("td")
        var td_4 = document.createElement("td")
     

        
        td_1.innerHTML = list.title;
        td_3.innerHTML =" &#8377;" + list.price;
        td_2.innerHTML = `<img src="${list.image}" style="width:50px; height:50px">`;
       document.getElementById("TotalCost").innerHTML =" &#8377;" +  TotalCost
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);
        td_4.appendChild(btn)
        tr.appendChild(td_4)
      
        document.querySelector("tbody").appendChild(tr)

    })
}






function GetCount(){
    document.getElementById("cardLength").innerHTML = CartItem.length;

}
function LoadData(){
    FetchAPI("https://fakestoreapi.com/products")
    GetCount()
}