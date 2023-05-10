// Add polyfill for closest  
function closest() {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || 
		Element.prototype.webkitMatchesSelector;
	}

	if (!Element.prototype.closest) {
		Element.prototype.closest = function(s) {
			let el = this;

			do {
				if (el.matches(s)) return el;
				el = el.parentElement || el.parentNode;
			} while (el !== null && el.nodeType === 1);

			return null;
		};
	}
}

// Register events function
function registerEvents(func, events) {
	for (let i = 0; i < events.length; i++) {
		window.addEventListener(events[i], func, false);
	};
}

// Offset top calculator
function calcOffsetTop(el) {
	const rect = el.getBoundingClientRect();
	let offsetResult;

	offsetResult = rect.top + window.pageYOffset;
	return offsetResult; 
}

// Static offset top query
function staticOffsetTop(el) {
	const rect = el.getBoundingClientRect();

	return rect.top; 
}

export { closest, registerEvents, calcOffsetTop, staticOffsetTop };
