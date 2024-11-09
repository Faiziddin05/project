var slideIndex = 1;
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function nextSlide(n) {
    showSlide(slideIndex += n);
}
function showSlide(n) {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.first_image');
    if(n < 1){
        slideIndex = slides.sldie.length - 1;
    }
    if (n > slides.length){
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    for (let i = 0; i < slides.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block'; // Отображение текущего слайда
    slides[slideIndex -1].classList.add('fade');
    dots[slideIndex - 1].classList.add('active'); // Наложение hover на точку
};

document.querySelector('.prev').addEventListener('click', function(){
    nextSlide(-1);
});
document.querySelector('.next').addEventListener('click', function(){
    nextSlide(1);
});
const dots = document.querySelectorAll('.dot');
dots.forEach(function(dot, index){
    dot.addEventListener('click', function(){
        currentSlide(index + 1);
    });
});

showSlide(slideIndex);