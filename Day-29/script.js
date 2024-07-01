function FetchData(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById("image").src = data.image

        })
}
var id = 1;


function AutoScroll() {
    FetchData(id)


}

setInterval(() => {
    id++
    AutoScroll()
    if (id == 20) {
        id = 1;
    }
}, 300)