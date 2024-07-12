class Ver_1 {

    ver2021 = "Installed Successfuly Version-2021 <br>";
    Print() {
        document.write(this.ver2021)
    }

}
class Ver_2 {
    ver2022 = "Installed Successfuly Version-2022 <br>";
    Print() {

        document.write(this.ver2022)
    }

}
class Ver_3 {
    ver2023 = "Installed Successfuly Version-2023 <br>";
    Print() {
        let obj = new Ver_2();
        obj.Print()
        document.write(this.ver2023)
    }
}
function InstallClick() {
    var ver = document.querySelector("select").value;
    switch (ver) {
        case "ver1":
            document.write("Installed <br>")
            let obj1 = new Ver_1()
            obj1.Print();
            break;
        case "ver2":
            document.write("Installed <br>")
            let obj2 = new Ver_2()
            obj2.Print();
            break;
        case "ver3":
            document.write("Installed <br>")
            let obj3 = new Ver_3()
            obj3.Print();
            break;
        default:
            document.write("Please Select Version")

    }
}