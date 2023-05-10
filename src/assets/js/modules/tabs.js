import { closest } from '../utils/helpers.js';

// Tab functions
export default function initTabs() {
	const tabRemotes = document.querySelectorAll('.js-tab-remote');
	const tabs = document.querySelectorAll('.js-tab');
	const wrapper = document.querySelector('.js-wrapper');
	const sidebarNav = document.querySelector('.js-sidebar-nav');

	closest();

	function closeNearTabs(near) {
		if (! near) {
			return;
		}

		const tabsContainer = near.closest('.js-tabs');
		const remotesInContainer = tabsContainer.querySelectorAll('.js-tab-remote.active');
		const tabsInContainer = tabsContainer.querySelectorAll('.js-tab.active');

		for (let i = 0; i < remotesInContainer.length; i++) {
			remotesInContainer[i].classList.remove('active');
		}

		for (let i = 0; i < tabsInContainer.length; i++) {
			tabsInContainer[i].classList.remove('active');
		}
	}

	for (let i = 0; i < tabRemotes.length; i++) {
		const target = tabRemotes[i].getAttribute('data-target');
		const targetEls = tabRemotes[i].closest('.js-tabs').querySelectorAll(target);

		tabRemotes[i].addEventListener('click', function(event) {
			const tabRemote = this;
			const tabsContainer = tabRemote.closest('.js-tabs');
			const tabRemoteTwins = tabsContainer.querySelectorAll(`[data-target="${tabRemote.getAttribute('data-target')}"]`);
			const target = tabRemote.getAttribute('data-target');
			const targetEls = tabsContainer.querySelectorAll(target);

			event.preventDefault();

			if (! tabRemote.classList.contains('active')) {
				for (let j = 0; j < targetEls.length; j++) {
					closeNearTabs(targetEls[j]);

					if (wrapper.classList.contains('has-arrangements-active')) {
						wrapper.classList.remove('has-arrangements-active');
					}

					if (sidebarNav && sidebarNav.classList.contains('has-arrangements-active')) {
						sidebarNav.classList.remove('has-arrangements-active');
					}
				}

				for (let j = 0; j < targetEls.length; j++) {
					targetEls[j].classList.add('active');

					if (targetEls[j].classList.contains('js-tab-microsite-arrangements')) {
						wrapper.classList.add('has-arrangements-active');
						sidebarNav.classList.add('has-arrangements-active');
					}

					if (targetEls[j].classList.contains('js-tab-step')) {
						const steps = targetEls[j].closest('.js-tabs-step').querySelectorAll('.js-tab-step');
						const stepsArr = Array.prototype.slice.call(steps);
						const stepIndex = stepsArr.findIndex(step => step.classList.contains('active'));

						for (let k = 0; k < steps.length + 1; k++) {
							if (k < stepIndex) {
								steps[k].classList.add('active');
							}
						}
					}

					// Scroll to top of page when tab is booking step
					if ($(targetEls[j]).find('.form--booking').length > 0) {
						$(window).scrollTop(0)
					}
				}

				tabRemote.classList.add('active');

				for (let j = 0; j < tabRemoteTwins.length; j++) {
					tabRemoteTwins[j].classList.add('active');
				}
			} else {
				if (! tabRemote.classList.contains('js-tab-remote-solid')) {
					closeNearTabs(targetEl);
				}
			}
		});
	}
}
