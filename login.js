
var users = [
    { email: "admin@gmail.com", password: "12345678", redirect: "" },
    { email: "Dilip", password: "Dilip@123", redirect: "main.html" },
];

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.assign(user.redirect);
        
    } else {
        alert("Invalid User");
    }
}