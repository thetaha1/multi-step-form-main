const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

// Name Validation onBlur
nameInput.addEventListener("blur", function () {
  const nameValue = nameInput.value.trim();
  const nameWords = nameValue.split(" ");
  if (nameWords.length < 2) {
    nameError.textContent = "Please enter at least two words for the name.";
  } else {
    nameError.textContent = "";
  }
});
nameInput.addEventListener("focus", function () {
  nameError.textContent = "";
});

// Email Validation onBlur
emailInput.addEventListener("blur", function () {
  const emailValue = emailInput.value.trim();
  if (!isValidEmail(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
});
emailInput.addEventListener("focus", function () {
  emailError.textContent = "";
});

// Phone Validation onBlur
phoneInput.addEventListener("blur", function () {
  const phoneValue = phoneInput.value.trim();
  if (!isValidPhoneNumber(phoneValue)) {
    phoneError.textContent = "Please enter a valid phone number.";
  } else {
    phoneError.textContent = "";
  }
});
phoneInput.addEventListener("focus", function () {
  phoneError.textContent = "";
});

form.addEventListener("submit", function (event) {
  let isValid = true;

  // Name Validation
  const nameValue = nameInput.value.trim();
  const nameWords = nameValue.split(" ");
  if (nameWords.length < 2) {
    nameError.textContent = "Please enter at least two words for the name.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  const emailValue = emailInput.value.trim();
  if (!isValidEmail(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Phone Validation
  let phoneValue = phoneInput.value.trim();
  if (!isValidPhoneNumber(phoneValue)) {
    phoneError.textContent = "Please enter a valid phone number.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phone) {
  return /^01/.test(phone);
}
