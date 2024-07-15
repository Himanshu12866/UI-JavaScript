class Calculator {
    Number_1;
    Number_2;
}
class Addition extends Calculator {
    operator = "+";
    print(){
        return this.Number_1 + this.Number_2
    }
}
class Subtraction extends Calculator {
    operator = "-";
    print(){
        return this.Number_1 - this.Number_2
        }
}
class Multiplication extends Calculator {
    operator = "*";
    print(){
        return this.Number_1 * this.Number_2
    }
}
let calc = new Array(new Addition() , new Subtraction() , new Multiplication());
let operations = prompt("Please Enter Your Operator" , " +, - , * ")
for(let op of calc){
    if(op.operator == operations){
        let Number_1 = Number(prompt("Enter First Number"))
        let Number_2 = Number(prompt("Enter Second Number"))
        document.querySelector("p").innerHTML = op.print()
    }
}