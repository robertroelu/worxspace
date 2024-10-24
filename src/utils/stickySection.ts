// export const stickySection = () => {
//   const stickyEl = document.querySelector('[sticky-section]') as HTMLElement;
//   if (!stickyEl) return;

//   const elScrollFrom = document.querySelectorAll('[scroll-to-partners]') as NodeListOf<HTMLElement>;
//   if (!elScrollFrom) return;

//   let position: number;

//   elScrollFrom.forEach((el) => {
//     el.addEventListener('click', () => {
//       window.scrollTo({
//         top: position,
//         behavior: 'smooth',
//       });
//     });
//   });

//   function resize() {
//     // Code for sticky position to keep visibility
//     const windowHeight = window.innerHeight;

//     const heightEl = stickyEl.offsetHeight;

//     const diff = windowHeight - heightEl;

//     if (diff < 0) {
//       stickyEl.style.top = `${diff}px`;
//     }

//     position = stickyEl.getBoundingClientRect().top + window.scrollY;
//   }

//   window.addEventListener('resize', () => {
//     resize();
//   });

//   resize();
// };

export const stickySection = () => {
  const stickyEl = document.querySelector('[sticky-section]') as HTMLElement;
  if (!stickyEl) return;

  const elScrollFrom = document.querySelectorAll('[scroll-to-partners]') as NodeListOf<HTMLElement>;
  if (!elScrollFrom) return;

  let position: number;

  // Cache window height on load and during resize
  let windowHeight = window.innerHeight;

  // Throttle resize event for better performance
  let resizeTimeout: number | undefined;
  const throttleResize = () => {
    if (!resizeTimeout) {
      resizeTimeout = window.setTimeout(() => {
        resize();
        resizeTimeout = undefined;
      }, 100); // Adjust throttle interval as needed
    }
  };

  elScrollFrom.forEach((el) => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  });

  function resize() {
    const heightEl = stickyEl.offsetHeight;
    const diff = windowHeight - heightEl;

    if (diff < 0) {
      stickyEl.style.top = `${diff}px`;
    } else {
      stickyEl.style.top = ''; // Reset top if no offset is needed
    }

    position = stickyEl.getBoundingClientRect().top + window.scrollY;
  }

  window.addEventListener('resize', () => {
    windowHeight = window.innerHeight;
    throttleResize();
  });

  resize();
};
