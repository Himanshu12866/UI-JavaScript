function FName(...product){
    var [name,price, rating , stock] = product;
    document.write(`Name : ${name} , <br> Price : ${price} , <br> Rating : ${rating} ,  <br>Stock : ${stock}`)
}
FName("Samsung", 1000, 4.5, 10)