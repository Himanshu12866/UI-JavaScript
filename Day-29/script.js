
function LoadData(){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
    document.getElementById("image").src = data.image
    })
}

var id = 2
function Acroll(id){
    id++;
}
function AutoScroll(id){
   LoadData(id)
}