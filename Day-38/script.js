function ClickMe(){
    fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.map(item => {
            var id= document.getElementById("result");
            id.innerHTML = `
            
            <table class="table table-hover table-group-divider table-bordered">
            <thead>
            <tr>
            <th>Id :</th>
            <th>Name :</th>
            <th>Modal :</th>
            <th>Price :</th>
            <th> Stock :</th>
            <th> Stores:</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.modal}</td>
            <td>${item.price}</td>
            <td>${item.stock}</td>
            <td>${item.stores}</td>
            
            </tr>
            <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.modal}</td>
            <td>${item.price}</td>
            <td>${item.stock}</td>
            <td>${item.stores}</td>
            
            </tr>
            
            </tbody>

            
            
            
            </table>
            
            
            
            
            `
        })
    })
}