const carousel = document.querySelectorAll('.card');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');


setInterval(nextSlide, 5000)
let currentSlide = 0;

function hideSlide() {
    carousel.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    carousel[currentSlide].classList.add('on')
}


function nextSlide() {
    hideSlide()
    if (currentSlide === carousel.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlide()
}

function prevSlide() {
    hideSlide()
    if (currentSlide === 0) {
        currentSlide = carousel.length - 1
    } else {
        currentSlide--
    }
    showSlide()
}

/*
btnNext.addEventListener('click', ()=> alert('clicou'))
btnPrev.addEventListener('click', ()=> alert('clicou'))
*/

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)

