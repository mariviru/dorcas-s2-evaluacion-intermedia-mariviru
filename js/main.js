'use strict';

var aleatoryNumber = getRandomNumber(100);

var button = document.querySelector('.js__button');
var input = document.querySelector('.js__input');
var span = document.querySelector('.js__message');
var seeCounter = document.querySelector('.js__counter');

var userNumber = input.value;
var counter = 0;
var compareInput;
var messageInit = 'Escribe un número y dale a Prueba';

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Anda, chacho, píntame en la consola un número random hasta 100;
console.log('aleatorio = ' + aleatoryNumber);

seeMessage(messageInit);

function showNumber() {
  userNumber = input.value;
  console.log(userNumber);
}

function counterClicks() {
  counter = counter + 1;
  console.log(counter);
  seeCounter.innerHTML = counter;
}

function seeMessage(message) {
  console.log(message);
  span.innerHTML = message;
}

function compareNumbers() {
  compareInput = parseInt(input.value);

  if (compareInput === aleatoryNumber) {
    seeMessage('Ganadora');
  } else if (compareInput < aleatoryNumber) {
    seeMessage('Te has quedado corta');
  } else if (compareInput > aleatoryNumber) {
    seeMessage('Te has pasado');
  }
}

function buttonEvent() {
  showNumber();
  counterClicks();
  compareNumbers();
}

button.addEventListener('click', buttonEvent);
