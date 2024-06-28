
function LoadProduct(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
        return response.json();
    })
    .then(product => {
        document.getElementById("lblTitle").innerHTML = product.title;
        document.getElementById("imgProduct").src = product.image
    })

}
function LoadProductAuto(){
    productId++;
    fetch(`https://fakestoreapi.com/products/${productIt}`)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        document.getElementById("lblTitle").innerHTML = data.title;
        document.getElementById("imgProduct").src = data.image
    })
}

var productId = 1;
function NextClick(){
    productId++;
   
    LoadProduct(productId)
}
function PrevClick(){
    productId--;
    LoadProduct(productId)
}

var timer;
function PlayBtn(){
    document.getElementById("lblStatus").innerHTML = "Sliding started"
    timer = setInterval(NextClick, 3000)
}

function PauseBtn(){
    document.getElementById("lblStatus").innerHTML = "Sliding paused"
    clearInterval(timer)
}