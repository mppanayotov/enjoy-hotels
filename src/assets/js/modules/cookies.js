// Cookie handlers
export default function initCookies () {
	const cookie = document.querySelectorAll('.js-cookie');

	for (let i = 0; i < cookie.length; i++) {
		const cookieSetter = cookie[i].querySelector('.js-cookie-setter');
		const now = new Date();
		const duration = now.setHours(now.getHours() + 1);
		const expireDate = new Date(duration);
		const cookieContent = "bannerHidden=true; expires=" + expireDate;

		cookieSetter.addEventListener('click',function(event) {
			document.cookie = cookieContent;
			cookie[i].classList.add('is-hidden');
		});

		if (document.cookie.replace(/(?:(?:^|.*;\s*)bannerHidden\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
			cookie[i].classList.remove('is-hidden');
		}
	}
}
