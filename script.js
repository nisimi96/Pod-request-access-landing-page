document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for validation

    const emailInput = document.getElementById('email');
    const errorMsg = document.querySelector('.error-text');
    const formDiv = document.querySelector('.form-div');
    const successMsg = document.querySelector('.success-text');

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the input is empty or not a valid email
    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
        errorMsg.classList.add('show-error'); // Show error message
        formDiv.classList.add('error-border'); // Add border to the form div
        successMsg.classList.remove('show-success'); // Hide success message if showing
    } else {
        errorMsg.classList.remove('show-error'); // Hide error message
        formDiv.classList.remove('error-border'); // Remove border from form div
        successMsg.classList.add('show-success'); // Show success message
        emailInput.value = ''; 
    }
});
