var AOS = require('aos');
import Swiper, { Pagination } from 'swiper';

var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

  // AOS
  AOS.init();

  // Menu
  let btnMenu = document.getElementsByClassName('btn-menu')[0];
  let header = document.getElementsByClassName('header-nav-block')[0];
  let body = document.getElementsByTagName('body')[0];
  let html = document.getElementsByTagName('html')[0];

  btnMenu.addEventListener('click', function(e) {
    btnMenu.classList.toggle('clicked');
    body.classList.toggle('overflow');
    html.classList.toggle('overflow');
    header.classList.toggle('active');
  });

  // Marketing Carousel
  const swiper = new Swiper('.marketing-carousel', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    modules: [Pagination],
    pagination: {
      el: ".marketing-pagination",
      clickable: true,
    },
    breakpoints: {
     0 : {
      slidesPerView: 1,
     },
     768 : {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3
     },
   },
  });
});
