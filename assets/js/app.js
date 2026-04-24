// dark mode 
let toggleThemeBtn = document.querySelector('#toggle-theme-btn');
toggleThemeBtn.addEventListener('click' , function(){
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
});

// swiper slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1536: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

// swiper readings 
var readingsSwiper = new Swiper(".myreadingsSwiper", {
    slidesPerView: 4,
    spaceBetween: 22,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-custom-readings",
        prevEl: ".swiper-button-prev-custom-readings",
    },
    // breakpoints: {
    //     1024: {
    //         slidesPerView: 2,
    //         spaceBetween: 16,
    //     },
    //     1536: {
    //         slidesPerView: 3,
    //         spaceBetween: 24,
    //     },
    // },
});