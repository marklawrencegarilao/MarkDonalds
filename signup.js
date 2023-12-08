document.getElementById('showPassword').addEventListener('change', function() {
    var passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});


function showExtendedSignup(event) {
    event.preventDefault();

    var userInfo = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        province: document.getElementById('province').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value
    };

    localStorage.setItem('pendingSignup', JSON.stringify(userInfo));

    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signupFormFinal').style.display = 'flex';
}

    function completeSignup(event) {
        event.preventDefault();

        var savedUsername = document.getElementById('username').value;
        var savedPassword = document.getElementById('password').value;

        // Save username and password only after successful signup completion
        localStorage.setItem('username', savedUsername);
        localStorage.setItem('password', savedPassword);

        // Retrieve the pending user information
        var userInfo = JSON.parse(localStorage.getItem('pendingSignup'));

        var firstName = userInfo.firstName;
        var lastName = userInfo.lastName;
        var phoneNumber = userInfo.phoneNumber;
        var province = userInfo.province;
        var city = userInfo.city;
        var address = userInfo.address;

        localStorage.setItem(savedUsername, JSON.stringify(userInfo));

        localStorage.removeItem('pendingSignup');
        showAlert();
    }


function showAlert() {
    var alertBox = document.getElementById('signupAlert');
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

    if (alertBox) {
        alertBox.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closeAlert() {
    var alertBox = document.getElementById('signupAlert');
    var overlay = document.getElementById('overlay');

        alertBox.style.display = 'none';
        overlay.style.display = 'none';


        window.location.href = 'index.html';

}

document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault();

    var signupFormAlert = document.getElementById('signupFormAlert');
    var inputs = document.querySelectorAll('#signupForm input:not([type="submit"])');

    var anyEmpty = false;
    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            anyEmpty = true;
        }
    });

    if (anyEmpty) {
        signupFormAlert.style.display = 'block';
    } else {
        signupFormAlert.style.display = 'none';
        showExtendedSignup(event); 
}
});

document.getElementById('completeSignupButton').addEventListener('click', function(event) {
    event.preventDefault();

    var signupFormFinalAlert = document.getElementById('signupFormFinalAlert');
    var inputs = document.querySelectorAll('#signupFormFinal input:not([type="submit"])');

    var anyEmpty = false;
    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            anyEmpty = true;
        }
    });

    if (anyEmpty) {
        signupFormFinalAlert.style.display = 'block';
    } else {
        signupFormFinalAlert.style.display = 'none';
        completeSignup(event); 
}
});
