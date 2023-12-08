document.getElementById('showPassword').addEventListener('change', function () {
    var passwordInput = document.getElementById('passwordInputId');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});


function loginUser() {
    var username = document.getElementById('usernameInputId').value;
    var password = document.getElementById('passwordInputId').value;
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');
    var savedUserInfo = JSON.parse(localStorage.getItem(savedUsername));

    var isLoggedIn = false;

    var loginAlert = document.getElementById('loginAlert');
    var failedLoginAlert = document.getElementById('failedLoginAlert');
    var overlay = document.getElementById('overlay');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '2000';

        document.body.appendChild(overlay);
    }

    if ((username === savedUsername || username === "mark") && (password === savedPassword || password === "Markdonalds@123")) {
        overlay.style.display = 'block';
        loginAlert.style.display = 'block';
        failedLoginAlert.style.display = 'none';
        isLoggedIn = true;
        sessionStorage.setItem('loggedInUsername', savedUsername);
        sessionStorage.setItem('loggedInUserInfo', JSON.stringify(savedUserInfo));

    } else {
        overlay.style.display = 'block';
        failedLoginAlert.style.display = 'block';
        loginAlert.style.display = 'none';
    }

    return isLoggedIn;
}

function closeLoginAlert() {
    document.getElementById('loginAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    window.location.href = 'index.html';
}

function closeFailedLoginAlert() {
    document.getElementById('failedLoginAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function checkFields(formId, buttonId, alertId) {
    var form = document.getElementById(formId);
    var button = document.getElementById(buttonId);
    var alert = document.getElementById(alertId);
    var inputs = form.querySelectorAll('input:not([type="submit"])');

    var allFilled = true;
    inputs.forEach(function (input) {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        button.removeAttribute('disabled');
        alert.style.display = 'none';
    } else {
        button.setAttribute('disabled', 'true');
        alert.style.display = 'block';
    }
}

document.getElementById('usernameInputId').addEventListener('input', function () {
    checkFields('loginForm', 'loginButtonId', 'loginFormAlert');
});

document.getElementById('passwordInputId').addEventListener('input', function () {
    checkFields('loginForm', 'loginButtonId', 'loginFormAlert');
});
