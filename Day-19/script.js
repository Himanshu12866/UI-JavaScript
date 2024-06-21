function ClickMe() {
    var product = {}
    var http = new XMLHttpRequest();
    http.open("get", "./data.json", true);
    http.send();
    http.onreadystatechange = function () {

        if (http.readyState == 4) {
            product = JSON.parse(http.responseText);
            document.getElementById("ImageId").src = product.image;
            document.getElementById("TitleId").innerHTML = product.title;
            document.getElementById("DescpId").innerHTML = product.description;
            document.getElementById("RateId").innerHTML = `<span class = bi bi-star>${product.rating.rate}</span>`;
            document.getElementById("RatingsId").innerHTML = `<b>${product.rating.ratings}</b> Ratings <b>${product.rating.reviews}</b> Reviews`;
            document.getElementById("PriceId").innerHTML = product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' });

            product.offers.map(function (item) {
                var li = document.createElement("li");
                li.classList = "bi bi-tag-fill my-2";
                li.innerHTML = item;
                document.getElementById("OffersId").appendChild(li);
            })


        }
    }
}