function* Click(){
yield 10,
yield "Apple",
yield "MacBook Air 2 Pro",
yield "899 $",
yield ["Delhi", "Mumbai" , "Hyderabad" , "Chennai"]
}
var list = Click();
function ClickMe(){
    console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
}

