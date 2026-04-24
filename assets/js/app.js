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
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-custom-readings",
        prevEl: ".swiper-button-prev-custom-readings",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1536: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

//open and close mobile sub menu
let openMobileSubMenuBtn = document.querySelector('.open_mobile_sub_menu_btn');
let mobileSubMenu = document.querySelector('.mobile_sub_menu');

openMobileSubMenuBtn.addEventListener('click', function() {
    mobileSubMenu.classList.toggle('hidden'),
    openMobileSubMenuBtn.classList.toggle('rotate-180')
});

// open and close mobile nav
let burgerBtn = document.querySelector('.burger_btn');
let mobileNav = document.querySelector('.mobile_nav');
let blackLayer = document.querySelector('.black_layer');
let closeMobileNav = document.querySelector('.close_mobile_nav');

burgerBtn.addEventListener('click', function() {
    mobileNav.classList.remove('-right-79');
    mobileNav.classList.add('right-0');
    blackLayer.classList.toggle('hidden');
});

closeMobileNav.addEventListener('click', function() {
    mobileNav.classList.remove('right-0');
    mobileNav.classList.add('-right-79');
    blackLayer.classList.toggle('hidden');
});

blackLayer.addEventListener('click', function() {
    // close menu
    mobileNav.classList.remove('right-0');
    mobileNav.classList.add('-right-79');
    //close shopping card
    mobileShoppingCard.classList.remove('bottom-0');
    mobileShoppingCard.classList.add('-bottom-full');

    blackLayer.classList.toggle('hidden');
});


let shoppingCardBtn = document.querySelector('.shopping_card_btn');
let mobileShoppingCard = document.querySelector('.mobile_shopping_card');
let closeShoppingCardBtn = document.querySelector('.close_shopping_card_btn')

shoppingCardBtn.addEventListener('click', function() {
    if(window.matchMedia('(max-width: 1279px)').matches){
        mobileShoppingCard.classList.remove('-bottom-full');
        mobileShoppingCard.classList.add('bottom-0');
        blackLayer.classList.toggle('hidden');
    }
});

closeShoppingCardBtn.addEventListener('click', function() {
    mobileShoppingCard.classList.remove('bottom-0');
    mobileShoppingCard.classList.add('-bottom-full');
    blackLayer.classList.toggle('hidden');
});