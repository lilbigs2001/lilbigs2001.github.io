let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/vitaliy-ugolnikov-double-biceps.jpeg') {
		myImage.setAttribute('src', 'images/vitaliy-ugolnikov-comp.jpeg');
	} else {
		myImage.setAttribute('src', 'images/vitaliy-ugolnikov-double-biceps.jpeg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Learn about Vitaliy Ugolnikov, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Learn about Vitaliy Ugolnikov, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
