 var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
    });

    let menu= document.querySelector('#menu-icon');
    let navbar= document.querySelector('.navbar');

    menu.addEventListener("click", ()=>{
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('navbar-active');
    });

    window.addEventListener('scroll', function() {
      menu.classList.remove('bx-x');
      navbar.classList.remove('navbar-active');
  });
