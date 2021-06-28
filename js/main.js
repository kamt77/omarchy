const readMoreBtn = document.querySelector('.read_more_btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show_more');
    if (readMoreBtn.innerText === 'Read More') {
        readMoreBtn.innerText = 'Read Less';
    } else {
        readMoreBtn.innerText = 'Read More';
    }
})

// -----------------------------------------------------

const readMoreBtn1 = document.querySelector('.read_more_btn1');
const text1 = document.querySelector('.text1');

readMoreBtn1.addEventListener('click', (e) => {
    text1.classList.toggle('show_more1');
    if (readMoreBtn1.innerText === 'Read More') {
        readMoreBtn1.innerText = 'Read Less';
    } else {
        readMoreBtn1.innerText = 'Read More';
    }
})

// -----------------------------------------------------

const readMoreBtn2 = document.querySelector('.read_more_btn2');
const text2 = document.querySelector('.text2');

readMoreBtn2.addEventListener('click', (e) => {
    text2.classList.toggle('show_more2');
    if (readMoreBtn2.innerText === 'Read More') {
        readMoreBtn2.innerText = 'Read Less';
    } else {
        readMoreBtn2.innerText = 'Read More';
    }
})

// -----------------------------------------------------

const readMoreBtn3 = document.querySelector('.read_more_btn3');
const text3 = document.querySelector('.text3');

readMoreBtn3.addEventListener('click', (e) => {
    text3.classList.toggle('show_more3');
    if (readMoreBtn3.innerText === 'Read More') {
        readMoreBtn3.innerText = 'Read Less';
    } else {
        readMoreBtn3.innerText = 'Read More';
    }
})