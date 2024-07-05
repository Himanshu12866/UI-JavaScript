// First Method to access rest parameter 

function FName(...product){
    var [name,price, rating , stock] = product;
    document.write(name + "<br>")
    document.write(`Name : ${name} , <br> Price : ${price} , <br> Rating : ${rating} ,  <br>Stock : ${stock}<br><br>`)
}
FName("Samsung", 1000, 4.5, 10)


// Second Method To Access rest parameter 

function FName1(...product){
document.write(`Name : ${product[0]};<br> Price : ${product[1]}<br> Ratings : ${product[2]}<br> Stoct: ${product[3]}<br>`)
}
FName1("IPhone", 80000 , 5.0 , 100);

function FName2(...product){
    product.map(data => {
       var load =  document.getElementById("load")
    load.innerHTML = `<h5> ${data}</>h5`
   })
}FName2("Samsung", 1000, 4.5, 10)
 function LoadData(){
    FName2()
 }
