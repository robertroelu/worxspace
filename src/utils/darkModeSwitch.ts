import { gsap } from 'gsap';
import { animationModes, updateColors } from './animationModes';

export const darkModeSwitch = () => {
  // Elements to setup expertise cards
  const testimonialEls = document.querySelectorAll(
    '.home_expertise_card'
  ) as NodeListOf<HTMLElement>;

  // Color Setup Light
  // Body
  const bgc1_body = '#fff';
  const pattern_bgc1 = '#eceFF1';

  // Paggination
  const bgc1_pagination = '#DEE2E6';

  // Navbar
  const linearc1_navbar = 'rgba(255,255,255,0.8)';
  const linearc2_navbar = 'rgba(255,255,255,0)';

  // Testimonial Card
  const bgc1_testCard = '#070808';
  const bc1_testCard = '#DEE2E6';
  const card_fc1_testCard = '#fff';
  const text_fc1_testCard = '#6C757D';
  const linearc1_testCard = '#FFF';
  const linearc2_testCard = 'rgba(255,255,255,0)';

  // Card
  const bgc1_card = '#fff';
  const bc1_card = '#dee2e6';
  const tag_bgc1_card = '#f7f9fB';
  const tag_bc1_card = '#DEE2E6';
  const title_fc1_card = '#070708';
  const text_fc1_card = '#3B434B';
  const tag_text_fc1_card = '#67757D';

  // Card Icon
  const bgc1_cardIcon = '#fff';
  const bc1_cardIcon = 'transparent';
  const title_fc1_cardIcon = '#070808';
  const text_fc1_cardIcon = '#3B434B';
  const icon_lines_color_cardIcon = '#DEE2E6';

  // List
  const fc1_list = '#3B434B';
  const bullet_c_list = '#3B434B';

  // Font Color
  const fc1_heading_font = '#070808';
  const fc2_desc_font = '#3B434B';
  const fc3_text_font = '#070808';

  // Link Color
  const lc1_link = '#070808';

  //------------------------

  // Color Setup Dark
  // Body
  const bgc1_body_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--color-body--bgc1'
  );
  const pattern_bgc1_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--color-body--pattern-bgc1'
  );

  // Paggination
  const bgc1_pagination_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--paggination--bgc1'
  );

  // Navbar
  const linearc1_navbar_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--navbar--linearc1'
  );
  const linearc2_navbar_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--navbar--linearc2'
  );

  // Testimonial Card
  const bgc1_testCard_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--testimonial-card--bgc1'
  );
  const bc1_testCard_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--testimonial-card--bc1'
  );
  const card_fc1_testCard_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--testimonial-card--card-fc1');
  const text_fc1_testCard_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--testimonial-card--text-fc1');
  const linearc1_testCard_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--testimonial-card--linearc1');
  const linearc2_testCard_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--testimonial-card--linearc2');

  // Card
  const bgc1_card_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card--bgc1'
  );
  const bc1_card_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card--bc1'
  );
  const tag_bgc1_card_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card--tag-bgc1'
  );
  const tag_bc1_card_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card--tag-bc1'
  );
  const title_fc1_card_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card--title-fc1'
  );
  const text_fc1_card_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card--text-fc1'
  );
  const tag_text_fc1_card_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--card--tag-text-fc1');

  // Card Icon
  const bgc1_cardIcon_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card-icon--bgc1'
  );
  const bc1_cardIcon_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--card-icon--bc1'
  );
  const title_fc1_cardIcon_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--card-icon--title-fc1');
  const text_fc1_cardIcon_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--card-icon--text-fc1');
  const icon_lines_color_cardIcon_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--card-icon--icon-lines-color');

  // List
  const fc1_list_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--list--fc1'
  );
  const bullet_c_list_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--list--bullet-c'
  );

  // Font Color
  const fc1_heading_font_mode2: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--mode-2--fontcolor--fc1-headings');
  const fc2_desc_font_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--fontcolor--fc2-desc'
  );
  const fc3_text_font_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--fontcolor--fc3-text'
  );

  // Link
  const lc1_link_mode2: string = getComputedStyle(document.documentElement).getPropertyValue(
    '--mode-2--linkcolor--lc1'
  );

  // Dark mode logic setup
  const elLightDesktop = document.querySelector('[dark-desktop-el-light]') as HTMLElement;
  const elDarkDesktop = document.querySelector('[dark-desktop-el-dark]') as HTMLElement;
  const storageSwitch: string | null = localStorage.getItem('switch');
  const closeMobileEl = document.querySelector('[mobile-menu-close-el]') as HTMLElement;
  const elDarkMobile = document.querySelector('[dark-mobile-el]') as HTMLElement;
  const elDarkMobileSwitcher = document.querySelector('[dark-mobile-switcher]') as HTMLElement;
  const elDarkMobileIcons = document.querySelectorAll(
    '[dark-mobile-icon]'
  ) as NodeListOf<HTMLElement>;

  function dark() {
    localStorage.setItem('switch', 'dark');
    elLightDesktop.style.zIndex = '0';
    elDarkDesktop.style.zIndex = '1';
    gsap.to(elLightDesktop, { opacity: 0, duration: 0.3 });
    gsap.to(elDarkDesktop, { opacity: 1, duration: 0.3 });

    elDarkMobileSwitcher.style.justifyContent = 'flex-start';
    elDarkMobileIcons[0].setAttribute('is-active', '');
    elDarkMobileIcons[1].removeAttribute('is-active');

    updateColors('#070A09', '#101418');

    if (testimonialEls) {
      testimonialEls.forEach((el) => {
        el.style.boxShadow = 'none';
      });
    }

    gsap.to('html', {
      '--mode-1--color-body--bgc1': bgc1_body_mode2,
      duration: 0.3,
    });
    gsap.to('html', {
      '--mode-1--color-body--pattern-bgc1': pattern_bgc1_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--paggination--bgc1': bgc1_pagination_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--navbar--linearc1': linearc1_navbar_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--navbar--linearc2': linearc2_navbar_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--bgc1': bgc1_testCard_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--bc1': bc1_testCard_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--card-fc1': card_fc1_testCard_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--text-fc1': text_fc1_testCard_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--linearc1': linearc1_testCard_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--linearc2': linearc2_testCard_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--bgc1': bgc1_card_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--bc1': bc1_card_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--tag-bgc1': tag_bgc1_card_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--tag-bc1': tag_bc1_card_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--title-fc1': title_fc1_card_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--text-fc1': text_fc1_card_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--tag-text-fc1': tag_text_fc1_card_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--bgc1': bgc1_cardIcon_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--bc1': bc1_cardIcon_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--title-fc1': title_fc1_cardIcon_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--text-fc1': text_fc1_cardIcon_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--icon-lines-color': icon_lines_color_cardIcon_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--list--fc1': fc1_list_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--list--bullet-c': bullet_c_list_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--fontcolor--fc1-headings': fc1_heading_font_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--fontcolor--fc2-desc': fc2_desc_font_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--fontcolor--fc3-text': fc3_text_font_mode2,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--linkcolor--lc1': lc1_link_mode2,
      duration: 0.3,
    });
  }

  function light() {
    localStorage.setItem('switch', 'light');
    elLightDesktop.style.zIndex = '1';
    elDarkDesktop.style.zIndex = '0';
    gsap.to(elLightDesktop, { opacity: 1, duration: 0.3 });
    gsap.to(elDarkDesktop, { opacity: 0, duration: 0.3 });

    elDarkMobileSwitcher.style.justifyContent = 'flex-end';
    elDarkMobileIcons[1].setAttribute('is-active', '');
    elDarkMobileIcons[0].removeAttribute('is-active');

    // Colors for animations modes
    updateColors('#FFF', '#F0F2F4');

    // Color for shadow
    if (testimonialEls) {
      testimonialEls.forEach((el) => {
        el.style.boxShadow = '0 8px 35px #da3a0026';
      });
    }

    gsap.to('html', {
      '--mode-1--color-body--bgc1': bgc1_body,
      duration: 0.3,
    });
    gsap.to('html', {
      '--mode-1--color-body--pattern-bgc1': pattern_bgc1,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--paggination--bgc1': bgc1_pagination,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--navbar--linearc1': linearc1_navbar,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--navbar--linearc2': linearc2_navbar,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--bgc1': bgc1_testCard,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--bc1': bc1_testCard,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--card-fc1': card_fc1_testCard,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--text-fc1': text_fc1_testCard,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--linearc1': linearc1_testCard,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--testimonial-card--linearc2': linearc2_testCard,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--bgc1': bgc1_card,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--bc1': bc1_card,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--tag-bgc1': tag_bgc1_card,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--tag-bc1': tag_bc1_card,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--title-fc1': title_fc1_card,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--text-fc1': text_fc1_card,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card--tag-text-fc1': tag_text_fc1_card,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--bgc1': bgc1_cardIcon,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--bc1': bc1_cardIcon,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--title-fc1': title_fc1_cardIcon,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--text-fc1': text_fc1_cardIcon,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--card-icon--icon-lines-color': icon_lines_color_cardIcon,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--list--fc1': fc1_list,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--list--bullet-c': bullet_c_list,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--fontcolor--fc1-headings': fc1_heading_font,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--fontcolor--fc2-desc': fc2_desc_font,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--fontcolor--fc3-text': fc3_text_font,
      duration: 0.3,
    });

    gsap.to('html', {
      '--mode-1--linkcolor--lc1': lc1_link,
      duration: 0.3,
    });
  }

  function init() {
    if (storageSwitch === 'dark') {
      elLightDesktop.style.zIndex = '0';
      elDarkDesktop.style.zIndex = '1';
      gsap.to(elLightDesktop, { opacity: 0, duration: 0.3 });
      gsap.to(elDarkDesktop, { opacity: 1, duration: 0.3 });

      elDarkMobileSwitcher.style.justifyContent = 'flex-start';
      elDarkMobileIcons[0].setAttribute('is-active', '');
      elDarkMobileIcons[1].removeAttribute('is-active');

      updateColors('#070A09', '#101418');

      if (testimonialEls) {
        testimonialEls.forEach((el) => {
          el.style.boxShadow = 'none';
        });
      }
    } else {
      elLightDesktop.style.zIndex = '1';
      elDarkDesktop.style.zIndex = '0';
      gsap.to(elLightDesktop, { opacity: 1, duration: 0.3 });
      gsap.to(elDarkDesktop, { opacity: 0, duration: 0.3 });

      elDarkMobileSwitcher.style.justifyContent = 'flex-end';
      elDarkMobileIcons[1].setAttribute('is-active', '');
      elDarkMobileIcons[0].removeAttribute('is-active');

      updateColors('#FFF', '#F0F2F4');
    }
  }

  elLightDesktop.addEventListener('click', () => {
    dark();
  });

  elDarkDesktop.addEventListener('click', () => {
    light();
  });

  elDarkMobile.addEventListener('click', () => {
    if (localStorage.getItem('switch') === 'dark') {
      closeMobileEl.click();
      light();
    } else {
      closeMobileEl.click();
      dark();
    }
  });

  animationModes();
  init();
};
