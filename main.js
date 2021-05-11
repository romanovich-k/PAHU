// Меню бургер
$(document).ready(function() {
	$('.nav__icon').click(function(event) {
		$('.nav__icon,.header__info').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.nav__body').click(function(){
    $('.nav__icon, .nav__body').removeClass('active');
    $('body').removeClass('lock');
});




//Спойлеры

$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
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
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

//Плавающая шапка
window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 190);
});

//Slider
const sliderItem = document.querySelectorAll('.slider .slider__item');
const sliderContent = document.querySelector('.slider .slider__content');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderContent.style.width = width * sliderItem.length + 'px';
  sliderItem.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__next').addEventListener('click', function () {
  count++;
  if (count >= sliderItem.length) {
      count = 0;
  }
  rollSlider();
});

document.querySelector('.slider__prev').addEventListener('click', function () {
  count--;
  if (count < 0) {
      count = sliderItem.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderContent.style.transform = 'translate(-' + count * width + 'px)';

}

//Дата в форме
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;