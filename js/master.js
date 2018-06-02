/* eslint-disable no-unused-vars, no-undef */

$(function() {
  // Remove loading fade
  const fadein = document.getElementById('fade-in');
  fadein.style.background = '#0000';
  setTimeout(function() { fadein.style.setProperty('display', 'none'); }, 1000);

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