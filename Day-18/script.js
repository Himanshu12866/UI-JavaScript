
var ListItem = [];


function LoadList() {

    ListItem.map(function (item) {
        var OptionBtn = document.createElement("option");
        OptionBtn.text = item;
        OptionBtn.value = item;
        document.getElementById("SelectList").appendChild(OptionBtn)
    })
    document.getElementById("LengthOfList").innerHTML = "Total Task: " + ListItem.length
}
function BtnAdd() {
    let addingItem = document.getElementById("InputWrite").value;
    if (ListItem.indexOf(addingItem) == -1) {
        ListItem.push(addingItem);
        document.getElementById("InputWrite").innerHTML = ""
        LoadList();

    }
    else{
        alert("Task already exist")
    }
}