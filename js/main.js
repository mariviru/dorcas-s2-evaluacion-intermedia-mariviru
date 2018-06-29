'use strict';

var aleatoryNumber = getRandomNumber;
var button = document.querySelector('.button');
var input = document.querySelector('.input');
var userNumber = input.value;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log('> ' + getRandomNumber(100));


function showNumber() {
	userNumber = input.value;
	if(userNumber > getRandomNumber) {
		return
	}
	console.log(userNumber);
	
}

button.addEventListener('click', showNumber);
