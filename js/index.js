
var main = document.querySelector('.main');
var aside = main.querySelector('.aside');

function onScroll() {
  var mainOffsetTop = main.offsetTop;
  var scrollTop = window.scrollY;

  if (scrollTop >= mainOffsetTop) {
    aside.classList.add('aside--fixed');
  } 

  if (scrollTop < mainOffsetTop) {
    aside.classList.remove('aside--fixed');
  } 
}

window.addEventListener('scroll', onScroll)
window.addEventListener('resize', onScroll)

const scrollLink = document.querySelector('.scroll__link');
const anchors = document.querySelectorAll('.navigation-item__link');

const scrollSmooth = function (anchor) {
  const blockID = anchor.getAttribute('href')
  document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

for (let anchor of anchors) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault()
    scrollSmooth(anchor);
  })
};

scrollLink.addEventListener('click', function (evt) {
  evt.preventDefault()
  scrollSmooth(scrollLink);
})
