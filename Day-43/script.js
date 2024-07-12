class DataBase {
    constructor(dbName){
        alert(`Connected With the DataBase ${document.querySelector("select").value}`)
    }
    Insert(){
        alert("Item Added to Data Base Successfully")
    }
    Delete(){
        alert("Item Deleted From Data Base Successfully")
    }
}
function InsertBtn(){
    let obj = new DataBase()
    obj.Insert()
}
function DeleteBtn(){
    let obj = new DataBase();
    obj.Delete()
}