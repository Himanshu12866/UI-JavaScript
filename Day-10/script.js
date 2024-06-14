
function CheckInput() {
    document.getElementById("InputDelux").checked = true;
    document.getElementById("InputSuit").checked = false
}
function CheckInpuT() {
    document.getElementById("InputDelux").checked = false;
    document.getElementById("InputSuit").checked = true;

}
function CheckAc() {
    document.getElementById("CheckBoxAC").checked = true;
    document.getElementById("CheckBoxNonAC").checked = false;
}
function CheckAC() {
    document.getElementById("CheckBoxAC").checked = false;
    document.getElementById("CheckBoxNonAC").checked = true;
}
function Checkout() {

    var Name = document.getElementById("InputName").value;
    var CustomerDate = document.getElementById("InputDate").value;
    var Day = document.getElementById("InputDay").value;
    var Person = document.getElementById("InputPerson").value;
    var ExtraPerson = Person + " ( 1000 &#8377 Per Person)" + " Total:  " + Person * 1000;
    var AdvancePay = document.getElementById("AdvanceAmount").value
    var Room = document.getElementById("InputDelux");
    var Aff = document.getElementById("InputSuit");
    var AcRoom = document.getElementById("CheckBoxAC");
    document.getElementById("CustomerName").innerHTML = Name;
    document.getElementById("CustomerDate").innerHTML = CustomerDate;
    document.getElementById("CustomerDay").innerHTML = Day;
    document.getElementById("CustomerPerson").innerHTML = ExtraPerson;

    switch (true) {
        case (Person <= 2 && Room.checked && AcRoom.checked):
            document.getElementById("TotalPay").innerHTML = (4000 + 1000 - AdvancePay) * Day + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = Person;
            document.getElementById("ACType").innerHTML = "1000 &#8377 / Day A / C Room ";
            document.getElementById("RoomType").innerHTML = "Super Delux Luxuray Room"
            break;
        case (Person <= 2 && Room.checked):
            document.getElementById("TotalPay").innerHTML = (4000 * Day) - AdvancePay + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = Person;
            document.getElementById("ACType").innerHTML = " Non A / C Room ";
            document.getElementById("RoomType").innerHTML = "Super Delux Luxuray Room"
            break;
        case (Person <= 2 && AcRoom.checked):
            document.getElementById("TotalPay").innerHTML = (2400 + (1000 * Day)) * Day - AdvancePay + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = Person;
            document.getElementById("ACType").innerHTML = "1000 &#8377 / Day A / C Room ";
            document.getElementById("RoomType").innerHTML = "Affordable Room"
            break;
        case (Person <= 2):
            document.getElementById("TotalPay").innerHTML = 2400 * Day - AdvancePay + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = Person;
            document.getElementById("ACType").innerHTML = " Non A / C Room ";
            document.getElementById("RoomType").innerHTML = "Affordable Room";
            break;
        case (Person > 2 && AcRoom.checked && Room.checked):
            document.getElementById("TotalPay").innerHTML = (4000 * Day) + (1000 * Day) + (1000 * Day) - AdvancePay + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = ExtraPerson;
            document.getElementById("ACType").innerHTML = "1000 &#8377 / Day A / C Room ";
            document.getElementById("RoomType").innerHTML = "Super Luxury Room";
            break;
        case (Person > 2 && Room.checked):
            document.getElementById("TotalPay").innerHTML = (4000 * Day) + (1000 * Day) - AdvancePay + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = ExtraPerson;
            document.getElementById("ACType").innerHTML = " Non A / C Room ";
            document.getElementById("RoomType").innerHTML = "Super Luxury Room";
            break;
        case (Person > 2 && AcRoom.checked):
            document.getElementById("TotalPay").innerHTML = (2400 * Day) + (2000 * Day) - AdvancePay + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = ExtraPerson;
            document.getElementById("ACType").innerHTML = "1000 &#8377 / Day A / C Room ";
            document.getElementById("RoomType").innerHTML = "Affordable Room";
            break;
        case (Person > 2):
            document.getElementById("TotalPay").innerHTML = (2400 * Day) + (1000 * Day) - AdvancePay + "&#8377";
            Name.innerHTML = Name;
            CustomerDate.innerHTML = CustomerDate;
            Day.innerHTML = Day;
            Person.innerHTML = ExtraPerson;
            document.getElementById("ACType").innerHTML = " Non A / C Room ";
            document.getElementById("RoomType").innerHTML = "Affordable Room";
            break;
    }

}
