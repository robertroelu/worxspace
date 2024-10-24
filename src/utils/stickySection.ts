export const stickySection = () => {
  const stickyEl = document.querySelector('[sticky-section]') as HTMLElement;
  if (!stickyEl) return;

  const elScrollFrom = document.querySelectorAll('[scroll-to-partners]') as NodeListOf<HTMLElement>;
  if (!elScrollFrom) return;

  let position: number;
  // const document.querySelector('.section_home-partners')?.scrollHeight;

  elScrollFrom.forEach((el) => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  });

  function resize() {
    const mainWrapHeight = document.querySelector('.main-wrapper')?.scrollHeight || 0;
    const footerWrap = document.querySelector('.main-wrapper-footer')?.scrollHeight || 0;
    const stickySection = stickyEl.offsetHeight;

    position = mainWrapHeight - footerWrap - stickySection;

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

  setTimeout(() => {
    resize();
  }, 500);
};
