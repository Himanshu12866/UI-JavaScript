var count = 1
function ShowProgress(){
    var imgContainer = document.getElementById("imgContainer")
    count++;
    document.getElementById("progressBar").value = count;
    document.getElementById("lblStatus").innerHTML = `${count} % completed`;
    if(count == 100){
        document.getElementById("progressBar").style.display = "none"
        document.getElementById("BtnBox").style.display = "none"
        document.getElementById("lblStatus").style.display = "none";
        imgContainer.style.display = "block";
        imgContainer.style.animation = "ZoomIn 2s infinite"
    }
}
var timer;
function LoadClick(){
    document.getElementById("btnContainer").style.display = "none";
    document.getElementById("progressContainer").style.display = "block"
    timer = setInterval(ShowProgress, 100);

}
function PauseClick(){
    clearInterval(timer)
    document.getElementById("lblStatus").innerHTML = `${count} % completed Paused`
}
function PlayClick(){
    timer = setInterval(ShowProgress, 100)
}