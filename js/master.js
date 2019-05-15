/* eslint-disable no-unused-vars, no-undef */

// Inject navigation panel into page
$(document).ready(function() {
	loadThemeFromCookies();
	$('#page-container').load('pages/home.html');
	$('#page-style').load('css/home.css');

	$('#nav-style').load('css/nav.css');
	$('#nav-container').load('pages/nav.html');
});

function openNav() {
	let visible = document.getElementById('visible');
	document.getElementById(
		'content-container'
	).style.marginTop = `-${document.getElementById('nav-bar').clientHeight -
		$(window).height() * 0.06}px`;
	visible.style.transition = 'opacity 0.25s';
	visible.style.opacity = '1';
}

function closeNav() {
	let visible = document.getElementById('visible');
	document.getElementById('content-container').style.marginTop = '0px';
	visible.style.opacity = '0';
	visible.style.transition = 'opacity 0.5s';
}

function sleep(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

function loadPage(pg) {
	document.getElementById('content-container').style.opacity = '0';
	sleep(500).then(() => {
		url = `pages/${pg}.html`;
		$('#page-style').load(`css/${pg}.css`, function() {
			$('#page-container').load(`pages/${pg}.html`, function() {
				document.getElementById('content-container').style.opacity = '1';
				window.history.pushState('', '', `${pg}.html`);
			});
		});
	});
}

// $('#nav-link a').click(function(e) {
// 	e.preventDefault();
// 	closeNav();

// 	let targetUrl = $(this).attr('href'),
// 		targetTitle = $(this).attr('title');

// 	$('#content-container').css('opacity', '0');
// 	$(this).click(function() {
// 		$.ajax({
// 			url: targetUrl,
// 			success: function(result) {
// 				$('#page-container').html(result);
// 				sleep(500).then(() => {
// 					$('#content-container').css('opacity', '1');
// 				});
// 			},
// 		});

// 		window.history.pushState(
// 			{ url: '' + targetUrl + '' },
// 			targetTitle,
// 			targetUrl
// 		);
// 		return false;	$('#content-container').css('opacity', '0');

// 	});
// });
