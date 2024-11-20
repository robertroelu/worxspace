//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';
// import {} from '@finsweet/attributes-cmssort/';
// import {} from '@finsweet/attributes-cmsfilter/';
import { scrolldisable } from '@finsweet/attributes-scrolldisable/';
// import {} from '@finsweet/attributes-cmsload/';
// import {} from '@finsweet/attributes-socialshare/';

//Modal
// import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { darkModeSwitch } from '$utils/darkModeSwitch';
import { refreshWindow } from '$utils/refreshWindow';
import { animationOrange } from '$utils/animationOrange';
import { mobileNav } from '$utils/mobileNav';
import { stickySection } from '$utils/stickySection';
// import { consoleClear } from '$utils/consoleClear';
import { actualYear } from '$utils/actualYear';
import { languageSwitch } from '$utils/languageSwitch';
import { createdBy } from '$utils/createdBy';
import { modifyUrl } from '$utils/modifyUrl';
// import { typer } from '$utils/typer';

window.Webflow ||= [];
window.Webflow.push(() => {
  // consoleClear();
  actualYear();
  linkblockedit();
  scrolldisable();
  refreshWindow();
  // modal();
  swipers();
  // typer();
  mobileNav();

  darkModeSwitch();

  nestedElement()
    .then(() => {
      animationOrange();
    })
    .catch((error) => {
      console.error('Error in nestedElement:', error);
    });

  languageSwitch();
  createdBy();
  modifyUrl();
  stickySection();
});
