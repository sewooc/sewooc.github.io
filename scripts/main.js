var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_0270.jpg') {
      myImage.setAttribute ('src','images/IMG_0272.jpg');
    } else {
      myImage.setAttribute ('src','images/IMG_0270.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Works by ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Works by ' + storedName;
  }  
  myButton.onclick = function() {
    setUserName();
  }