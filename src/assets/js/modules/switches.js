// Switches
export default function initSwitches() {
	const $switchTrigger = $('.js-switch-trigger');
	const $switches = $('.js-switches');

	$switchTrigger.each(function() {
		const $switchTrigger = $(this);
		const $switch = $($switchTrigger.data('switch'));

		function isActive() {
			if (
				$switchTrigger.val() > 0 ||
				$switchTrigger[0].checked == true
			) {
				return true;
			}

			return false;
		}

		$switchTrigger.on('change', function() {
			if ($switchTrigger.hasClass('js-switch-trigger-radio')) {
				const $switch = $($switchTrigger.find(':checked').data('switch'));
				const $switches = $($switchTrigger.data('switches'));

				$switches.find('.js-switch').removeClass('active');
				$switch.addClass('active');
			} else {
				const $switchExtra = $($switchTrigger.find(':selected').data('switch-extra'));
				const $switchExtraName = $switchExtra.length && $switchTrigger.find(':selected').data('switch-extra').replace(/./, '');

				if(isActive()) {
					$switch.add($switchExtra).addClass('active');

					if ($switchExtra.hasClass('js-switch-sequence')) {
						const $sequence = $switchExtra.closest($switches).find('.js-switch-sequence');
						const $sequenceArr = Array.prototype.slice.call($sequence);
						const $sequenceIndex = $sequenceArr.findIndex(step => step.classList.contains($switchExtraName));

						for (let i = 0; i < $sequence.length + 1; i++) {
							i < $sequenceIndex ? $($sequence[i]).addClass('active') : $($sequence[i+1]).removeClass('active');
						}
					}
				} else {
					const $switchRevert = $switchTrigger.find('[data-switch-extra]');

					$switchRevert.each(function() {
						$($(this).data('switch-extra')).removeClass('active');
					});

					$switch.removeClass('active');
				}
			}
		});
	});
}
