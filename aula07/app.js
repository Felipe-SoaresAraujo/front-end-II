let form = document.querySelector('form');

var title = document.createElement('h1');
title.textContent = "Login";
var inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.placeholder = 'Digite seu E-mail';
// inputEmail.setAttribute('disabled')

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.placeholder = 'Digite sua senha';

var btnSubmit = document.createElement('button');
btnSubmit.textContent = "Login";
var btnReset = document.createElement('button');
btnReset.textContent = "Cancelar"



form.appendChild(title);
form.appendChild(inputEmail);
form.appendChild(inputPassword);
form.appendChild(btnSubmit);
form.appendChild(btnReset);
