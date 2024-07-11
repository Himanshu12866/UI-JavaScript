function LoadData() {
    class Product {
        Name = "Apple";
        Modal = "MacBook 15 Pro";
        Price = 89999;
        Cities = ["Hyd", "Rewa", "Mumbai", "Delhi"];
        Ratings = {
            rate: 4.9,
            review: 100
        }
    }
    var product = new Product();
    let table = document.createElement("table");
    let thead = document.createElement("thead")
    let tr = document.createElement("tr");
    let th_1 = document.createElement("th");
    let th_2 = document.createElement("th");
    let th_3 = document.createElement("th");
    let th_4 = document.createElement("th");
    let th_5 = document.createElement("th");
    th_1.innerHTML = "Brand";
    th_2.innerHTML = "Model";
    th_3.innerHTML = "Price";
    th_4.innerHTML = "Shops";
    th_5.innerHTML = "Ratings";
    table.className = "table table-hover m-3"
    tr.appendChild(th_1);
    tr.appendChild(th_2);
    tr.appendChild(th_3);
    tr.appendChild(th_4);
    tr.appendChild(th_5);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr_1 = document.createElement("tr");
    let td_1 = document.createElement("td");
    td_1.innerHTML = product.Name;
    let td_2 = document.createElement("td");
    td_2.innerHTML = product.Modal;
    let td_3 = document.createElement("td");
    td_3.innerHTML = product.Price.toLocaleString();
    let td_4 = document.createElement("td");
    td_4.innerHTML = product.Cities.join(", ");
    let td_5 = document.createElement("td");
    td_5.innerHTML = product.Ratings.rate;
    tr_1.appendChild(td_1);
    tr_1.appendChild(td_2);
    tr_1.appendChild(td_3);
    tr_1.appendChild(td_4);
    tr_1.appendChild(td_5);
    tbody.appendChild(tr_1)
    table.appendChild(tbody)
    document.getElementById("box").appendChild(table)
}








