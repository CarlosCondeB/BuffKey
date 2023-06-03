const button = document.getElementById("login");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (checkLogin(username, password)) {
        window.location.href = "/src/screens/main.html";
    } else {
        alert("Nombre de usuario o contraseña incorrecta");
    }
});

function checkLogin(username, password) {
    if (username == "admin" && password == "admin") {
        return true;
    } else {
        return false;
    }
}
