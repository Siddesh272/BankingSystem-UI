document.addEventListener("DOMContentLoaded", function () {
    const initiateLoanBtn = document.getElementById("initiateLoanBtn");
    const updateLoanBtn = document.getElementById("updateLoanBtn");
    const cancelLoanBtn = document.getElementById("cancelLoanBtn");
    const submitLoan = document.getElementById("submitLoan");
    const loanForm = document.getElementById("loanForm");
    const formTitle = document.getElementById("formTitle");
    const searchBtn = document.getElementById("searchBtn");
    const ackScreen = document.getElementById("acknowledgmentScreen");
    const confirmMessage = document.getElementById("confirmMessage");

    // Event listener for Initiate Loan Request
    initiateLoanBtn.addEventListener("click", function () {
        formTitle.textContent = "Initiate Loan Request";
        submitLoan.textContent = "Submit Loan Request";
        ackScreen.classList.add("hidden");
        confirmMessage.textContent = "";
        loanForm.reset();
    });

    // Event listener for Update Loan Request
    updateLoanBtn.addEventListener("click", function () {
        formTitle.textContent = "Update Loan Request";
        submitLoan.textContent = "Update Loan Request";
        ackScreen.classList.remove("hidden");
        confirmMessage.textContent = "";
        loanForm.reset();
        document.getElementById("customerSSN").disabled = true;
    });

    // Event listener for Cancel Loan Request
    cancelLoanBtn.addEventListener("click", function () {
        formTitle.textContent = "Cancel Loan Request";
        submitLoan.textContent = "Cancel Loan Request";
        ackScreen.classList.remove("hidden");
        confirmMessage.textContent = "";
        loanForm.reset();
        document.getElementById("customerSSN").disabled = true;
    });

    searchBtn.addEventListener("click", function () {
        const custID = document.getElementById("custID").value;
        if (custID !== "") {
            document.getElementById("customerSSN").value = custID;
            document.getElementById("customerName").value = "John Doe";
            document.getElementById("occupation").value = "Software Engineer";
            document.getElementById("employerName").value = "TCS";
            document.getElementById("employerAddress").value = "Yantra Park";
            document.getElementById("email").value = "john.doe@example.com";
            document.getElementById("address").value = "123 Main Street, Cityville, USA";
            document.getElementById("maritalStatus").value = "Single";
            document.getElementById("contactNumber").value = "9876543210";
            document.getElementById("loanAmount").value = "30000";
            document.getElementById("loanLength").value = "4";
        } else {
            alert("Please enter Customer ID to search.");
        }
    });

    // Submit button click event with form validation
    submitLoan.addEventListener("click", function () {
        
            const operation = submitLoan.textContent;

            if (operation === "Submit Loan Request") {
                if (validateForm()) {
                confirmMessage.textContent = "Loan Request Submitted Successfully!";
                confirmMessage.style.color = "green";
                }
            } else if (operation === "Update Loan Request") {
                confirmMessage.textContent = "Loan Request Updated Successfully!";
                confirmMessage.style.color = "green";
            } else if (operation === "Cancel Loan Request") {
                alert("Do you really want to cancel this loan?");
                loanForm.reset();
                confirmMessage.textContent = "Loan Request Canceled Successfully!";
                confirmMessage.style.color = "red";
            }
        
    });

    // Form validation function
    function validateForm() {
        const customerSSN = document.getElementById("customerSSN").value.trim();
        const customerName = document.getElementById("customerName").value.trim();
        const occupation = document.getElementById("occupation").value.trim();
        const employerName = document.getElementById("employerName").value.trim();
        const employerAddress = document.getElementById("employerAddress").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const contactNumber = document.getElementById("contactNumber").value.trim();
        const loanAmount = document.getElementById("loanAmount").value.trim();
        const loanLength = document.getElementById("loanLength").value.trim();

        // Check if any field is empty
        if (
            customerSSN === "" ||
            customerName === "" ||
            occupation === "" ||
            employerName === "" ||
            employerAddress === "" ||
            email === "" ||
            address === "" ||
            contactNumber === "" ||
            loanAmount === "" ||
            loanLength === ""
        ) {
            confirmMessage.textContent = "All fields are required.";
            confirmMessage.style.color = "red";
            return false;
        }

        // Validate SSN is exactly 9 digits
        if (customerSSN.length !== 9 || isNaN(customerSSN)) {
            confirmMessage.textContent = "Please enter a valid 9-digit SSN.";
            confirmMessage.style.color = "red";
            return false;
        }

        // Validate customer name length (Maximum 50 characters)
        if (customerName.length > 50) {
            confirmMessage.textContent = "Customer Name cannot exceed 50 characters.";
            confirmMessage.style.color = "red";
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            confirmMessage.textContent = "Please enter a valid email address.";
            confirmMessage.style.color = "red";
            return false;
        }

        // Validate address length (Maximum 100 characters)
        if (address.length > 100) {
            confirmMessage.textContent = "Address cannot exceed 100 characters.";
            confirmMessage.style.color = "red";
            return false;
        }

        // Validate Contact Number (10 digits, must be numeric)
        if (contactNumber.length !== 10 || isNaN(contactNumber)) {
            confirmMessage.textContent = "Please enter a valid 10-digit contact number.";
            confirmMessage.style.color = "red";
            return false;
        }

        // Validate Loan Amount (must be a positive number)
        if (isNaN(loanAmount) || parseFloat(loanAmount) <= 0) {
            confirmMessage.textContent = "Please enter a valid loan amount.";
            confirmMessage.style.color = "red";
            return false;
        }

        // Validate Loan Length (must be a positive number)
        if (isNaN(loanLength) || parseInt(loanLength) <= 0) {
            confirmMessage.textContent = "Please enter a valid loan length in years.";
            confirmMessage.style.color = "red";
            return false;
        }

        // If all validations pass
        confirmMessage.textContent = "";
        return true;
    }
});
