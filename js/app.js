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

/* #Video Modal
  ======================================================= */
const body = document.querySelector('body');
const videoModalToggler = document.querySelector('.home-banner .video');

// Message Modal Handler
if (videoModalToggler) {
  videoModalToggler.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector(videoModalToggler.dataset.modal);

    if (modal) {
      modal.classList.toggle('show');
      body.classList.toggle('no-scroll');
    }
  });
}

// Modal Close
const videoModal = document.querySelector('.video-modal');

if (videoModal) {
  videoModal.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.modal-close')) {
      videoModal.classList.toggle('show');
      body.classList.toggle('no-scroll');
    }
  });
}

/* #Blog Posts Slider
======================================================= */
if (document.querySelector('.blog-posts-slider .swiper-container')) {
  new Swiper('.blog-posts-slider .swiper-container', {
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.blog-posts-slider .swiper-arrows .right',
      prevEl: '.blog-posts-slider .swiper-arrows .left',
    },
  });
}
