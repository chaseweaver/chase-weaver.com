let colors = ['#ffe4e1', '#e8ebc2', '#c6f3f0', '#91bebb', '#ed8788', '#f6cde6'];

/* Randomizes accent color on page load */
window.onload = function() {
  let accentColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--accent-color', accentColor);
};

/* Switches navigation bar styles on scroll */
window.onscroll = function() {
  let nav = document.getElementById('nav');
  let divider = document.getElementById('divider');

  if (window.pageYOffset >= 20) {
    nav.className += ' solid';
    divider.style.setProperty('border-right', '2px solid #fff');
  } else {
    nav.className = 'nav';
    divider.style.setProperty('border-right', '2px solid #000');
  }
}

function avatarOnMouseOver(element) {
  element.setAttribute('src', 'images/avatar_smile.png');
}

function avatarOnMouseOut(element) {
  element.setAttribute('src', 'images/avatar.png');
}

/*
let parent = $('icon');
parent.animate({'margin-right' : '-=5px', 'margin-left' : '+=5px'}, 200,
  function() {
    parent.animate( {'margin-right' : '+=10px', 'margin-left' : '-=10px'}, 100,
      function() {
        parent.animate({'margin-right' : '-=5px', 'margin-left' : '+=5px'}, 200)
      })
})
*/