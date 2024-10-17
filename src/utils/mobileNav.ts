export const mobileNav = () => {
  const closeEl = document.querySelector('[mobile-menu-close-el]') as HTMLElement;
  const linkEls = document.querySelectorAll('[mobile-link]') as NodeListOf<HTMLElement>;
  linkEls.forEach((el) => {
    el.addEventListener('click', () => {
      closeEl.click();
    });
  });

  const openEl = document.querySelector('[open-mobile-menu]') as HTMLElement;
  if (!openEl) return;

  const navMobileEl = document.querySelector('.navbar_mobile-wrap') as HTMLElement;
  if (!navMobileEl) return;

  openEl.addEventListener('click', () => {
    const innerHeight = window.innerHeight;

    navMobileEl.style.height = `${innerHeight}px`;
  });
};
