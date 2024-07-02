let currentSlide = 0;
function changeSlide(n){
    const slides = document.querySelectorAll(".slide");
    const numSlides= slides.length;
    currentSlide = (currentSlide + n + numSlides) % numSlides;
    document.querySelector(".slides")
}