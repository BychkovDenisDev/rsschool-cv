/*Slider (start)*/

const btnPrew = document.getElementById('btn-prew');
const btnNext = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let offSet = 0;
let index = 0;

const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const preparenCurrenSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        preparenCurrenSlide(index);
    } else {
        index++;
        preparenCurrenSlide(index);
    }
}

const prewSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        preparenCurrenSlide(index);
    } else {
        index--;
        preparenCurrenSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        preparenCurrenSlide(index);
    });
});

btnNext.addEventListener('click', nextSlide);
btnPrew.addEventListener('click', prewSlide);

setInterval(nextSlide, 3500);

/*Slider (end)*/