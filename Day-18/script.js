
// var ListItem = [];


// function LoadList() {

//     document.getElementById("SelectList").innerHTML = ""
//     ListItem.map(function (item) {
//         var OptionBtn = document.createElement("option");
//         OptionBtn.text = item;
//         OptionBtn.value = item;
//         document.getElementById("SelectList").appendChild(OptionBtn)
//     })
//     document.getElementById("LengthOfList").innerHTML = "Total Task: " + ListItem.length
// }


// function BtnAdd() {
//     let addingItem = document.getElementById("InputWrite").value;
//     if (ListItem.indexOf(addingItem) == -1) {
//         ListItem.push(addingItem);
//         document.getElementById("InputWrite").value = ""
//         LoadList();
//     }
//     else{
//         alert("Task already exist")
//     }
// }

var List = ["Wake Up"];
function LoadList() {
    document.getElementById("SelectList").innerHTML = "";
    List.map(function (value) {
        var option = document.createElement("option");
        option.text = value;
        option.value = value;
        document.getElementById("SelectList").appendChild(option)
    })
    document.getElementById("LengthOfList").innerHTML = "Total Task : " + List.length
}

function BtnAdd() {
    var AddItem = document.getElementById("InputWrite").value;
    if (AddItem == "") {
        alert("Please Item to add")
        document.getElementById("InputWrite").value = ""
    }
    else if (List.indexOf(AddItem) == -1) {
        List.push(AddItem);
        alert("Task Added Succefully")
        document.getElementById("InputWrite").value = ""
    }
    else {
        alert("Already Tast Exits")
    }
    LoadList()
}
function SortList() {
    if (List.length >= 2) {
        List.sort();
        LoadList()

    }
    else {
        alert("Please Add task to sort")
    }
}
function ReverseList() {
    List.reverse()
    LoadList()
}

function RemoveItem() {
    var SelectItem = document.getElementById("SelectList").value;
    console.log(SelectItem);
    var ListIndex = List.indexOf(SelectItem)
    console.log(ListIndex)
    var flag = confirm(`Are you sure to delete your task ${SelectItem}`)
    if (flag = true) {
        List.splice(ListIndex, 1)
        alert("Task Deleted Successfully")
        LoadList()
    }
}