function LoadProductAuto() {
    productId++;
    fetch(`https://fakestoreapi.com/products/${productIt}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById("lblTitle").innerHTML = data.title;
            document.getElementById("imgProduct").src = data.image;

        })
}

function LoadProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            return response.json();
        })
        .then(product => {
            document.getElementById("lblTitle").innerHTML = product.title;
            document.getElementById("imgProduct").src = product.image;

        })

}

var productId = 1;
function NextClick() {
    if (productId <= 19) {
        productId++;

        LoadProduct(productId)
        document.getElementById("SeekBar").value = productId;
    }
    else {
        productId = 1;
        productId++;

        LoadProduct(productId);
        document.getElementById("SeekBar").value = productId;
    }
}
function PrevClick() {
    if (productId <= 1) {
        productId = 19;
        productId++;
        LoadProduct(productId);
        document.getElementById("SeekBar").value = productId;
    }
    else {
        productId--;
        LoadProduct(productId)
        document.getElementById("SeekBar").value = productId;
    }
}

var timer;
function PlayBtn() {
    document.getElementById("lblStatus").innerHTML = "Sliding started";
    timer = setInterval(NextClick, 3000)
}

function PauseBtn() {
    document.getElementById("lblStatus").innerHTML = "Sliding paused";
    clearInterval(timer);
}
function SeekBarChange() {
    var rangeValue = document.getElementById("SeekBar").value;
    productId = rangeValue;
    LoadProduct(productId)

}