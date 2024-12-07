document.addEventListener("DOMContentLoaded", function () {
    // Redirects to respective management pages
    document.getElementById("customerManagement").addEventListener("click", function () {
        window.location.href = "../Customer/customer-manage.html"; // Replace with actual customer management page
    });

    document.getElementById("transactionManagement").addEventListener("click", function () {
        window.location.href = "../Transaction/transaction-manage.html"; // Replace with actual transaction management page
    });

    document.getElementById("loanManagement").addEventListener("click", function () {
        window.location.href = "../Loan/loan-manage.html"; // Replace with actual loan management page
    });
});
