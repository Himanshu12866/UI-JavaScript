let currentSlide = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const numSlides = slides.length;
    currentSlide = (currentSlide + n + numSlides) % numSlides;
    
    document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100
        }%)`;
}
function DotClick1() {
    document.querySelector(
        ".slides"
    ).style.transform = `translateX(-${0}%)`;
}
function DotClick2() {
    document.querySelector(
        ".slides"
    ).style.transform = `translateX(-${100}%)`;
}
function DotClick3() {
    document.querySelector(
        ".slides"
    ).style.transform = `translateX(-${200}%)`;
}