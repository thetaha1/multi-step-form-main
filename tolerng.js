const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

form.addEventListener("submit", function (event) {
  let isValid = true;

  // Name validation (must be at least two words)
  const nameValue = nameInput.value.trim();
  const nameWords = nameValue.split(" ");
  if (nameWords.length < 2) {
    nameError.textContent = "Please enter at least two words for the name.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (basic format check)
  const emailValue = emailInput.value.trim();
  if (!isValidEmail(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Phone number validation (basic format check)
  const phoneValue = phoneInput.value.trim();
  if (!isValidPhoneNumber(phoneValue)) {
    phoneError.textContent = "Please enter a valid phone number.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if there are errors
  }
});

function isValidEmail(email) {
  // Basic email format validation (you can use a more robust regex)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phone) {
  // Basic phone number format validation (you can customize it)
  return /^\+\d{1,4}\s\d{1,4}\s\d{1,4}\s\d{1,4}$/.test(phone);
}
