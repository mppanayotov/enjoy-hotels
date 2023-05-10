// Dropdowns
export default function initDropdowns() {
	const $dropdown = $('.js-dropdown');

	function formatLanguage (language) {
		const id = language.id;
		const text = id;
		const baseUrl = "assets/images/svg/flag-";
		
		if (! id) {
			return text;
		}

		const $language = $(
			'<span class="select2__entry">' + text + '<span class="select2__icon icon-flag"> <img src="' + baseUrl + id + '.svg" alt="' + text + '"/></span></span>'
		);

		return $language;
	};

	function formatDefault (format) {
		const $format = $(
			'<span class="select2__entry">' + format.text + '</span>'
		);

		return $format;
	};

	$dropdown.each(function() {
		const $dropdown = $(this);
		const $dropdownWrapper = $('.js-dropdown-wrapper');
		const $dropdownParent = $dropdown.closest('.js-dropdown-parent');

		if ($dropdown.hasClass('js-dropdown-language')) {
			$dropdown.select2({
				dropdownParent: $dropdownWrapper,
				width: '100%',
				templateResult: formatLanguage,
				templateSelection: formatLanguage,
				theme: 'language'
			});
		} else if ($dropdown.hasClass('js-dropdown-lg')) {
			$dropdown.select2({
				dropdownParent: $dropdownWrapper,
				width: '100%',
				templateResult: formatDefault,
				templateSelection: formatDefault,
				theme: 'lg'
			});
		} else {
			$dropdown.select2({
				dropdownParent: $dropdownWrapper,
				width: '100%',
				templateResult: formatDefault,
				templateSelection: formatDefault
			});
		}
		
		$dropdown.on("select2:opening", function() {
			$dropdownParent.addClass('is-opening');
			$dropdownWrapper.addClass('has-dropdown-opening');

			setTimeout(function() {
				$dropdownWrapper.removeClass('has-dropdown-opening');
				$dropdownWrapper.addClass('has-dropdown-open');
				$dropdownParent.removeClass('is-opening');
				$dropdownParent.addClass('is-open');
			}, 10);
		});

		$dropdown.on("select2:closing", function() {
			$dropdownParent.addClass('is-closing');
			$dropdownWrapper.removeClass('has-dropdown-open');
			$dropdownWrapper.addClass('has-dropdown-closing');

			setTimeout(function() {
				$dropdownWrapper.removeClass('has-dropdown-closing');
				$dropdownParent.removeClass('is-closing');
				$dropdownParent.removeClass('is-open');
			}, 10);
		});
	});
}
