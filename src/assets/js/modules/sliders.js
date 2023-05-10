import { closest } from '../utils/helpers.js';

// Sliders
export default function initSliders() {
	const sliders = document.querySelectorAll('.js-slider');
	
	closest();

	for (let i = 0; i < sliders.length; i++) {
		if (sliders[i].classList.contains('js-slider-hero')) {
			new Swiper(sliders[i], {
				preloadImages: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				observeSlideChildren: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				loop: true,
				slidesPerView: 1,
				speed: 1000,
				navigation: {
					nextEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-next'),
					prevEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-prev')
				},
				autoplay: {
					delay: 2500
				}
			});

			sliders[i].swiper.autoplay.stop();
			
			setTimeout(function() {
				sliders[i].swiper.autoplay.start();
			}, 1000);
		}


		if (sliders[i].classList.contains('js-slider-gallery')) {
			const sliderThumbsContainer = sliders[i].closest('.js-slider-container-multiple').querySelector('.js-slider-thumbs');

			const sliderThumbs = new Swiper(sliderThumbsContainer, {
				preloadImages: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				observeSlideChildren: true,
				loop: false,
				slidesPerView: 'auto',
				speed: 1000,
				navigation: {
					nextEl: sliderThumbsContainer.closest('.js-slider-container').querySelectorAll('.js-slider-button-next'),
					prevEl: sliderThumbsContainer.closest('.js-slider-container').querySelectorAll('.js-slider-button-prev')
				}
			});

			new Swiper(sliders[i], {
				preloadImages: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				observeSlideChildren: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				loop: false,
				slidesPerView: 1,
				speed: 1000,
				navigation: {
					nextEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-next'),
					prevEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-prev')
				},
				thumbs: {
					swiper: sliderThumbs,
					multipleActiveThumbs: false
				}
			});
		}

		if (sliders[i].classList.contains('js-slider-usp')) {
			new Swiper(sliders[i], {
				preloadImages: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				observeSlideChildren: true,
				effect: 'fade',
				loop: true,
				slidesPerView: 1,
				speed: 1000,
				autoplay: {
					delay: 3000,
				}
			});
		}

		if (sliders[i].classList.contains('js-slider-logos')) {
			new Swiper(sliders[i], {
				preloadImages: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				observeSlideChildren: true,
				loop: false,
				slidesPerView: 3,
				spaceBetween: 10,
				speed: 1000,
				navigation: {
					nextEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-next'),
					prevEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-prev')
				},
				breakpoints: {
					1200: {
						slidesPerView: 6,
						spaceBetween: 30
					},
					1024: {
						slidesPerView: 5
					},
					768: {
						slidesPerView: 4
					}
				},
				touchReleaseOnEdges: true
			});
		}

		if (sliders[i].classList.contains('js-slider-date')) {
			const sliderTitleContainer = sliders[i].closest('.js-slider-container').querySelector('.js-slider-date-title');

			const sliderTitle = new Swiper(sliderTitleContainer, {
				preloadImages: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				observeSlideChildren: true,
				loop: false,
				slidesPerView: 1,
				speed: 600,
				initialSlide: 1,
				allowTouchMove: false
			});

			new Swiper(sliders[i], {
				preloadImages: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				observeSlideChildren: true,
				loop: false,
				slidesPerView: 1,
				speed: 600,
				navigation: {
					nextEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-next'),
					prevEl: sliders[i].closest('.js-slider-container').querySelectorAll('.js-slider-button-prev')
				},
				initialSlide: 1,
				controller: {
					control: sliderTitle
				}
			});	
		}
	}
}
