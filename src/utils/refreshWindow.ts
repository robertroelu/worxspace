export const refreshWindow = () => {
  // Reload page on change width
  function reloadPage(before: number, after: number, breakpoint: number): void {
    if (before > breakpoint && after < breakpoint) {
      location.reload();
    }
    if (before < breakpoint && after > breakpoint) {
      location.reload();
    }
  }

  const mobileBreak: number = 479;
  const landscapeBreak: number = 767;
  const tabletBreak: number = 991;

  let before: number = window.innerWidth;
  window.addEventListener('resize', () => {
    const after: number = window.innerWidth;
    reloadPage(before, after, tabletBreak);
    reloadPage(before, after, landscapeBreak);
    reloadPage(before, after, mobileBreak);
  });
};
