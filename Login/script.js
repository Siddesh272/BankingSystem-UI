document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    
    // Handle login button click (Here, it's static, just redirect to the home page for the example)
    loginBtn.addEventListener("click", function () {
        const employeeId = document.getElementById("employeeId").value;
        const password = document.getElementById("password").value;

        if (employeeId === "" || password === "") {
            alert("Please enter both Employee ID and Password");
        } else {
            window.location.href = "../Home/home.html"; // Redirect to home page
        }
    });

    // Handle register button click to navigate to registration page
    registerBtn.addEventListener("click", function () {
        window.location.href = "../Register/register.html"; // Redirect to registration page
    });
});
