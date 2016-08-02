var myImage = document.querySelector('img')

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/WC.jpg') {
		myImage.setAttribute ('src', 'images/vicover.jpg');
	} else {
		myImage.setAttribute ('src', 'images/WC.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'You can do this, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'You can do this, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}



