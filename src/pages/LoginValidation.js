
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

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    let isValid = true;

    // Email Validation
    let emailInput = document.getElementById("formEmail");
    let emailValidationMsg = document.getElementById("emailValidation");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      emailValidationMsg.textContent = "Please enter a valid email address.";
      emailValidationMsg.style.color = "red";
      isValid = false;
    } else {
      emailValidationMsg.textContent = "";
    }

    // Password Validation
    let passwordInput = document.getElementById("formPassword");
    if (passwordInput.value.length < 6) {
      alert("Password must be at least 6 characters long.");
      isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });
});
