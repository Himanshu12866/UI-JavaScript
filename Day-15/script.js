function ClickBtn(){
    var table =  document.createElement("table");
    table.border = "1";
    table.style.backgroundColor = "grey";
    table.style.color = "white";
    table.style.outline = "1px solid green"
    var thead = document.createElement("thead");
    var  tr_1 = document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML = "Details";
    tr_1.appendChild(th);
    thead.appendChild(tr_1);
    table.appendChild(thead);

    // Table Header has been created 
    var tbody = document.createElement("tbody");
    var tr_2 = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = "Himanshu Mishra";
    tr_2.appendChild(td);
    tbody.appendChild(tr_2);
    table.appendChild(tbody);
    document.querySelector("div").appendChild(table);

}