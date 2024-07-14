function LoadData() {
    var name = prompt("Enter Your Name ");
    var role = prompt("Enter your role", "Admin | User")

    class Product {
        _productName;
        get ProductName() {
            return this._productName;
        }
        set ProductName(newValue) {
            this._productName = newValue;
        }
    }
    let obj = new Product();
    if (role === "Admin") {
        obj.ProductName = prompt("Entet New Name")
    }
    if (obj.ProductName) {
        document.write(obj.ProductName)
    }
    else {
        alert(`${name} You are not allowed to change the product name`)
    }
}