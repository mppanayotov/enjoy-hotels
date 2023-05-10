import Isotope from 'isotope-layout';
import { registerEvents } from '../utils/helpers.js';

// Masonry grid
export default function initMasonry() {
	const isotopes = document.querySelectorAll('.js-isotope');

	for (let i = 0; i < isotopes.length; i++) {
		const isotope = new Isotope( isotopes[i], {
			itemSelector: '.js-isotope-item',
			percentPosition: true,
		 	masonry: {
				columnWidth: '.js-isotope-sizer'
			}
		});

		function updateMasonry() {
			isotope.layout();
		}

		registerEvents(updateMasonry, ['load', 'scroll', 'resize']);
	}
}
