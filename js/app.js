/* #Hamburger Menu
  ======================================================= */
const hamburgerBtn = document.querySelector('.header-hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
  });
}

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

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

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

/* #Logo Slider
  ======================================================= */
if (document.querySelector('.home-technologies .swiper-container')) {
  new Swiper(".home-technologies .swiper-container", {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1
    },
    allowTouchMove: false,
    freeMode: true,
    speed: 2000,
    freeModeMomentum: false,
    breakpoints: {
      0: {
        slidesPerView: 4.5,
      },
      1024: {
        slidesPerView: 12,
      }
    }
  });
}

if (document.querySelector('.technologies-page .banner .swiper-container')) {
  new Swiper(".technologies-page .banner .swiper-container", {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1
    },
    allowTouchMove: false,
    freeMode: true,
    speed: 2000,
    freeModeMomentum: false,
    breakpoints: {
      0: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6.5,
      }
    }
  });
}

/* #Home Customers Animation
    ======================================================= */
const customerLogos = document.querySelectorAll('.home-customers .logo');

if (customerLogos) {
  let runFunctions = () => {
    tlFn();
  }

  let logoSwitchFn = () => {
    const customerLogoList = document.querySelectorAll('.home-customers .logo ul');
  
    customerLogoList.forEach((list, listIndex) => {
      const listItems = list.querySelectorAll('li');
      let i = 0;
  
      listItems.forEach((item, index) => {
        if (item.classList.contains('active')) {
          i = index;
        }
      });
  
      let timeoutFn = () => {
        setTimeout(function(){ 
          if (i > 0) {
            listItems[i-1].classList.remove('active');
          }
    
          if (i == listItems.length) {
            i = 0;
            listItems[listItems.length - 1].classList.remove('active');
          }
    
          listItems[i].classList.add('active');
          i++;
    
          timeoutFn();
        }, 4000);
      };
  
      setTimeout(timeoutFn, listIndex * 150);
    });
  }
  logoSwitchFn();

  let tlFn = () => {
    let timeline = gsap.timeline({repeat: -1, yoyo: true});
  
    timeline.to(customerLogos, {
      duration: 1.5, 
      ease: 'Elastic.easeOut.config(2, .5)',
      y: '-10px',
      stagger:{ each: 0.05, from: 'random' }
    });
  };

  gsap.from(customerLogos, {
    duration: .8, 
    ease:"Elastic.easeOut.config(2, .5)", 
    opacity: 0, 
    scale: .3,
    stagger:{ each: 0.15, from: 'right' },
    scrollTrigger: {
      trigger: ".home-customers .text",
    },
    onComplete: runFunctions
  });

}

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});