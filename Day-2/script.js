function Bookbtn() {
    document.getElementById("btnBook").style.display = "none";
    document.getElementById("summaryContainer").style.display = "block";
    document.getElementById("nameMovie").innerHTML = document.getElementById("lstMovies").value;
    document.getElementById("nameDate").innerHTML = document.getElementById("lstDate").value;
    document.getElementById("nameCinema").innerHTML = document.getElementById("lstCinema").value;
    document.getElementById("nameTime").innerHTML = document.getElementById("lstTiming").value;


    image = document.getElementById("imgPoster");
    Moviename = document.getElementById("lstMovies").value;


    if (Moviename == "AgniPath") {
        image.src = "../images/agnipath.png";
    }
    else {
        image.src = "../images/kaali.png";
    }
}
function btnModify() {
    document.getElementById("bktkt").innerHTML = "Modify Ticket";
    document.getElementById("book-ticket").innerHTML = "Save";
    document.getElementById("book-ticket").className = "btn btn-success";
}