document.addEventListener("DOMContentLoaded", function() {
    let savedUsername = localStorage.getItem("savedUser");
    
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("rememberMe").checked = true;
    }
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let rememberMe = document.getElementById("rememberMe").checked;

    if (username && password.length >= 8) {
        if (rememberMe) {
            localStorage.setItem("savedUser", username);
        }
        window.location.href = "dashboard.html";
    }
});

document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (username && email.includes("@") && password.length >= 8 && password === confirmPassword) {
        localStorage.setItem("savedUser", username);
        window.location.href = "dashboard.html";
    }
});