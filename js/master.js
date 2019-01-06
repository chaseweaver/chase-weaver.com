/* eslint-disable no-unused-vars, no-undef */


// Inject navigation panel into page
$(document).ready(function() {
  $('#navigation').load('pages/nav.html');
  $('#nav-style').load('css/nav.css');

  // Initial, remove before finalizing
  $('#content').load('pages/contact.html');
  $('#content-style').append('css/contact.css');
});

// Remove loading fade
$(document).ready(function() {
  const fadein = document.getElementById('fade-in');
  fadein.style.background = '#0000';
  setTimeout(function() { fadein.style.setProperty('display', 'none'); }, 1000);
});

// Sets random color injected into css
$(document).ready(function() {
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

/*
$('#code').click(function(){
  $.ajax({url: 'pages/code.html', success: function(result) {
    $('#content').html(result);
    $('#content-style').append('css/code.css');
  }});
});

$('#projects').click(function(){
  $.ajax({url: 'pages/projects.html', success: function(result) {
    $('#content').html(result);
    $('#content-style').append('css/projects.css');
  }});
});
*/