import { registerEvents, calcOffsetTop, staticOffsetTop } from '../utils/helpers.js';

// Sticky nav
export default function initStickyNav() {
	const nav = document.querySelector('.js-nav');
	const header = document.querySelector('.js-header');
	const stickyTrigger = document.querySelector('.js-sticky-trigger');
	const stickyDropzone = document.querySelector('.js-sticky-dropzone');

	function updateStickyNav() {
		const scroll = parseInt(window.pageYOffset);
		const stickyTriggerOffset = parseInt(calcOffsetTop(stickyTrigger));
		const stickyDropzoneOffset = parseInt(staticOffsetTop(stickyDropzone));

		if (scroll >= stickyTriggerOffset - stickyDropzoneOffset) {
			nav.classList.add('is-fixed');
			header.classList.add('has-fixed-nav');

		} else {
			nav.classList.remove('is-fixed');
			header.classList.remove('has-fixed-nav');
		}
	}

	registerEvents(updateStickyNav, ['load', 'scroll', 'resize']);
}
