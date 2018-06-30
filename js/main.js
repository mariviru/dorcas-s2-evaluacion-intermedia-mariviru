'use strict';

var aleatoryNumber = getRandomNumber(100);

var button = document.querySelector('.js__button');
var input = document.querySelector('.js__input');
var message = document.querySelector('.js__message');
var seeCounter = document.querySelector('.js__counter');

var userNumber = input.value;
var counter;
var compareInput;

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Anda, chacho, píntame en la consola un número random hasta 100;
console.log('aleatorio = ' + aleatoryNumber);


function showNumber() {
  userNumber = input.value;
  console.log(userNumber);
}

button.addEventListener('click', showNumber);

counter = 0;

function counterClicks() {
  counter = counter + 1;
  console.log(counter);
  seeCounter.innerHTML = counter;
}

button.addEventListener('click', counterClicks);

function compare() {
  compareInput = parseInt(input.value);

  if (compareInput === aleatoryNumber) {
    console.log('Ganadora');
  } else if (compareInput < aleatoryNumber) {
    console.log('Te has quedado corta');
  } else if (compareInput > aleatoryNumber) {
    console.log('Te has pasado');
  }
}

button.addEventListener('click', compare);
