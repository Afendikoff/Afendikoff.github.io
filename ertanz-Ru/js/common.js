$(function() {
  // Открытие мобильного меню
  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });
});

//Нажатие на кнопки
$('.main-nav__toggle').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('main-nav__toggle--active');
  $('.main-nav').toggleClass('menu-active')
});

$('.main-nav__list-item a').on('click', function(e) {
  e.preventDefault;
  $('.main-nav__toggle').toggleClass('main-nav__toggle--active');
  $('.main-nav').toggleClass('menu-active')
});


//модальное окно с картой
var mapLink = document.querySelector(".js-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var modalBg = document.querySelector(".modal-bg");


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  modalBg.classList.add("modal-show");
});

modalBg.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  modalBg.classList.remove("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  modalBg.classList.remove("modal-show");
});


//модальное окно со списком объектов
var listLink = document.querySelector(".js-button-list");
var listPopup = document.querySelector(".modal-list");
var listClose = listPopup.querySelector(".modal-list-close");
var modalBgList = document.querySelector(".modal-bg");


/* listLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  listPopup.classList.add("modal-list-show");
  modalBg.classList.add("modal-list-show");
  
}); */

$(function() {
  $('.js-button-list').click(function(){
    $('#modal-list-id').fadeIn(400);
    $(modalBgList).fadeIn(400);

    listPopup.classList.add("modal-list-show");
    modalBgList.classList.add("modal-list-show");
  });
});

modalBgList.addEventListener("click", function (evt) {
  evt.preventDefault();
  $('#modal-list-id').fadeOut(400);
  $(modalBgList).fadeOut(400);
  listPopup.classList.remove("modal-list-show");
  modalBgList.classList.remove("modal-list-show");
});

listClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  $('#modal-list-id').fadeOut(400);
  $(modalBgList).fadeOut(400);
  listPopup.classList.remove("modal-list-show");
  modalBgList.classList.remove("modal-list-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (listPopup.classList.contains("modal-list-show")) {
      listPopup.classList.remove("modal-list-show");
      modalBg.classList.remove("modal-list-show");
    }
  }
});


//fullpage

$(document).ready(function() {

  var $isAnimatedSecond = $('#section1 .is-animated');
      $isAnimatedSecondSingle = $('#section1 .is-animated__single');
      $isAnimatedThirdFirst = $('#section2 .is-animated__first');
      $isAnimatedThirdSecond = $('#section2 .is-animated__second');
      $isAnimatedThirdThird = $('#section2 .is-animated__third');
      $isAnimatedFourthFirst = $('#section3 .is-animated__first');
      $isAnimatedFourthSecond = $('#section3 .is-animated__second');
      $isAnimatedFourthThird = $('#section3 .is-animated__third');
      $isAnimatedFourthFourth = $('#section3 .is-animated__fourth');
      $isAnimatedFifth = $('#section4 .is-animated');
      $isAnimatedSixthFirst = $('#section5 .is-animated__first');
      $isAnimatedSixthSecond = $('#section5 .is-animated__second');
      $isAnimatedSixthThird = $('#section5 .is-animated__third');
      $isAnimatedSixthFourth = $('#section5 .is-animated__fourth');
      $isAnimatedSixthFifth = $('#section5 .is-animated__fifth');

	$('#fullpage').fullpage({
		//options here
    autoScrolling:true,
    anchors: ['Main','Aboutus','Products','Experience','Gallery','Contacts'],
    scrollHorizontally: true,
    navigation: true,
    scrollOverflow: true,
    menu: '#menu',
    navigationTooltips: ['Главная', 'О нас', 'Продукция', 'Опыт', 'Галерея', 'Контакты'],
    slidesNavigation: true,
    normalScrollElements: '#element1', 
    continuousHorizontal: true,
    //loopHorizontal: false

    onLeave: function(origin, destination, direction) {
      if(origin.index == 0 && destination.index == 1) { 
        $isAnimatedSecond.addClass('animated fadeIn').css('animation-delay', '.5s').css('animation-duration', '2s');
        $isAnimatedSecondSingle.addClass('animated fadeInUp').css('animation-delay', '1.5s').css('animation-duration', '1s'); 
      }
      else if( (origin.index == 0 || origin.index == 1 ) && destination.index == 2) {
        $isAnimatedThirdFirst.addClass('animated fadeInLeft').css('animation-delay', '.3s').css('animation-duration', '1s');
        $isAnimatedThirdSecond.addClass('animated fadeIn').css('animation-delay', '1.2s').css('animation-duration', '2s');
        $isAnimatedThirdThird.addClass('animated fadeInUp').css('animation-delay', '1.8s').css('animation-duration', '1s');
      }
      else if( (origin.index == 0 || origin.index == 1 || origin.index == 2) && destination.index == 3) {
        $isAnimatedFourthFirst.addClass('animated fadeIn').css('animation-delay', '.3s').css('animation-duration', '1s');
        $isAnimatedFourthSecond.addClass('animated fadeInUp').css('animation-delay', '0.8s').css('animation-duration', '1s');
        $isAnimatedFourthThird.addClass('animated fadeInUp').css('animation-delay', '1.6s').css('animation-duration', '1s');
        $isAnimatedFourthFourth.addClass('animated fadeInUp').css('animation-delay', '1.6s').css('animation-duration', '1s');
      }
      else if( (origin.index == 0 || origin.index == 1 || origin.index == 2 || origin.index == 3) && destination.index == 4) {
        $isAnimatedFifth.addClass('animated fadeInUp').css('animation-delay', '.3s').css('animation-duration', '1s');
      }
      else if( (origin.index == 0 || origin.index == 1 || origin.index == 2 || origin.index == 3 || origin.index == 4) && destination.index == 5) {
        $isAnimatedSixthFirst.addClass('animated fadeIn').css('animation-delay', '.3s').css('animation-duration', '1s');
        $isAnimatedSixthSecond.addClass('animated fadeInRight').css('animation-delay', '0.5s').css('animation-duration', '1s');
        $isAnimatedSixthThird.addClass('animated fadeInRight').css('animation-delay', '0.7s').css('animation-duration', '1s');
        $isAnimatedSixthFourth.addClass('animated fadeInRight').css('animation-delay', '0.9s').css('animation-duration', '1s');
        $isAnimatedSixthFifth.addClass('animated fadeInRight').css('animation-delay', '1.1s').css('animation-duration', '1s');
      }
    } 
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});


//magnificPopup

$('.gallery-img').magnificPopup({
  
  type : 'image',
  gallery : {
    enabled: true
  },
  
});
  
