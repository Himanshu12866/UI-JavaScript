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
        op.Number_1 = parseInt(prompt("Enter Number-1"))
        op.Number_2 = parseInt(prompt("Enter Number-2"))
        document.querySelector("p").innerHTML = op.print()
        // console.log(op.print())
    }
}