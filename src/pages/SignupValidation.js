const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let username = usernameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (username.length < 3) {
      usernameError.textContent = "Username must be at least 3 characters long.";
      return;
  }

    // Strict Gmail validation
    let gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(email)) {
      emailError.textContent =
        "Please enter a valid Gmail address (e.g., example@gmail.com).";
      return;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      passwordError.textContent =
        "Password must be at least 6 characters long.";
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      return;
    }

    // If signup is successful, redirect to login page
    alert("Signup successful! Redirecting to login page...");
    window.location.href = "./login.html"; // Redirect to login page
  });

// Real-time validation to remove errors when input is corrected
usernameInput.addEventListener("input", function () {
  if (usernameInput.value.trim().length >= 3) {
      usernameError.textContent = "";
  }
});

emailInput.addEventListener("input", function () {
  if (/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim())) {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.value.trim().length >= 6) {
    passwordError.textContent = "";
  }
});

confirmPasswordInput.addEventListener("input", function () {
  if (confirmPasswordInput.value.trim() === passwordInput.value.trim()) {
    confirmPasswordError.textContent = "";
  }
});
