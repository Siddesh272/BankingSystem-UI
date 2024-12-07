document.addEventListener("DOMContentLoaded", function () {
    const submitTransaction = document.getElementById("submitTransaction");
    const confirmMessage = document.getElementById("confirmMessage");

    // Submit button click event with form validation
    submitTransaction.addEventListener("click", function () {
        if (validateForm()) {
            confirmMessage.textContent = "Transaction Recorded Successfully!";
            confirmMessage.style.color = "green";
        }
    });

    // Form validation function
    function validateForm() {
        const transactionId = document.getElementById('transactionId').value.trim();
        const ssn = document.getElementById('ssn').value.trim();
        const customerName = document.getElementById('customerName').value.trim();
        const accountId = document.getElementById('accountId').value.trim();
        const aadharCardNo = document.getElementById('aadharCardNo').value.trim();
        const panCardNo = document.getElementById('panCardNo').value.trim();
        const address = document.getElementById('address').value.trim();
        const transactionDate = document.getElementById('transactionDate').value.trim();
        const contactNumber = document.getElementById('contactNumber').value.trim();
        const modeOfTransaction = document.getElementById('modeOfTransaction').value;
        const transactionAmount = document.getElementById('transactionAmount').value.trim();
        const creditOrDebit = document.getElementById('creditOrDebit').value;
        const errorMessage = document.getElementById("errorMessage");


        // Check if any field is empty
        if (transactionId === "" || ssn === "" || customerName === "" || accountId === "" || aadharCardNo === "" || panCardNo === "" || address === "" || transactionDate === "" || contactNumber === "" || modeOfTransaction === "" || transactionAmount === "" || creditOrDebit === "") {
            errorMessage.textContent = "All fields are required.";
            errorMessage.style.color = "red";
            return false;
        }

        // Validate SSN is exactly 9 digits
        if (ssn.length !== 9 || isNaN(ssn)) {
            errorMessage.textContent = "Please enter a valid 9-digit SSN.";
            errorMessage.style.color = "red";
            return false;
        }

        // Validate customer name length (Maximum 50 characters)
        if (customerName.length > 50) {
            errorMessage.textContent = "Customer Name cannot exceed 50 characters.";
            errorMessage.style.color = "red";
            return false;
        }

        // Validate Aadhar Card number (12 digits)
        if (aadharCardNo.length !== 12 || isNaN(aadharCardNo)) {
            errorMessage.textContent = "Please enter a valid 12-digit Aadhar Card number.";
            errorMessage.style.color = "red";
            return false;
        }

        // Validate PAN Card number (should be alphanumeric and exactly 10 characters)
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panRegex.test(panCardNo)) {
            errorMessage.textContent = "Please enter a valid PAN Card number (e.g., ABCDE1234F).";
            errorMessage.style.color = "red";
            return false;
        }

        // Validate Address length (Maximum 100 characters)
        if (address.length > 100) {
            errorMessage.textContent = "Address cannot exceed 100 characters.";
            errorMessage.style.color = "red";
            return false;
        }

        // Validate Contact Number (10 digits, must be numeric)
        if (contactNumber.length !== 10 || isNaN(contactNumber)) {
            errorMessage.textContent = "Please enter a valid 10-digit contact number.";
            errorMessage.style.color = "red";
            return false;
        }

        // Validate Transaction Amount is a positive number
        if (isNaN(transactionAmount) || parseFloat(transactionAmount) <= 0) {
            errorMessage.textContent = "Please enter a valid transaction amount.";
            errorMessage.style.color = "red";
            return false;
        }

        // If all validations pass
        errorMessage.textContent = "";
        return true;
    }
});
