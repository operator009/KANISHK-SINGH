function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    // Dummy credentials (you can change)
    let validUser = "admin";
    let validPass = "12345";

    if (user === validUser && pass === validPass) {
        // Redirect to welcome page
        window.location.href = "welcome.html";
    } else {
        error.textContent = "Invalid Username or Password";
    }
}

