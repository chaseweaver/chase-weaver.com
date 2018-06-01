/* eslint-disable no-unused-vars, no-undef */

/* Quotes to be randomized for the home page */
const quotes = [
  ['I have no idea what I am doing.', '- Me'],
  ['The best thing about a boolean is even if you are wrong, you are only off by a bit.', '- Anonymous'],
  ['Before software can be reusable it first has to be usable.', '- Ralph Johnson'],
  ['It\'s not a bug – it\'s an undocumented feature.', '- Anonymous'],
  ['One man\'s crappy software is another man\'s full time job.', '- Jessica Gaston'],
  ['Deleted code is debugged code.', '- Jeff Sickel'],
  ['If debugging is the process of removing software bugs, then programming must be the process of putting them in.', '- Edsger Dijkstra'],
  ['Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.', '- Rick Cook'],
  ['The cheapest, fastest, and most reliable components are those that aren\'t there.', '- Gordon Bell'],
  ['The trouble with programmers is that you can never tell what a programmer is doing until it\'s too late.', '- Seymour Cray'],
  ['There are only two kinds of programming languages: those people always bitch about and those nobody uses.', '- Bjarne Stroustrup'],
  ['It\'s a curious thing about our industry: not only do we not learn from our mistakes, we also don\'t learn from our successes.', '- Keith Braithwaite'],
  ['C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.', '- Bjarne Stroustrup'],
  ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', '- Brian W. Kernighan'],
  ['Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', '- Rick Osborne'],
];

/* Randomizes accent color on page load */
this.window.onload = function() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const q1 = this.document.getElementById('quote-block-1');
  const q2 = this.document.getElementById('quote-block-2');

  q1.innerHTML = quote[0]; // Quote
  q2.innerHTML = quote[1]; // Author

  this.document.documentElement.style.setProperty('--accent-color', getRandomColor());
};

/* Switches navigation bar styles on scroll */
this.window.onscroll = function() {
  const nav = this.document.getElementById('nav');
  const divider = this.document.getElementById('divider');

  if (this.window.pageYOffset >= 20) {
    nav.className += ' solid';
    divider.style.setProperty('border-right', '2px solid #fff');
  } else {
    nav.className = 'nav';
    divider.style.setProperty('border-right', '2px solid #000');
  }
};

function avatarOnMouseOver(element) {
  element.setAttribute('src', 'images/avatar_smile.png');
}

function avatarOnMouseOut(element) {
  element.setAttribute('src', 'images/avatar.png');
}

/* Generates a random color for accent */
function getRandomColor() {
  const letters = 'ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}