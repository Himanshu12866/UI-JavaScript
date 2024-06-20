
var ListItem = ["Wake Up", "Brush"];


function LoadList(){

    ListItem.map(function(item){
        var OptionBtn = document.createElement("option");
        OptionBtn.text =item;
        OptionBtn.value = item;
        document.getElementById("SelectList").appendChild(OptionBtn)
        document.getElementById("InputWrite").innerHTML = ""
        

    })
    document.getElementById("LengthOfList").innerHTML = "Total Task: " + ListItem.length
}

function BtnAdd(){
    let addingItem = document.getElementById("InputWrite").value;
    if(ListItem.indexOf(addingItem) == -1){
        ListItem.push(addingItem);

        LoadList();

    }


}