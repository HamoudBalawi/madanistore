const form = document.querySelector("#contactform");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const success = document.querySelector("#success");

function formValidation() {
  event.preventDefault();
  if (checkLength(name.value, 0)) {
    nameerror.style.display = "none";
  } else {
    nameerror.style.display = "block";
  }
  if (checkNumber(subject.value)) {
    subjecterror.style.display = "none";
  } else {
    subjecterror.style.display = "block";
  }

  if (emailValidation(email.value)) {
    emailerror.style.display = "none";
  } else {
    emailerror.style.display = "block";
  }
  if (checkLength(address.value, 19)) {
    addresserror.style.display = "none";
  } else {
    addresserror.style.display = "block";
  }
  if (checkLength(name.value, 0) && checkNumber(subject.value) && emailValidation(email.value) && checkLength(address.value, 19)) {
    form.reset();
    setTimeout(() => {
      success.style.display = "block";
      form.style.margin = "0px auto";
    }, 1000);
  } else {
    success.style.display = "none";
    form.style.margin = "80px auto";
  }
}

form.addEventListener("submit", formValidation);

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
function checkNumber(subject) {
  let regex = /^[\d,\s,\+,\-]{8,10}/;
  const numberMatches = regex.test(subject);
  return numberMatches;
}
