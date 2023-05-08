const search = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

const cart = document.querySelector('.cart');
const cartIcon = document.querySelector('#cart-icon');

const user = document.querySelector('.user');
const userIcon = document.querySelector('#user-icon');

searchIcon.addEventListener('click', () => {
    search.classList.toggle('active')
    cart.classList.remove('active')
    user.classList.remove('active')
})


cartIcon.addEventListener('click', () => {
    cart.classList.toggle('active')
    search.classList.remove('active')
    user.classList.remove('active')
})

userIcon.addEventListener('click', () => {
    user.classList.toggle('active')
    cart.classList.remove('active')
    search.classList.remove('active')
})

/** slider new */
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },

    }
});


let header = document.querySelector('header')
window.addEventListener('scroll', function () {
    header.classList.toggle('shadow', window.scrollY > 0)
})

let navBar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = function () {
    navBar.classList.toggle('active')
    search.classList.remove('active');
    user.classList.remove('active');
    cart.classList.remove('active')
}


window.onscroll = function () {
    navBar.classList.remove('active');
    search.classList.remove('active');
    user.classList.remove('active');
    cart.classList.remove('active')
}



/** select heart */
const hearts = document.querySelectorAll('.heart');

hearts.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})

/** show animation text preferential (Uu dai) */
const preferentialText = document.querySelector('.preferential-text');

const loadText = () => {
    setTimeout(() => {
        preferentialText.textContent = ''
    }, 0);
    setTimeout(() => {
        preferentialText.textContent = 'trở thành hội viên & hưởng ưu đãi 20%'
    }, 2000);
}
loadText()
clearTimeout(loadText, 5000)

/** slider trending */
var swiper = new Swiper(".trending-container", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

