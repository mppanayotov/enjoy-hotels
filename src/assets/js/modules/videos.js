import { BREAKPOINT_MOBILE_SMALL, BREAKPOINT_MOBILE, BREAKPOINT_TABLET, BREAKPOINT_SMALL_DESKTOP, BREAKPOINT_MOBILE_SMALL_ALT, BREAKPOINT_MOBILE_ALT, BREAKPOINT_TABLET_ALT, BREAKPOINT_SMALL_DESKTOP_ALT } from '../utils/variables.js';

// Video
export default function initVideos() {
	const videos = document.querySelectorAll('.js-video');

	for (let i = 0; i < videos.length; i++) {
		const video = videos[i];

		const videoIframe = video.querySelector('iframe');
		const videoTrigger = video.querySelector('.js-video-trigger');

		videoTrigger.addEventListener('click', function(event) {
			event.preventDefault();

			if (window.innerWidth > BREAKPOINT_TABLET) {
				videoIframe.setAttribute('src', videoIframe.getAttribute('src') + '?autoplay=1');
			}

			setTimeout(function() {
				video.classList.add('active');
			}, 500);
		});
	}
}
