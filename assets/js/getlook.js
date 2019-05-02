'use strict';

function createAnswer() {
  var msg;
  var n = getRandomInt(0,3);
  if (n == 3) {
    msg='You look amazing!';
  } else if (n == 2) {
    msg='Perfect Hair day for you!';
  } else if (n == 1) {
    msg='Absolutely fabulous!';
  } else {
    msg = 'Nice outfit you got there!'
  }
  const textElement = document.getElementById('answer');
  textElement.innerHTML = msg;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}