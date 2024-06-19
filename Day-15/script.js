function ClickBtn() {
    document.querySelector("div").innerHTML = "";
    var table = document.createElement("table");
  table.style.border = "2px solid red"
    table.style.backgroundColor = "grey";
    table.style.color = "white";
    table.style.width = "300px";
    table.style.textAlign = "left"
    table.style.marginTop = "20px"
    table.style.borderRadius = "5px"

    var thead_1 = document.createElement("thead");
    var tr_1 = document.createElement("tr");
    var th_1 = document.createElement("th");
    th_1.style.borderBottom = "2px solid yellow"
    th_1.innerHTML = "Name";
    var th_2 = document.createElement("th");
    th_2.innerHTML = "Age";

    tr_1.appendChild(th_1);
    tr_1.appendChild(th_2)
    thead_1.appendChild(tr_1);
    table.appendChild(thead_1)


    // Table Header has been created 

    // Now lets create the body of the table 



    var tbody = document.createElement("tbody");
    var tr_2 = document.createElement("tr");
    var td = document.createElement("td");
    var td_1 = document.createElement("td");
    td.innerHTML = "Himanshu Mishra";
    tr_2.appendChild(td);
    td_1.innerHTML = "22";
    tr_2.appendChild(td_1)
    tbody.appendChild(tr_2);
    table.appendChild(tbody);
    document.querySelector("div").appendChild(table);

}