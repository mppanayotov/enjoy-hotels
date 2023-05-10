import { BREAKPOINT_MOBILE_SMALL, BREAKPOINT_MOBILE, BREAKPOINT_TABLET, BREAKPOINT_SMALL_DESKTOP, BREAKPOINT_MOBILE_SMALL_ALT, BREAKPOINT_MOBILE_ALT, BREAKPOINT_TABLET_ALT, BREAKPOINT_SMALL_DESKTOP_ALT } from '../utils/variables.js';

// Mobile menu
export default function initMobileMenu() {
	const body = document.querySelector('body');
	const mobileMenu = document.querySelector('.js-mobile-menu');
	const mobileMenuTrigger = document.querySelector('.js-mobile-menu-trigger');
	let cachedScrollPos;

	function isBodyScrollDisabled() {
		return body.classList.contains('freeze'); 
	}

	function enableBodyScroll() {
		if (! isBodyScrollDisabled()) {
			return;
		}

		body.classList.remove('freeze'); 
		body.style.top = 'auto';
		window.scrollTo(0, cachedScrollPos);
	}

	function disableBodyScroll() {
		if (isBodyScrollDisabled()) {
			return;
		}

		cachedScrollPos = window.pageYOffset;
		body.style.top = -cachedScrollPos + 'px';
		body.classList.add('freeze');
	}

	function hasOpenMobileMenu() {
		return body.classList.contains('has-mobile-menu-open');
	}

	function openMobileMenu() {
		mobileMenuTrigger.classList.add('active');
		mobileMenu.classList.add('active');
		body.classList.add('has-mobile-menu-open');

		disableBodyScroll();
	}

	function closeMobileMenu() {
		mobileMenuTrigger.classList.remove('active');
		mobileMenu.classList.remove('active');
		body.classList.remove('has-mobile-menu-open');

		enableBodyScroll();
	}

	mobileMenuTrigger.addEventListener('click', function(e) {
		e.preventDefault();

		if (! hasOpenMobileMenu()) {
			openMobileMenu();
		} else {
			closeMobileMenu();
		}
	});
	
	window.addEventListener('resize', function() {
		if (window.innerWidth > BREAKPOINT_SMALL_DESKTOP && hasOpenMobileMenu()) {
			closeMobileMenu();
		}
	});
}
