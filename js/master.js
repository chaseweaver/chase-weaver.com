/* eslint-disable no-unused-vars, no-undef */

// Inject navigation panel into page
$(document).ready(function() {
	$('#nav-style').load('css/nav.css');
	$('#nav-page').load('pages/nav.html');

	// Initial, remove before finalizing
	$('#pg-style').load('css/home.css');
	$('#pg-page').load('pages/home.html');
});

// Set initial site theme
$(document).ready(function() {
	loadThemeFromCookies();
});

function setCookie(name, value, days) {
	let expires = '';
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
	let nameEQ = name + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	document.cookie = name + '=; Max-Age=-99999999;';
}

let themeAccent = 0;
function cycleThemeAccent() {
	const arr = ['indigo', 'purple', 'red'];

	if (++themeAccent >= arr.length) themeAccent = 0;
	switchTheme(arr[themeAccent]);
}

let themeBase = 0;
function cycleThemeBase() {
	const arr = ['black', 'dark', 'light'];

	if (++themeBase >= arr.length) themeBase = 0;
	switchTheme(arr[themeBase]);
}

function switchTheme(theme) {
	let primary,
		primaryVar,
		secondary,
		secondaryVar,
		background,
		backgroundVar,
		text,
		textInv,
		error;

	switch (theme) {
		case 'black':
			background = '#000000';
			backgroundVar = '#080808';
			text = '#ffffff';
			textInv = '#040404';
			break;

		case 'dark':
			background = '#121212';
			backgroundVar = '#222222';
			text = '#ffffff';
			textInv = '#040404';
			break;

		case 'light':
			background = '#fefefe';
			backgroundVar = '#efefef';
			text = '#040404';
			textInv = '#ffffff';
			break;

		case 'indigo':
			primary = '#3f51b5';
			primaryVar = '#002984';
			secondary = '#ff4081';
			secondaryVar = '#c60055';
			error = '#b00020';
			break;

		case 'purple':
			primary = '#6200ee';
			primaryVar = '#3700b3';
			secondary = '#03dac6';
			secondaryVar = '#018786';
			error = '#b00020';
			break;

		case 'red':
			primary = '#6200ee';
			primaryVar = '#3700b3';
			secondary = '#03dac6';
			secondaryVar = '#018786';
			error = '#b00020';
			break;

		default:
			return;
	}

	if (primary != null) {
		document.documentElement.style.setProperty('--primary', primary);
		setCookie('primary', primary, 14);
	}

	if (primaryVar != null) {
		document.documentElement.style.setProperty('--primaryVar', primaryVar);
		setCookie('primaryVar', primaryVar, 14);
	}

	if (secondary != null) {
		document.documentElement.style.setProperty('--secondary', secondary);
		setCookie('secondary', secondary, 14);
	}

	if (secondaryVar != null) {
		document.documentElement.style.setProperty('--secondaryVar', secondaryVar);
		setCookie('secondaryVar', secondaryVar, 14);
	}

	if (background != null) {
		document.documentElement.style.setProperty('--background', background);
		setCookie('background', background, 14);
	}

	if (backgroundVar != null) {
		document.documentElement.style.setProperty(
			'--backgroundVar',
			backgroundVar
		);
		setCookie('backgroundVar', backgroundVar, 14);
	}

	if (text != null) {
		document.documentElement.style.setProperty('--text', text);
		setCookie('text', text, 14);
	}

	if (textInv != null) {
		document.documentElement.style.setProperty('--textInv', textInv);
		setCookie('textInv', textInv, 14);
	}

	if (error != null) {
		document.documentElement.style.setProperty('--error', error);
		setCookie('error', error, 14);
	}
}

function loadThemeFromCookies() {
	let primary = getCookie('primary');
	if (primary != null)
		document.documentElement.style.setProperty('--primary', primary);

	let primaryVar = getCookie('primaryVar');
	if (primaryVar != null)
		document.documentElement.style.setProperty('--primaryVar', primaryVar);

	let secondary = getCookie('secondary');
	if (secondary != null)
		document.documentElement.style.setProperty('--secondary', secondary);

	let secondaryVar = getCookie('secondaryVar');
	if (secondaryVar != null)
		document.documentElement.style.setProperty('--secondaryVar', secondaryVar);

	let background = getCookie('background');
	if (background != null)
		document.documentElement.style.setProperty('--background', background);

	let backgroundVar = getCookie('backgroundVar');
	if (background != null)
		document.documentElement.style.setProperty(
			'--backgroundVar',
			backgroundVar
		);

	let text = getCookie('text');
	if (text != null) document.documentElement.style.setProperty('--text', text);

	let textInv = getCookie('textInv');
	if (textInv != null)
		document.documentElement.style.setProperty('--textInv', textInv);

	let error = getCookie('error');
	if (error != null)
		document.documentElement.style.setProperty('--error', error);
}
