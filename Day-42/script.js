class Product {
    Name =  "SamsungTV";
    Price =  6733;
    qty = 10;
    Print(){
        document.write (`Product Name is<b> ${this.Name}</b> and Price is <b> ${this.Price.toLocaleString()}</b><br>`)
    }

    Qty(){
        document.write (`Product Qty is <b> ${(this.qty * this.Price).toLocaleString()}</b>`)
    }
}
let obj = new Product();
obj.Print();
obj.Qty()
//We can add many methods as our requirments