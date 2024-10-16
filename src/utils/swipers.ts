import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade, Pagination];

  const swiperEls = document.querySelectorAll('[swiper-option]') as NodeListOf<HTMLElement>;
  if (!swiperEls) return;

  const swiperExpertiseOpt = {
    modules: swiperModules,
    speed: 500,
    slidesPerView: 2.3,
    allowTouchMove: true,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      480: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 2.1,
      },
      991: {
        slidesPerView: 1.7,
      },
      1350: {
        slidesPerView: 2.3,
      },
    },
    // pagination: {
    //   el: '.home_articles_nav-bullet-wrap',
    //   bulletClass: 'home_articles_nav-bullet',
    //   bulletActiveClass: 'home_articles_nav-bullet-active',
    //   clickable: true,
    // },
  };

  const swiperServiceOpt = {
    modules: swiperModules,
    speed: 500,
    slidesPerView: 2.3,
    allowTouchMove: true,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1.2,
      },
    },
  };

  const swiperTestimonialOpt = {
    modules: swiperModules,
    speed: 500,
    slidesPerView: 2.3,
    allowTouchMove: true,
    spaceBetween: 24,
    initialSlide: 1,
    centeredSlides: true,
    // centeredSlidesBounds: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
        centeredSlides: false,
        centeredSlidesBounds: false,
      },
      480: {
        slidesPerView: 1,
        initialSlide: 0,
      },
      767: {
        slidesPerView: 1.2,
      },
      991: {
        slidesPerView: 1.7,
      },
      1350: {
        slidesPerView: 1.6,
      },
    },
    pagination: {
      el: '.home_testimonials_pagg-wrap',
      bulletClass: 'home_testimonials_pagg-dot',
      bulletActiveClass: 'home_testimonials_pagg-dot-active',
      clickable: true,
    },
  };

  const swiperPositionOpt = {
    modules: swiperModules,
    speed: 500,
    slidesPerView: 2.3,
    allowTouchMove: true,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
    },
  };

  const swiperPartnersOpt = {
    modules: swiperModules,
    speed: 500,
    slidesPerView: 2.3,
    allowTouchMove: true,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
    },
  };

  const windowWidth = window.innerWidth;
  swiperEls?.forEach((swiperEl) => {
    if (swiperEl.getAttribute('swiper-option') === 'expertise') {
      const swiper = new Swiper(swiperEl, swiperExpertiseOpt);
    } else if (swiperEl.getAttribute('swiper-option') === 'service' && windowWidth < 768) {
      const swiper = new Swiper(swiperEl, swiperServiceOpt);
    } else if (swiperEl.getAttribute('swiper-option') === 'testimonial') {
      const swiper = new Swiper(swiperEl, swiperTestimonialOpt);
    } else if (swiperEl.getAttribute('swiper-option') === 'position' && windowWidth < 768) {
      const swiper = new Swiper(swiperEl, swiperPositionOpt);
    } else if (swiperEl.getAttribute('swiper-option') === 'partners' && windowWidth < 768) {
      const swiper = new Swiper(swiperEl, swiperPartnersOpt);
    }
  });
};
