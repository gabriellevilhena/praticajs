

let currentSlide = 0;
const slides=document.querySelectorAll('.slides img');
const totalSlides = slides.length;


    document.querySelector('.next').addEventListener('click', function(){
        currentSlide=(currentSlide + 1) % totalSlides;
        updateCarrossel();
    });
    document.querySelector('.prev').addEventListener('click', function(){
        currentSlide=(currentSlide - 1 + totalSlides) % totalSlides;
        updateCarrossel();
    });



function updateCarrossel(){
    const imageWidth= slides[0].clientWidth;
    const offset= -(currentSlide * (imageWidth + 10));
    document.querySelector('.slides').style.transform=`translateX(${offset}px)`;
}

setInterval(() => {
    document.querySelector('.next').click()
}, 3000);

console.log('total slides:', totalSlides);
