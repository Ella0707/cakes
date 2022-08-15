// открытие формы и закрытие
$('.registration-link').click(function (e) {
  e.preventDefault();
  $('.form-reg').fadeIn(800);
  $('.form-login').fadeOut(800);
  $('body').addClass('lock');
});

$('.form-reg-close').click(function () {
  $('.form-reg').fadeOut(800);
  $('body').removeClass('lock');
});

// открытие и закрытие формы входа
$('.open-form-login').click(function (e) {
  e.preventDefault();
  $('.form-login').fadeIn(800);
  $('.form-reg').fadeOut(800);
  $('body').addClass('lock');
});

$('.form-login-close').click(function () {
  $('.form-login').fadeOut(800);
  $('body').removeClass('lock');
});







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


const activitySlider2 = new Swiper('#destroy-2', {
  // slidesPerView: 2,
  slidesPerView: 'auto',
  // spaceBetween: 20,
  speed: 800,
  loop: true,

  navigation: {
    nextEl: '.base__arrow-next',
    // prevEl: '.base__arrow-prev',
  },
});

if ($('#destroy-2').length) {
  if ($(window).width() <= 769) {
    activitySlider2.destroy();
  }
}


const boardSwiper = new Swiper('.confectioners__item-photo-main', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1200,
  loop: true,

  navigation: {
      prevEl: '.board-slider-prev',
      nextEl: '.board-slider-next',
  },

  effect: "fade",
  fadeEffect: {
      crossFade: true
  },
});



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

// класс active для фильтра (открыть фильтр в мобильной версии)

$('.confectioners__filter-open-btn').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.filter-open-btn').toggleClass("active");
  $('.filter-block-open').toggleClass("active");
});

// селект в фильтре
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle();
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp();
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 




const myCustomSlider = document.querySelectorAll('.gallery-top');
const myCustomGalleryThumbs = document.querySelectorAll('.thumbs-class');

for (i = 0; i < myCustomSlider.length; i++) {

    myCustomSlider[i].classList.add('gallery-top-' + i);
    myCustomGalleryThumbs[i].classList.add('thumbs-class-' + i);

    var galleryThumbs = new Swiper('.thumbs-class-' + i , {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
    });

    var galleryTop = new Swiper('.gallery-top-' + i, {
        spaceBetween: 10,
        slidesPerView: 1,
        effect: "fade",
        loop: true,

        navigation: {
              nextEl: ".confectioners__arrow-next",
              prevEl: ".confectioners__arrow-prev",
        },

        thumbs: {
            swiper: galleryThumbs
        }
    }); 
}

// переключение класса active в пагинации
$(".pagination__item").click(function (e) {
  e.preventDefault();
  $(".pagination__item").removeClass('active');
  $(this).addClass('active');
})








// ВАЛИДАЦИЯ ФОРМЫ РЕГИСТРАЦИИ


// показать/скрыть пароль
function show_hide_password(target) {
  let input = document.getElementById('password');
  if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input.setAttribute('type', 'text');
  } else {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
  }
  return false;
}

function show_hide_password_two(target) {
  let input = document.getElementById('confirm_password');
  if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input.setAttribute('type', 'text');
  } else {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
  }
  return false;
}



// проверка совпадают ли введенные пароли

function check() {
  if(document.getElementById('password').value ===
          document.getElementById('confirm_password').value) {
      document.getElementById('message').innerHTML = " ";
  } else {
      document.getElementById('message').innerHTML = "Введенные пароли не совпадают";
  }
}



// Ползунок выбора диапазона стоимости (Старница "Доска объявлений")

$( "#polzunok" ).slider({
  animate: "slow",
  range: true,
  min: 5,
  max: 1000,
  values: [ 10, 125 ],
        slide : function(event, ui) {    
            $("#result-polzunok-start").text(ui.values[ 0 ] + " BYN ");        
            $("#result-polzunok-end").text(ui.values[ 1 ] + " BYN " );        
        }
});
$( "#result-polzunok-start" ).text($("#polzunok").slider("values", 0) + " BYN ");
$( "#result-polzunok-end" ).text($("#polzunok").slider("values", 1) + " BYN ");



// выбор города с поиском на странице "мой профиль"
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};



