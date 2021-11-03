const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

const transformSlide = 'translateX(' + (-size * counter) +'px)';

//Buttons listeners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
})




const carouselSlide2 = document.querySelector('.carousel-slide2');
const carouselImages2 = document.querySelectorAll('.carousel-slide2 img');

//buttons
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

//counter
let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

const transformSlide2 = 'translateX(' + (-size * counter2) +'px)';

//Buttons listeners

nextBtn2.addEventListener('click', () => {
    if(counter2 >= carouselImages2.length - 1) return;
    carouselSlide2.style.transition = "transform 0.8s ease-in-out";
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) +'px)';
    
})

prevBtn2.addEventListener('click', () => {
    if(counter2 <= 0) return;
    carouselSlide2.style.transition = "transform 0.8s ease-in-out";
    counter2--;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) +'px)';
    
})

carouselSlide2.addEventListener('transitionend', () => {
    if (carouselImages2[counter2].id === 'lastClone') {
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - 2;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) +'px)';
    }

    if (carouselImages2[counter2].id === 'firstClone') {
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - counter2;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) +'px)';
    }
})
