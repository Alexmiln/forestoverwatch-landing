const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  if(primaryNav.hasAttribute("data-visible")){
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoHeight: false,
    observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 20,
    speed: 800,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        // when window width is <= 320px
        320: {
            spaceBetween: 20,
        },
        // when window width is <= 480px
        480: {
            spaceBetween: 20,
        },
        // when window width is <= 640px
        640: {
            spaceBetween: 20,
        },
    },
  });