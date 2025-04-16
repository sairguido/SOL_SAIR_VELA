
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!validateEmail(email)) {
            alert("Correo electrónico no válido.");
            return;
        }

        if (!validatePassword(password)) {
            alert("La contraseña debe tener mayúsculas, minúsculas, número y carácter especial.");
            return;
        }

        const storedEmail = localStorage.getItem("registeredEmail");
        const storedPassword = localStorage.getItem("registeredPassword");

        if (email === storedEmail && password === storedPassword) {
          
            document.getElementById("loader").style.display = "flex";

            setTimeout(() => {
                localStorage.setItem("userEmail", email); 
                window.location.href = "../index.html";
            }, 2000);
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
}


if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        if (!validateEmail(email)) {
            alert("Correo electrónico no válido.");
            return;
        }

        if (!validatePassword(password)) {
            alert("La contraseña debe tener mayúsculas, minúsculas, número y carácter especial.");
            return;
        }


        localStorage.setItem("registeredEmail", email);
        localStorage.setItem("registeredPassword", password);

        alert("Registro exitoso. Ahora inicia sesión.");
        window.location.href = "../views/login.html";
    });
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;
    return re.test(password);
}


if (window.location.pathname.includes("index.html")) {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
        window.location.href = "views/login.html";
    } else {
        const greeting = document.getElementById("greeting");
        if (greeting) {
            greeting.textContent = `Bienvenido, ${userEmail}`;
        }
    }
    if (document.getElementById("logoutButton")) {
        document.getElementById("logoutButton").addEventListener("click", function () {
            localStorage.removeItem("userEmail");
            window.location.href = "views/login.html"; 
        });
    }
}
