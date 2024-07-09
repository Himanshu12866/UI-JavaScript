function ClickMe() {
    var id = document.getElementById("table");
    id.innerHTML = "";
    id.className = " p-2 m-3"
    fetch("./data.json")
        .then(response => {
            return response.json();
        })

        .then(data => {
            data.map(item => {


                var tr = document.createElement("tr")
                var td_1 = document.createElement("td")
                var td_2 = document.createElement("td")
                var td_3 = document.createElement("td")
                var td_4 = document.createElement("td")
                var td_5 = document.createElement("td")
                var td_6 = document.createElement("td");
                td_1.innerHTML = item.id;
                td_2.innerHTML = item.name;
                td_3.innerHTML = item.modal;
                td_4.innerHTML = item.price;
                td_5.innerHTML = item.stock;
                td_6.innerHTML = item.stores;
                tr.appendChild(td_1);
                tr.appendChild(td_2);
                tr.appendChild(td_3);
                tr.appendChild(td_4);
                tr.appendChild(td_5);
                tr.appendChild(td_6);

                document.querySelector("tbody").appendChild(tr)
            })
        })
}