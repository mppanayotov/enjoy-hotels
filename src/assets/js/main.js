import select2 from 'select2';
import initMobileMenu from './modules/mobile-menu.js';
import initStickyNav from './modules/sticky-nav.js';
import initDropdowns from './modules/dropdowns.js';
import initAccordions from './modules/accordions.js';
import initTabs from './modules/tabs.js';
import initMasonry from './modules/masonry.js';
import initCookies from './modules/cookies.js';
import initSliders from './modules/sliders.js';
import initVideos from './modules/videos.js';
import initSwitches from './modules/switches.js';

(function(window, document, $) {
	const $window = $(window);
	const $document = $(document);

	initMobileMenu();
	initStickyNav();
	initDropdowns();
	initAccordions();
	initSliders();
	initVideos();
	initSwitches();

	if (! $('.js-wrapper').hasClass('js-tabs-disabled')) {
		initTabs();
	}
	
	initMasonry();
	initCookies();
})(window, document, window.jQuery);
