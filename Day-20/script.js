function LoadData() {

    fetch("./data.json")
        .then(function (response) {
            return response.json()
        })
        .then(function (product) {
            document.getElementById("ImageId").src = product.images
            document.getElementById("titleId").innerHTML = product.title;
            document.getElementById("descriptionId").innerHTML = product.desc;

            document.getElementById("ratingId").innerHTML = `<span class = bi bi-list>${product.rating.rate}</span> , ${product.rating.ratings}, ${product.rating.count}`

            document.getElementById("OfferList").innerHTML = ""
            product.offers.map(
                function (offer) {
                    var li = document.createElement("li");
                    li.innerHTML = offer;

                    document.getElementById("OfferList").appendChild(li)
                }
            )
        })

}