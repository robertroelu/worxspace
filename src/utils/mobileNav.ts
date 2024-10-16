export const mobileNav = () => {
  const closeEl = document.querySelector('[mobile-menu-close-el]') as HTMLElement;
  const linkEls = document.querySelectorAll('[mobile-link]') as NodeListOf<HTMLElement>;
  linkEls.forEach((el) => {
    el.addEventListener('click', () => {
      closeEl.click();
    });
  });
};
