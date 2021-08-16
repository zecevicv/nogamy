/* #Dropdown
    ======================================================= */
const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns) {
  dropdowns.forEach((dropdown) => {
    if (window.innerWidth > 1024) {
      dropdown.addEventListener('mouseover', (e) => {
        dropdown.classList.add('show');
      });
      dropdown.addEventListener('mouseout', (e) => {
        dropdown.classList.remove('show');
      });
    } else {
      dropdown.addEventListener('click', (e) => {
        if (e.target.closest('.dropdown-toggler')) {
          e.preventDefault();
          dropdown.classList.toggle('show');
        }
      });
    }
  });
}

/* #Home Services Slider
======================================================= */
if (document.querySelector('.home-services .swiper-container')) {
  new Swiper('.home-services .swiper-container', {
    navigation: {
      nextEl: '.home-services .swiper-arrows .left',
      prevEl: '.home-services .swiper-arrows .right',
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerView: 1.25
      },
      1024: {
        allowTouchMove: false,
        slidesPerView: 1
      }
    }
  });
}

/* #Reviews Slider
======================================================= */
if (document.querySelector('.reviews .swiper-container')) {
  new Swiper('.reviews .swiper-container', {
    breakpoints: {
      0: {
        slidesPerView: 1.25
      },
      1024: {
        slidesPerView: 3.25
      }
    }
  });
}