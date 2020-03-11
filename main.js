// Java Script Apple vs Android

// Click Events

document.getElementById('androidBtn').addEventListener('click', setAndroid)
document.getElementById('appleBtn').addEventListener('click', setApple)

//Clicked Android

function setAndroid() {
    console.log('setAndroid')

document.getElementById('linkAndroid').innerHTML = 'Android Home';

document.getElementById('img').src = 'images/Android-Logo.jpg';

document.getElementById('linkAndroid').style.backgroundColor = '#a4c93b';

document.getElementById('linkAndroid').href = 'https://www.android.com/';

document.body.style.backgroundColor = '#a4c93b';
}

//Clicked Apple

function setApple() {
    console.log('setApple')

document.getElementById('linkAndroid').innerHTML = 'Apple Home';

document.getElementById('img').src = 'images/Apple-Logo.jpg';

document.getElementById('linkAndroid').style.backgroundColor = '#b6bcca';

document.getElementById('linkAndroid').href = 'https://www.apple.com/';

document.body.style.backgroundColor = '#b6bcca';
}