function logins() {

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

        const notLoggedInElements = document.querySelectorAll('.notLoggedIn');
        const loggedInElements = document.querySelectorAll('.loggedIn');
        const logOutButton = document.querySelector('.logOutButton');

        if ((username === savedUsername || username === "mark") && (password === savedPassword || password === "Markdonalds@123")) {
            overlay.style.display = 'block';
            loginAlert.style.display = 'block';
            failedLoginAlert.style.display = 'none';

            notLoggedInElements.forEach(element => {
            element.style.display = 'none';
        });
    
        loggedInElements.forEach(element => {
            element.style.display = 'flex';
        });
    
        logOutButton.style.display = 'flex';

            isLoggedIn = true;
            sessionStorage.setItem('loggedInUsername', savedUsername);
            sessionStorage.setItem('loggedInUserInfo', JSON.stringify(savedUserInfo));


            const additionalUserInfo = {
                firstName: savedUserInfo.firstName,
                lastName: savedUserInfo.lastName,
                phoneNumber: savedUserInfo.phoneNumber,
                province: savedUserInfo.province,
                city: savedUserInfo.city,
                address: savedUserInfo.address

            };

            sessionStorage.setItem('loggedInAdditionalInfo', JSON.stringify(additionalUserInfo));


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
        loadContent('index.html');
    }

    function closeFailedLoginAlert() {
        document.getElementById('failedLoginAlert').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    document.getElementById('loginButtonId').addEventListener('click', function (event) {
        event.preventDefault();

        var loginFormAlert = document.getElementById('loginFormAlert');
        var inputs = document.querySelectorAll('#loginForm input:not([type="submit"])');
        isLoggedIn = loginUser();

        var anyEmpty = false;
        inputs.forEach(function (input) {
            if (!input.value.trim()) {
                anyEmpty = true;
            }
        });

        if (anyEmpty) {
            loginFormAlert.style.display = 'block';
        } else {
            loginFormAlert.style.display = 'none';
        }

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

        const closeBtn = document.getElementById('closebtn');
        const closefailedBtn = document.getElementById('closefailedbtn');

        closeBtn.addEventListener('click', function () {
            closeLoginAlert();
        });
        closefailedBtn.addEventListener('click', function () {
            closeFailedLoginAlert();
        });
    });



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