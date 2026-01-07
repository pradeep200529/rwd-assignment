function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function register() {
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    if(username === "" || password === "") {
        alert("All fields are required!");
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration Successful! You can now login.");
        showLogin();
    }
}

function login() {
    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

   if(username === storedUser && password === storedPass) {
        alert("Login Successful!");
    } else {
        alert("Invalid Credentials! Try Again.");
    }
}

