/* eslint-disable no-unused-vars, no-undef */

// Inject navigation panel into page
$(document).ready(function() {
  $('#navigation').load('pages/nav.html');
  $('#nav-style').load('css/nav.css');

  $('#content').load('pages/code.html');
  $('#content-style').append('css/code.css');
});