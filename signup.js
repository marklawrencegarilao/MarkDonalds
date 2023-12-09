function signup() {

    document.getElementById('showPassword1').addEventListener('change', function () {
        var passwordInput = document.getElementById('password');
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    function isUsernameTaken(username) {
        return storedUsernames.includes(username);
    }

    function storeUserDetails(username, userInfo) {
        localStorage.setItem(username, JSON.stringify(userInfo));
    }

    function showExtendedSignup(event) {
        event.preventDefault();

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
        userInfo = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            province: document.getElementById('province').value,
            city: document.getElementById('city').value,
            address: document.getElementById('address').value
          };
      
          storedUsernames.push(savedUsername);
          localStorage.setItem('usernames', JSON.stringify(storedUsernames));
      
          storeUserDetails(savedUsername, userInfo);

        isLoggedIn = true;

        function updateLoginButtons() {
            const notLoggedInElements = document.querySelectorAll('.notLoggedIn');
            const loggedInElements = document.querySelectorAll('.loggedIn');
            const logOutButton = document.querySelector('.logOutButton');
        
            notLoggedInElements.forEach(element => {
                element.style.display = isLoggedIn ? 'none' : 'flex';
            });
        
            loggedInElements.forEach(element => {
                element.style.display = isLoggedIn ? 'flex' : 'none';
            });
        
            logOutButton.style.display = isLoggedIn ? 'flex' : 'none';
        }


        updateLoginButtons();


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


        loadContent('index.html')

    }

    document.getElementById('signupButton').addEventListener('click', function (event) {
        event.preventDefault();

        const usernameIdValue = document.getElementById('username').value;
        const usernameTakenAlert = document.getElementById('usernameTakenAlert');

        if (isUsernameTaken(usernameIdValue)) {
            usernameTakenAlert.style.display = 'block';
        } else {
            usernameTakenAlert.style.display = 'none';

            var signupFormAlert = document.getElementById('signupFormAlert');
            var inputs = document.querySelectorAll('#signupForm input:not([type="submit"])');

            var anyEmpty = false;
            inputs.forEach(function (input) {
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
        }
    });

    document.getElementById('completeSignupButton').addEventListener('click', function (event) {
        event.preventDefault();

        var signupFormFinalAlert = document.getElementById('signupFormFinalAlert');
        var inputs = document.querySelectorAll('#signupFormFinal input:not([type="submit"])');

        var anyEmpty = false;
        inputs.forEach(function (input) {
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

    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', function () {
        closeAlert();
    })

    /* */
    function loadContent(url) {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                const tempElement = document.createElement('div');
                tempElement.innerHTML = data;
                const newMainContent = tempElement.querySelector('#mainContent');
                if (newMainContent) {
                    mainContent.innerHTML = newMainContent.innerHTML;
                    initSlideshow();
                    updateButtonsBasedOnSections();
                    logins();
                } else {
                    console.error('Main content not found in fetched page.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

}