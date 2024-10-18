export const stickySection = () => {
  const stickyEl = document.querySelector('[sticky-section]') as HTMLElement;
  if (!stickyEl) return;

  function resize() {
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
