const formElem = document.querySelector('.login-form');

function onSubmitForm(e) {
  e.preventDefault();
  const inputEmail = e.target.elements.email.value;
  const inputPassword = e.target.elements.password.value;

  if (!inputEmail || !inputPassword) {
    console.log('Alert: All form fields must be filled in');
    return;
  }

  console.log('Email:', inputEmail);
  console.log('Password:', inputPassword);

  e.target.reset();
}

formElem.addEventListener('submit', onSubmitForm);
