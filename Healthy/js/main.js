/*
// Nav Mobile Open and Close
*/
function openNav() {
    let ele = document.getElementById("mySidebar")
    ele.classList.toggle('toggle-nav')
}

function closeNav() {
    let ele = document.getElementById("mySidebar")
    ele.classList.remove('toggle-nav')
}


/*
// Slider Programs section  
*/
const items = document.querySelectorAll('.programs .tabs .content');
let currentIndex = 0;
items[currentIndex].classList.add('activeList');

function switchToSlide(index) {
    items.forEach(item => {
        item.classList.remove('activeList');
    });

    currentIndex = index;
    items[currentIndex].classList.add('activeList');
}

function preSlide() {
    const previousIndex = (currentIndex - 1 + items.length) % items.length;
    switchToSlide(previousIndex);
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % items.length;
    switchToSlide(nextIndex);
}

const interval = setInterval(nextSlide, 4000);

items.forEach(item => {
    item.addEventListener('click', () => {
        clearInterval(interval);
    });
});



//Top Page 
let toPage = document.querySelector(".up-page");

window.onscroll = function () {
    if (this.scrollY >= 200) {
        toPage.style.marginRight = "0px";
    } else {
        toPage.style.marginRight = "-70px";
    }

}

/*
// Slider Message 
*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}




const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
let currentIndexslider = 0;

prevButton.addEventListener('click', () => {
    currentIndexslider = (currentIndexslider - 1 + 3) % 3;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndexslider = (currentIndexslider + 1) % 3;
    updateCarousel();
});

function updateCarousel() {
    const translateXValue = -currentIndexslider * 100;
    carousel.style.transform = `translateX(${translateXValue}%)`;
}



const carousel2 = document.querySelector('.carousel');
const prevButtonMobile = document.querySelector('.carousel-control-prev-mobile');
const nextButtonMobile = document.querySelector('.carousel-control-next-mobile');
let currentIndexsliderMobile = 0;

prevButtonMobile.addEventListener('click', () => {
    currentIndexsliderMobile = (currentIndexsliderMobile - 1 + 3) % 3;
    updateCarouselMobile();
});

nextButtonMobile.addEventListener('click', () => {
    currentIndexsliderMobile = (currentIndexsliderMobile + 1) % 3;
    updateCarouselMobile();
});

function updateCarouselMobile() {
    const translateXValue = -currentIndexsliderMobile * 100;
    carousel2.style.transform = `translateX(${translateXValue}%)`;
}
