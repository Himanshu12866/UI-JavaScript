function LoadData() {
    var values = [
        {
            category: "MOBILES",
            Products: [
                'REALME', 'POCO', 'SAMSUNG'
            ]
        },
        {
            category: "LAPTOPS",
            Products: [
                'ASUS', 'DELL', 'HP'
            ]
        }
    ]

    for (var i = 0;
        i < values.length;
        i++) {
        var oli_li = document.createElement("li");
        oli_li.innerHTML = values[i].category;
document.querySelector("ol").appendChild(oli_li)
for(var j = 0;
    j < values[i].Products.length;
    j++
){
    var ul = document.createElement("ul");

    var ul_li = document.createElement("li");
    ul_li.style.color = "green"
    ul_li.style.listStyle = "square"
ul_li.innerHTML = values[i].Products[j]
ul.appendChild(ul_li);
oli_li.appendChild(ul);


}
    }


}