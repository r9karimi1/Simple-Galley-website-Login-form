var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

function validated() {
  if (email.value.length < 9) {
    email.style.border = '1px solid red';
    email.focus();
    return false;
  }
  if (password.value.length < 9) {
    password.style.border = '1px solid red';
    password.focus();
    return false;
  }
}
