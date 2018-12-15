/* eslint-disable no-unused-vars, no-undef */

$(function() {
  // Remove loading fade
  /*
  const fadein = document.getElementById('fade-in');
  fadein.style.background = '#0000';
  setTimeout(function() { fadein.style.setProperty('display', 'none'); }, 1000);
  */
 
  // Sets random color injected into css
  document.documentElement.style.setProperty('--accent-color', getRandomColor());
});

/* Generates a random color for accent */
function getRandomColor() {
  const letters = 'ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  } 
  return color;
}

/* Loads site navigation into each page */
$(function() {
  $('#header-placeholder').load('include/header.html');
});

/* Switches header bar styles on scroll */
/*
$(function() {
  $(window).scroll(function() {
    const header = document.getElementById('header');
    const divider = document.getElementById('divider');
    if (window.pageYOffset >= 20) {
      header.className += ' solid';
      divider.style.setProperty('border-right', '2px solid #fff');
    } else {
      header.className = 'header';
      divider.style.setProperty('border-right', '2px solid #000');
    }
  });
}); 
*/