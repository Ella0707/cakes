

// мобильное меню
// $('.header__burger').on('click', function (e) {
//     e.preventDefault();
//     document.body.classList.toggle('lock');
//     $('.header__burger').toggleClass("active");
//     $('.header__bottom').toggleClass("active");
// });



// слайдеры
new Swiper('.profile__portfolio-slider', {
    slidesPerView: 3.4,
    observer: true,
    observeParents: true,
    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
    },
});

function openTab(evt, tabsName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("profile__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " active";
}