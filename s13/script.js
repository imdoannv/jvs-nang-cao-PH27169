'use strict';   

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.openrations__tab');
const tabsContainer = document.querySelector('.openrations__tab-container');
const tabsContent = document.querySelectorAll('.openrations__content');
///////////////////////////////////////
// Modal window



const openModal = function () {
  e.preventDefault();
  
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// // // // // // // // Video 192 s13


// // // // // // // // Video 186 s13
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('.cookie-message');

// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class= "btn--close--cookie"><Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));


// // header.before(message);
// // header.after(message);


// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function(){
//     // message.remove();
//     messsage.parentElement.removeChild(message);
//   });


// // // // // // // // Video 187 s13

// // Styles
// message.style.backgroundColor = '#373383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).height,10)+ 30 +'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Banklist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classses
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); //not includes

// // Don't use
// logo.className = 'jonas';


// // // // // // // // Video 188 s13

// Buton Crolling
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
  
//   // Crolling
//   // window.scrollTo(
//   //     s1coords.left + window.pageXOffset,
//   //     s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // })
//   section1.scrollIntoView({ behavior: 'smooth'});
// });

// Page navigation
// document.querySelectorAll('.nav_link').forEach(function (el){
//   el.addEvemtListener('click', function(e){
//     e.preventDefault();
//     console.log('LINK');
//     const id = this.getAtrribute('href');
//     console.log(id);
//     document.querySelector(id).crolllIntoView({
//       behavior:'smooth'
//     });
//   })
// });

// // // // // // // // // Video 194 s13
// Tabbed componnent
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('operations__content');

// tabsContainer.addEventListener('click', function(e){
//   const clicked = e.target.closest('.operations__tab');
//   console.log(clicked);
  
//   // Guard clause
//   if(!clicked) return;

//   // Remove active classes 

//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach(c=> c.classList.remove('operations__tab--active'));
  
//   // Active tab 
//   clicked.classList.add('operations__tab--active');


//   // Activate content area
//   console.log(clicked.dataset.tab);
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations_content--active');


// });


// // // // // // // // // Video 195 s13

// Menu fade animation 
const handleHover = function(e, opacity){

  if(e.target.classList.contains('.nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = opacity = this;
    });
    logo.style.opacity = opacity = this;
  }
}


nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));



// // // // // // // // // Video 196 s13
//Sticky navigation 
// const initialCoord = section1.getBoundingClientRect();
// console.log(initiacoords);

// window.addEventListener('scroll', function(){
//   console.log(window.scrollY);

//   if(window.scrollY > initialCoords.top)
//     nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// });


// Thêm trình xử lý sự kiện vào phần tử mẹ chung
// Xác định yếu tố nào đã tạo ra sự kiện

// document.querySelectorAll('.nav__links').addEventListener('click', function(e){
//   e.preventDefault();

//   // Matching stratery
//   if (e.targer.classList.contains('nav__link')){
    
//     const id = e.target.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'});
//   }
// });

// // // // // // // // // Video 189 s13

// const h1 = document.querySelector('h1');

// const alertH1 = function (e){
//   alert('addEventListener: Great! You are reading the heading :D');
// }


// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // h1.onmouseenter =  function(e){
// //   alert('onmouseenter: Great! You are reading the heading :D');
// // };


// // // // // // // // // Video 191 s13
// // rgb(255,255,255)

// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min +1) + min);
//     const randomColor = () =>
//     `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //Stop stopPropagation();
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });


// // // // // // // // // Video 193 s13
 const h1 = document.querySelector('h1');

// Going downards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

h1.closest('.header').style.background = 'var(--gradient-secondry)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el){
  if (el !== h1) el.style.transfrom = 'scale(0.5)';
});


// // // // // // // // // Video 200 s13
// const imgObserver = new IntersectionObserver(loadImg,{
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });

// imgTargets.forEach(img => imgObserver.obserer(img));

// Sliber
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right')

let curSlide = 0;
const maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transfrom = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible' ;

slides.forEach((s, i) => (s.style.transfrom = `translateX(${100 * i}%)`));

// const goToSlide = function(slide){
//   slide.forEach(
//    (s,i) => (s.style.transfrom = `translateX(${100 * (i - slide)})`)
//   )
// }

// goToSlide(0);

// Next slide
const nextSlide =  function(){
  if(curSlide == maxSlide -1){
    curSlide = 0;
  }else{
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function(){
  if(curSlide === 0){
    curSlide = maxSlide -1;
  }else{
    curSlide--
  }
  goToSlide(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
