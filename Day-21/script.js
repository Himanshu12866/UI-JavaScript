function LoadTable(){
    fetch("./data.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    data.map(function(table, index){
        var tr = document.createElement("tr")
        var tcountry = document.createElement("td")
        var id = document.createElement("td")
        var tmatch = document.createElement("td");
        var twin = document.createElement("td");
        var tlost = document.createElement("td");
        var tpts = document.createElement("td");
        var tnrr = document.createElement("td");
         

        tcountry.innerHTML = `<img src = ${table.image}> ${table.country}`;
        tmatch.innerHTML = table.match;
        twin.innerHTML = table.won;
        tlost.innerHTML = table.lost;
        tpts.innerHTML = table.points;
        tnrr.innerHTML = table.nrr;
        id.innerHTML = index+1
        tr.appendChild(id)
        tr.appendChild(tcountry);
        tr.appendChild(tmatch);
        tr.appendChild(twin);
        tr.appendChild(tlost);
        tr.appendChild(tpts);
        tr.appendChild(tnrr);
        document.querySelector("tbody").appendChild(tr)
        
        

    })

    })
}