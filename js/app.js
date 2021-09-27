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

/* #Scroll To
================================================== */
if (document.querySelector('.scroll-to-links')) {

  // Handling link clicks
  const scrollToLinks = document.querySelectorAll('.scroll-to-links a');

  scrollToLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const id = link.hash;
      const yOffset = -200; 
      const element = document.querySelector(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});

      for (let index = 0; index < scrollToLinks.length; index++) {
        scrollToLinks[index].classList.remove('active');
      }

      link.classList.add('active');
    });
  });
}

/* #About Team
================================================== */
const personList = document.querySelector('.about-team .person-list');

if (personList) {
  personList.addEventListener('click', (e) => {
    if (e.target.closest('.open')) {
      e.preventDefault();
      const person = e.target.closest('.person');
  
      person.classList.add('show');
      body.classList.add('overlay');
    } 
  
    if (e.target.closest('.close')) {
      e.preventDefault();
      const person = e.target.closest('.person');
  
      person.classList.remove('show');
      body.classList.remove('overlay');
    }
  });
}

/* #Jobs Gallery
======================================================= */
if (document.querySelector('.jobs-gallery .swiper-container')) {
  new Swiper('.jobs-gallery .swiper-container', {
    breakpoints: {
      0: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 2
      }
    },
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.jobs-gallery .swiper-arrows .right',
      prevEl: '.jobs-gallery .swiper-arrows .left',
    },
  });
}

/* #Jobs Gallery
======================================================= */
if (document.querySelector('.services-slider .swiper-container')) {
  new Swiper('.services-slider .swiper-container', {
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.services-slider .swiper-arrows .left',
      prevEl: '.services-slider .swiper-arrows .right',
    },
  });
}

/* #Projects Slider
======================================================= */
if (document.querySelector('.projects-slider .swiper-container')) {
  new Swiper('.projects-slider .swiper-container', {
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.projects-slider .swiper-arrows .left',
      prevEl: '.projects-slider .swiper-arrows .right',
    },
  });
}