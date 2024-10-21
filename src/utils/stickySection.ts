export const stickySection = () => {
  const stickyEl = document.querySelector('[sticky-section]') as HTMLElement;
  if (!stickyEl) return;

  const elScrollFrom = document.querySelectorAll('[scroll-to-partners]') as NodeListOf<HTMLElement>;
  if (!elScrollFrom) return;

  const position = stickyEl.getBoundingClientRect().top + window.scrollY;

  elScrollFrom.forEach((el) => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  });

  function resize() {
    // Code for sticky position to keep visibility
    const windowHeight = window.innerHeight;

    const heightEl = stickyEl.offsetHeight;

    const diff = windowHeight - heightEl;

    if (diff < 0) {
      stickyEl.style.top = `${diff}px`;
    }
  }

  window.addEventListener('resize', () => {
    resize();
  });

  resize();
};
