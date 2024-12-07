document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("formTitle");
    const submitBtn = document.getElementById("submitBtn");
    const searchBtn = document.getElementById("searchBtn");
    const customerForm = document.getElementById("customerForm");
    const ackScreen = document.getElementById("acknowledgmentScreen");
    const confirmMessage = document.getElementById("confirmMessage");
    
    // Buttons for the menu
    const addCustomerBtn = document.getElementById("addCustomerBtn");
    const updateCustomerBtn = document.getElementById("updateCustomerBtn");
    const deleteCustomerBtn = document.getElementById("deleteCustomerBtn");

    // Event listener for Add Customer
    addCustomerBtn.addEventListener("click", function () {
        formTitle.textContent = "Add Customer";
        submitBtn.textContent = "Add Customer";
        ackScreen.classList.add("hidden");
        confirmMessage.textContent = "";
        resetForm();
    });

    // Event listener for Update Customer
    updateCustomerBtn.addEventListener("click", function () {
        formTitle.textContent = "Update Customer";
        submitBtn.textContent = "Update Customer";
        ackScreen.classList.remove("hidden");
        resetForm();
        confirmMessage.textContent = "";
        // Assume customer details are fetched here for editing
        document.getElementById("ssn").disabled = true; // SSN should not be editable
    });

    // Event listener for Delete Customer
    deleteCustomerBtn.addEventListener("click", function () {
        formTitle.textContent = "Delete Customer";
        submitBtn.textContent = "Delete Customer";
        ackScreen.classList.remove("hidden");
        resetForm();
        confirmMessage.textContent = "";
        document.getElementById("ssn").disabled = true;
    });

    searchBtn.addEventListener("click", function () {
        const custID = document.getElementById("custID").value;
        if (custID !== "") {
            document.getElementById("ssn").value = custID;
            document.getElementById("customerName").value = "John Doe";
            document.getElementById("accountNumber").value = "12345678901";
            document.getElementById("ifscCode").value = "HDFC0001234";
            document.getElementById("accountBalance").value = "500000";
            document.getElementById("aadharCardNo").value = "123456789012";
            document.getElementById("panCardNo").value = "ABCDE1234F";
            document.getElementById("dob").value = "1985-05-15";
            document.getElementById("gender").value = "Male";
            document.getElementById("maritalStatus").value = "Married";
            document.getElementById("email").value = "john.doe@example.com";
            document.getElementById("contactNumber").value = "9876543210";
            document.getElementById("address").value = "123 Main Street, Cityville, USA";
        } else {
            alert("Please enter Customer ID to search.");
        }
    });

    // Form validation function
    function validateForm() {
        const ssn = document.getElementById("ssn").value.trim();
        const customerName = document.getElementById("customerName").value.trim();
        const email = document.getElementById("email").value.trim();
        const contactNumber = document.getElementById("contactNumber").value.trim();
        const address = document.getElementById("address").value.trim();
        
        // Check if any field is empty
        if (ssn === "" || customerName === "" || email === "" || contactNumber === "" || address === "") {
            confirmMessage.textContent = "All fields are required.";
            return false;
        }

        // Validate SSN (Optional: add more complex validation if needed)
        if (ssn.length !== 7 || isNaN(ssn)) {
            confirmMessage.textContent = "Please enter a valid SSN.";
            return false;
        }

        // Validate Name length (Maximum 50 characters)
        if (customerName.length > 50) {
            confirmMessage.textContent = "Customer Name cannot exceed 50 characters.";
            return false;
        }

        // Validate Email format (simple regex for basic email validation)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            confirmMessage.textContent = "Please enter a valid email address.";
            return false;
        }

        // Validate Address length (Maximum 100 characters)
        if (address.length > 100) {
            confirmMessage.textContent = "Address cannot exceed 100 characters.";
            return false;
        }

        // Validate Contact Number (10 digits, must be numeric)
        if (contactNumber.length !== 10 || isNaN(contactNumber)) {
            confirmMessage.textContent = "Please enter a valid 10-digit contact number.";
            return false;
        }
        confirmMessage.textContent = ""; 
        return true;
       
    }

    // Submit button click event with validation
    submitBtn.addEventListener("click", function (e) {
       

        

        const operation = submitBtn.textContent;

        if (operation === "Add Customer") {
           // Prevent form submission to validate first
            if (validateForm()) {
                confirmMessage.textContent = "Customer Registration Successful!";
            confirmMessage.style.color = "green";// Stop the process if validation fails
            }
            
           // Clear error message if validation passes
            
        } else if (operation === "Update Customer") {
            confirmMessage.textContent = "Customer Information Updated Successfully!";
            confirmMessage.style.color = "green";
        } else if (operation === "Delete Customer") {
            const confirmation = confirm("Do you really want to delete this customer?");
            if (confirmation) {
                resetForm();
                confirmMessage.textContent = "Customer Deleted Successfully!";
                confirmMessage.style.color = "red";
            }
        }
    });

    // Reset form
    function resetForm() {
        customerForm.reset();
        document.getElementById("ssn").disabled = false;
    }
});
