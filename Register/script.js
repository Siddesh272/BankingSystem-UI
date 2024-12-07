document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const registerBtn = document.getElementById("registerBtn");
    const ackScreen = document.getElementById("acknowledgmentScreen");
    const errorMessage=document.getElementById("errorMessage");
    
    
    // Registration button event
    registerBtn.addEventListener("click", function () {
          let firstName = document.getElementById("firstName").value;
          let lastName = document.getElementById("lastName").value;
          let email = document.getElementById("email").value;
          let password = document.getElementById("password").value;
          let confirmPassword = document.getElementById("confirmPassword").value;
          let address = document.getElementById("address").value;
          let contactNumber = document.getElementById("contactNumber").value;
          const empIdField  = Math.floor(1000000 + Math.random() * 9000000);
      

    // Check if any field is empty
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || address === "" || contactNumber === "") {
        errorMessage.textContent = "All fields are required.";
        return false;
    }

    // Validate First Name length (Maximum 50 characters)
    if (firstName.length > 50) {
        errorMessage.textContent = "First Name cannot exceed 50 characters.";
        return false;
    }

    // Validate Last Name length (Maximum 50 characters)
    if (lastName.length > 50) {
        errorMessage.textContent = "Last Name cannot exceed 50 characters.";
        return false;
    }

    // Validate Email format (simple regex for basic email validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // Validate Password length (Maximum 30 characters)
    if (password.length > 30) {
        errorMessage.textContent = "Password cannot exceed 30 characters.";
        return false;
    }

    // Validate Confirm Password (Must match Password)
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    // Validate Address length (Maximum 100 characters)
    if (address.length > 100) {
        errorMessage.textContent = "Address cannot exceed 100 characters.";
        return false;
    }

    // Validate Contact Number (10 digits, must be numeric)
    if (contactNumber.length !== 10 || isNaN(contactNumber)) {
        errorMessage.textContent = "Please enter a valid 10-digit contact number.";
        return false;
    }

    
      
        // Show acknowledgment screen
        document.getElementById("ackEmployeeId").textContent = empIdField;
        document.getElementById("ackName").textContent = `${firstName} ${lastName}`;
        document.getElementById("ackEmail").textContent = email;

        form.classList.add("hidden");
        ackScreen.classList.remove("hidden");
        // If all validations pass
       errorMessage.textContent = "";
       return true;


    });
    loginBtn.addEventListener("click", function () {
        window.location.href = "../Login/login.html"; // Redirect to registration page
    });
});
