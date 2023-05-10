import { closest } from '../utils/helpers.js';

// Accordions
export default function initAccordions() {
	const accords = document.querySelectorAll('.js-accordion');

	closest();

	// Slide up function
	function slideUp(el, duration) {
		const cachedHeight = el.getAttribute('data-height');
		const currentHeight = el.offsetHeight;
		const durationParsed = duration/1000;

		if (
			! cachedHeight ||
			! cachedHeight == currentHeight
		) {
			el.setAttribute('data-height', currentHeight);
		}

		el.style.maxHeight = currentHeight + 'px';
		el.style.transition = 'max-height ' + durationParsed + 's ease-out';

		setTimeout(function() {
			el.style.maxHeight = 0;
		}, 1);
	}

	// Slide down function
	function slideDown(el, duration) {
		const cachedHeight = el.getAttribute('data-height');
		const durationParsed = duration/1000;

		if (! cachedHeight) {
			return;
		}

		el.style.transition = 'max-height ' + durationParsed + 's ease-out';
		el.style.maxHeight = cachedHeight + 'px';

		setTimeout(function() {
			el.style.maxHeight = 'none';
		}, duration);
	}

	for (let i = 0; i < accords.length; i++) {
		const accordTrigger = accords[i].querySelector('.js-accordion-trigger') || accords[i];
		const accordExpand = accords[i].querySelector('.js-accordion-expand');

		window.addEventListener('load', function() {
			if (
				! accords[i].classList.contains('active') &&
				! accords[i].classList.contains('js-accordion-solid')
			) {
				accords[i].classList.remove('active');
				accordTrigger.classList.remove('active');
				slideUp(accordExpand, 0);
			}

			setTimeout(function() {
				accords[i].classList.add('init');
			}, 1);
		});

		accordTrigger.addEventListener('click', function(event) {
			const accordTrigger = this;

			event.preventDefault();

			if (! accordTrigger.classList.contains('active')) {
				accords[i].classList.add('active');
				accordTrigger.classList.add('active');
				slideDown(accordExpand, 300);
			} else {
				accords[i].classList.remove('active');
				accordTrigger.classList.remove('active');
				slideUp(accordExpand, 300);
			}
		});
	}
}
