
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    emailError.textContent = "";
    passwordError.textContent = "";

    // Strict Gmail validation (no typos allowed)
    let gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(email)) {
        emailError.textContent = "Please enter a valid Gmail address (e.g., example@gmail.com).";
    }

    // Password length validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
    }

    // Check if there are no errors before allowing login
    if (emailError.textContent === "" && passwordError.textContent === "") {
        alert("Login successful!");
        window.location.href = "../../index.html";
    }
});

// Real-time validation to remove errors when input is corrected
emailInput.addEventListener("input", function () {
    let email = emailInput.value.trim();
    let gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(email)) {
        emailError.textContent = ""; // Clear error when valid
    }
});

passwordInput.addEventListener("input", function () {
    if (passwordInput.value.trim().length >= 6) {
        passwordError.textContent = ""; // Clear error when valid
    }
});


// document.addEventListener('submit',loginValidation);

// function loginValidation() {
//   let em = document.querySelector("#formEmail").value;
//   console.log(typeof(em));
//   let pw = document.querySelector("#formPassword").value.length<6;
//   console.log(typeof(pw));
  
//   let Email = "example@gmail.com"
//   let password = "password"
//   if ((em == Email) && (pw == password)) {
//     alert('You are successfully logged in');
//   } else {
//     alert("Login was unsuccessful, please check your email and password");
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("form").addEventListener("submit", function (event) {
//     let isValid = true;

//     // Email Validation
//     let emailInput = document.getElementById("formEmail");
//     let emailValidationMsg = document.getElementById("emailValidation");
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(emailInput.value)) {
//       emailValidationMsg.textContent = "Please enter a valid email address.";
//       emailValidationMsg.style.color = "red";
//       isValid = false;
//     } else {
//       emailValidationMsg.textContent = "";
//     }

//     // Password Validation
//     let passwordInput = document.getElementById("formPassword");
//     if (passwordInput.value.length < 6) {
//       alert("Password must be at least 6 characters long.");
//       isValid = false;
//     }

//     // Prevent form submission if validation fails
//     if (!isValid) {
//       event.preventDefault();
//     }
//   });
// });
