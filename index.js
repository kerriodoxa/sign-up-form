document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get password and confirm password values
    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('pass-confirm').value;

    
    // Check if passwords match
    if (password !== confirmPassword) {
        // Display error message
        const errorElement = document.getElementById('error');
        errorElement.innerHTML = "Passwords do not match.";
        return;
    }

    if (password.length < 8) {
        const errorElement = document.getElementById('error');
        errorElement.innerHTML = "Password should be at least 8 characters long.";
        return;
    }

    // If the passwords are valid, proceed with form submission
    event.target.submit();
});


// Validation function which adds classes to inputs
function validateInput(event) {
    const input = event.target;
    if (input.validity.valid) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    };

    const phoneInput = document.querySelector("input[type='tel']");
    if (isNaN(phoneInput.value)) {
        phoneInput.classList.add("invalid");
    } else phoneInput.classList.add("valid");
  }

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener ('input', validateInput);
});

