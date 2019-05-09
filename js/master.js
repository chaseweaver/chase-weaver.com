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
	switchTheme('black');
	switchTheme('red');
});

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

	if (primary != null)
		document.documentElement.style.setProperty('--primary', primary);

	if (primaryVar != null)
		document.documentElement.style.setProperty('--primaryVar', primaryVar);

	if (secondary != null)
		document.documentElement.style.setProperty('--secondary', secondary);

	if (secondaryVar != null)
		document.documentElement.style.setProperty('--secondaryVar', secondaryVar);

	if (background != null)
		document.documentElement.style.setProperty('--background', background);

	if (backgroundVar != null)
		document.documentElement.style.setProperty(
			'--backgroundVar',
			backgroundVar
		);

	if (text != null) document.documentElement.style.setProperty('--text', text);

	if (textInv != null)
		document.documentElement.style.setProperty('--textInv', textInv);

	if (error != null)
		document.documentElement.style.setProperty('--error', error);
}
