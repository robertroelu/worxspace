export const modifyUrl = () => {
  const isGermanPath = window.location.pathname.includes('/de');

  if (isGermanPath) {
    const links = document.querySelectorAll(
      '.navbar_link, .footer_link, .footer_logo-wrap, .navbar_logo-link, .navbar .button-primary_link, .navbar .button-secondary_link'
    );

    links.forEach((link: Element) => {
      if (link.hasAttribute('scroll-to-partners')) {
        (link as HTMLAnchorElement).removeAttribute('href');
        return;
      }
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href && !href.startsWith('/de/')) {
        const cleanHref = href.startsWith('/') ? href.slice(1) : href;
        (link as HTMLAnchorElement).setAttribute('href', `/de${cleanHref}`);
      }
    });
  }
};
