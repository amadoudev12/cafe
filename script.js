const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")
const navButton = document.querySelectorAll(".nav-list .nav-item")
// open the nav list menu 
menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-menu-list")
})
// close the nav list menu 
menuCloseButton.addEventListener("click",()=> menuOpenButton.click())

// close menu when the menu list is clicked

navButton.forEach(btn =>{
    btn.addEventListener("click",()=> menuCloseButton.click())
})


// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween: 25,
  
    // If we need pagination point
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive breakpoints espace entre les elements
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
  });