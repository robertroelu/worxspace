export const languageSwitch = () => {
  const el = document.querySelector('[data-lang="de-DE"]') as HTMLElement;

  el.textContent = 'DE';
  el.style.opacity = '1';
};
