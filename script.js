'use strict';
const form_change = document.querySelector('.form-change');
const form = document.querySelector('.form');
const formChangeBtn_signup = document.querySelector('.signup-change');
const formChangeBtn_signin = document.querySelector('.signin-change');
const sign_in_form = document.querySelector('.sign-in-form');
const sign_up_form = document.querySelector('.sign-up-form');
const form_change_signup = document.querySelector('.form-change-signup');
const form_change_signin = document.querySelector('.form-change-signin');
formChangeBtn_signup.addEventListener('click', function () {
  form_change.classList.add('slide-left');
  form.classList.add('slide-right');
  sign_in_form.classList.add('hidden');
  sign_up_form.classList.remove('hidden');
  form_change_signup.classList.add('hidden');
  form_change_signin.classList.remove('hidden');
});
formChangeBtn_signin.addEventListener('click', function () {
  form_change.classList.remove('slide-left');
  form.classList.remove('slide-right');
  sign_up_form.classList.add('hidden');
  sign_in_form.classList.remove('hidden');
  form_change_signin.classList.add('hidden');
  form_change_signup.classList.remove('hidden');
});
