$(function() {
  $('#header-placeholder').load('include/header.html');
});

/* Switches header bar styles on scroll */
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