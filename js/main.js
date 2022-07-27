

// мобильное меню
$('.profile-open').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.profile-open').toggleClass("active");
  $('.profile__info').toggleClass("active");
});

// сайдбар пользователя
$('.header__burger-btn').on('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('lock');
    $('.header__burger-btn').toggleClass("active");
    $('.header__nav').toggleClass("active");
});



// слайдеры

const activitySlider = new Swiper('#destroy-1', {
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

if ($('#destroy-1').length) {
  if ($(window).width() <= 769) {
      activitySlider.destroy();
  }
}


// табы в профиле
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


// кнопка "наверх"
var btn = $('.footer__up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});

// класс active для ссылок в хэдере (навигация)
$(".header__nav ul li").click(function (e) {
    e.preventDefault();
    $(".header__nav ul li").removeClass('active');
    $(this).addClass('active');
})
