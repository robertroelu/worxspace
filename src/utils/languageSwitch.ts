export const languageSwitch = () => {
  const el = document.querySelectorAll('[data-lang="de-DE"]') as NodeListOf<HTMLElement>;

  el.forEach((item) => {
    item.textContent = 'DE';
    item.style.opacity = '1';
  });
};
