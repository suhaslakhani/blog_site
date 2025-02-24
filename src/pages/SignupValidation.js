document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      let isValid = true;
  
      // Get form elements
      let username = document.getElementById("Fname");
      let email = document.getElementById("formEmail");
      let password = document.getElementById("formPassword");
      let confirmPassword = document.getElementById("formConfirmPassword");
  
      // Remove previous error messages
      document.querySelectorAll(".error-message").forEach((el) => el.remove());
  
      // Helper function to show error message
      function showError(input, message) {
        isValid = false;
        let error = document.createElement("p");
        error.className = "error-message text-red-500 text-sm mt-1";
        error.innerText = message;
        input.insertAdjacentElement("afterend", error);
      }
  
      // Validate username
      if (username.value.trim() === "") {
        showError(username, "Username is required.");
      }
  
      // Validate email
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        showError(email, "Enter a valid email address.");
      }
  
      // Validate password
      if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters.");
      }
  
      // Validate confirm password
      if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match.");
      }
  
      // If all fields are valid, submit the form
      if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
      }
    });
  });
  