
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

    var AdvancePay = document.getElementById("AdvanceAmount").value
    var Room = document.getElementById("InputDelux")
    var Aff = document.getElementById("InputSuit")
    // var Persons = document.getElementById("CustomerPerson")
    var AcRoom = document.getElementById("CheckBoxAC");
    document.getElementById("CustomerName").innerHTML = Name;
    document.getElementById("CustomerDate").innerHTML = CustomerDate;
    document.getElementById("CustomerDay").innerHTML = Day;
    document.getElementById("CustomerPerson").innerHTML = Person;


    let TotalPeron = Person - 2;
    let three = (TotalPeron * 1000) * Day;
    if (Person <= 2 && Room.checked && AcRoom.checked) {
        RoomCharge = 4000 * Day;

        AcCharge = 1000 * Day;
        document.getElementById("TotalPay").innerHTML = RoomCharge + AcCharge - AdvancePay + "&#8377";
        document.getElementById("RoomType").innerHTML = " Luxury Room 4000 &#8377 Per Day";
        document.getElementById("ACType").innerHTML = " AC Charge &#8377 1000 Per Day";

    }
    else if (Person <= 2 && (Room.checked || AcRoom.checked)) {
        RoomCharge = 2400 * Day;
        // AcCharge = 0
        if (AcRoom.checked) {
            AcCharge = 1000 * Day;
            document.getElementById("TotalPay").innerHTML = RoomCharge + AcCharge - AdvancePay + "&#8377";
            // document.getElementById("RoomType").innerHTML = "Luxury Room 4000 &#8377 Per Day";
            document.getElementById("ACType").innerHTML = " A / C Charge &#8377 1000 Per Day";
        }
            document.getElementById("ACType").innerHTML = " Non A / C Room";
            document.getElementById("TotalPay").innerHTML = RoomCharge  - AdvancePay + "&#8377   2 ";
        if (Room.checked) {
            RoomCharge = 4000 * Day
            // text = "Luxury Room :" + 4000 + " Per Day"
            document.getElementById("RoomType").innerHTML = "Luxury Room &#8377 Per Day"
            document.getElementById("TotalPay").innerHTML = RoomCharge  -AdvancePay + "&#8377"

        }
        document.getElementById("TotalPay").innerHTML = RoomCharge  - AdvancePay + " &#8377 ";
        // document.getElementById("ACType").innerHTML = "A / C Charge &#8377 1000 Per Day"
        // document.getElementById("RoomType").innerHTML = "Affordable Room 2400 &#8377 Per Day"
        // document.getElementById("ACType").innerHTML = "Non A / C Room"

    }
    else if (Person <= 2) {
        RoomCharge = 2400;
        document.getElementById("TotalPay").innerHTML = RoomCharge * Day - AdvancePay + "&#8377";
        document.getElementById("RoomType").innerHTML = " Affordable Room &#8377 2400 Per Day"
         document.getElementById("ACType").innerHTML = "  Non A / C Room ";
    }
    else if (Person > 2 && Room.checked && AcRoom.checked) {
        RoomCharge = 4000 * Day;

        AcCharge = 1000 * Day;
        document.getElementById("TotalPay").innerHTML = RoomCharge + AcCharge + three - AdvancePay + "&#8377";
        // document.getElementById("TotalPay").innerHTML = RoomCharge + AcCharge - AdvancePay;
        document.getElementById("RoomType").innerHTML = "  Luxury Room 4000 &#8377 Per Day";
        document.getElementById("ACType").innerHTML = "  A / C Charge &#8377 1000 Per Day";
    }
    else if (Person > 2 && (Room.checked || AcRoom.checked)) {
        RoomCharge = 2400 * Day;
        AcCharge = 0
        if (AcRoom.checked) {
            AcCharge = 1000 * Day
            document.getElementById("ACType").innerHTML = " A / C Charge &#8377 1000 Per Day";


        }

        if (Room.checked) {
            RoomCharge = 4000 * Day

            document.getElementById("RoomType").innerHTML = " Luxury Room 4000 &#8377 Per Day";
        }
        document.getElementById("TotalPay").innerHTML = RoomCharge + AcCharge + three - AdvancePay + "&#8377 ";
        // document.getElementById("ACType").innerHTML = " 12 Non A / C Room";
    }
    else if (Person > 2) {
        RoomCharge = 2400;
        document.getElementById("TotalPay").innerHTML = (RoomCharge * Day) + three - AdvancePay + "&#8377";
        document.getElementById("RoomType").innerHTML = "Affordable Room 2400 &#8377 Per Day";
        document.getElementById("ACType").innerHTML = "Non A / C Room";

    }

}
