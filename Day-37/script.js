function* Click() {
    yield 1,
        yield "Apple",
        yield "MacBook Air 2 Pro",
        yield "899 $",
        yield ["Delhi", "Mumbai", "Hyderabad", "Chennai"]
}
var list = Click();
function ClickMe() {
    
        var id = document.getElementById("result");
        id.innerHTML = `<table class = "table">
   
   <thead>
   <tr>
   <th>Id :</th>
   <th>Name :</th>
   <th>Modal :</th>
   <th>Price :</th>
   <th>Stores :</th>
   
   </tr>
   

   </thead>
   <tbody>
   <tr>
   <td>${list.next().value}</td>
   <td>${list.next().value}</td>
   <td>${list.next().value}</td>
   <td>${list.next().value}</td>
   <td class = "p-2">${list.next().value}</td>
   </tr>
   </tbody>

   
   </table>`
    }
