
//Slider
$(document).ready(function(){
	$('.slider__content').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 3000,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
		responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
		]
	});
});

//Slideshow bg

$('.banner').fullClip({
  images: ['img/banner3.png', 'img/banner1.png', 'img/banner2.png', 'img/banner4.png','img/banner5.png','img/banner6.png'],
  transitionTime: 2000,
  wait: 5000
});

// Меню бургер
$(document).ready(function() {
  $('.nav__icon').click(function(event) {
    $('.nav__icon,.header__info').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$('.nav__body').click(function(){
    $('.nav__icon, .header__info').removeClass('active');
    $('body').removeClass('lock');
});




//медленный скролл
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

//button to top
$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop()>300){
    $('.scroll-top').fadeIn(250);
}
else{
    $('.scroll-top').fadeOut(250);
}
  });
  $('.scroll-top').click(function(){
$('html,body').animate(
    {scrollTop:0},400
);
  });
});









