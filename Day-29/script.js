var ImageId = 1;
function AutoScroll(PrductId){
fetch("data.json")
.then(response => {
    return response.json()
})
.then(data => {
    // var image = document.getElementById("image");
    // image.src = `${data.ImageId.image}`
    console.log(data)
})
}