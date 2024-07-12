class Loan_1 {
    Ploan = "We are providing Personal Loan with low cost EMI <br>";
    Print() {
        document.write(this.Ploan)
    }
}
class Loan_2 extends Loan_1 {
    Hloan = "We are providing Home loan with 0% EMI <br>";
    Print() {
        super.Print()
        document.write(this.Hloan)
    }
}
class Loan_3 extends Loan_2 {

    CLoan = "We are giving Car Loan <br>";
    Print() {
        super.Print();
        document.write(this.CLoan)
    }
}
class Loan_4 extends Loan_3 {
    Cloan = "Special Combined Loan <br>";
    Print() {
        document.write(this.Cloan)
        super.Print();
    }
}
function LoadLoan() {
    var val = document.querySelector("select").value;
    switch (val) {
        case "loan1":
            var obj = new Loan_1();
            obj.Print();
            break;
        case "loan2":
            var obj = new Loan_2();
            obj.Print();
            break;
        case "loan3":
            var obj = new Loan_3();
            obj.Print();
            break;
        case "loan4":
            var obj = new Loan_4();
            obj.Print();
            break;
        default:
            document.write("Please select any one option")
    }
}