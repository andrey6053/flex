"use strict"

// burger 

const hb = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header');
const lock = document.querySelector('body');
const openBtn = document.querySelector('.title__btn')
const closeBtn = document.querySelector('#close')
const modal = document.querySelector('.modal')
const headerItems = document.querySelectorAll('.header__item')
const btnToHeader = document.querySelector('.back-to-header')

window.addEventListener('scroll', function () {
   scrollFunction();
})

function scrollFunction() {
   if (document.documentElement.scrollTop > 20) {
      btnToHeader.style.display = "block";
   } else {
      btnToHeader.style.display = "none";
   }
}

function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

openBtn.addEventListener('click', openModal)

function openModal() {
   modal.style.display = 'grid'
}

closeBtn.addEventListener('click', closeModal)

function closeModal() {
   modal.style.display = 'none'
}

for (let index = 0; index < headerItems.length; index++) {
   let button = headerItems[index];
   button.addEventListener('click', function (event) {
      if (menu.classList.contains('active')) {
         menu.classList.toggle('active')
         lock.classList.toggle('lock')
      }
   });
}

hb.addEventListener('click', function () {
   menu.classList.toggle('active')
   lock.classList.toggle('lock')
})

