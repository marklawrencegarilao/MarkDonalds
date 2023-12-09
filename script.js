
function initSlideshow() {
    $('.slides').slick({
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 600,
        speed: 2000
    });

    $('.imagede').slick({
        centerMode: true,
        centerPadding: '100vw',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,

    })
}

initSlideshow()

function updateButtonsBasedOnSections() {
    const sections = document.querySelectorAll('#mainContent > section');
    const buttons = document.querySelectorAll('.buttons1');

    // Remove the class from all buttons initially
    buttons.forEach(button => {
        button.classList.remove('on-specific-page');
    });

    if (buttons.length > 0) {
        sections.forEach((section, index) => {
            if (section.id === 'home' && index < buttons.length) {
                buttons[0].classList.add('on-specific-page');
            } else if (section.id === 'menu' && index < buttons.length) {
                buttons[1].classList.add('on-specific-page');
            } else if (section.id === 'about' && index < buttons.length) {
                buttons[2].classList.add('on-specific-page');
            }
        });
    }
}


// Call the function to update classes based on sections
updateButtonsBasedOnSections();

/* */


document.addEventListener('DOMContentLoaded', function() {
    
    const loggedInLinks = document.querySelectorAll('#loggedIn a');
    const headerButtons = document.querySelectorAll('.headerbuttons .buttons1');
    const headerDropButtons = document.querySelectorAll('.headerdropbuttons .dropdownbtns');
    const mainContent = document.getElementById('mainContent');

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
                } else {
                    console.error('Main content not found in fetched page.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    

    function loadLoginContent() {
        fetch('login.html')
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

    function loadSignupContent() {
        fetch('signup.html')
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
                    signup();
                } else {
                    console.error('Main content not found in fetched page.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const logInButtonHeader = document.querySelector('.headerbuttons .buttons2[href="login.html"]');
    const signUpButtonHeader = document.querySelector('.headerbuttons .buttons2[href="signup.html"]');
    const logInButtonDropdown = document.querySelector('.dropdownaccbtns[href="login.html"]');
    const signUpButtonDropdown = document.querySelector('.dropdownaccbtns[href="signup.html"]');

    function handleLoginClick(event) {
        event.preventDefault();
        loadLoginContent();
    }

    function handleSignupClick(event) {
        event.preventDefault();
        loadSignupContent();
    }

    if (logInButtonHeader && signUpButtonHeader) {
        logInButtonHeader.addEventListener('click', handleLoginClick);
        signUpButtonHeader.addEventListener('click', handleSignupClick);
    }

    if (logInButtonDropdown && signUpButtonDropdown) {
        logInButtonDropdown.addEventListener('click', handleLoginClick);
        signUpButtonDropdown.addEventListener('click', handleSignupClick);
    }

    function handleLinkClick(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        loadContent(href);
    }

    loggedInLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    headerButtons.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    headerDropButtons.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
});



/* */


document.addEventListener('DOMContentLoaded', function () {
    const headerBtn = document.querySelector('.headerdrpsymb');
    const accBtn = document.querySelector('.accountlogo');
    const dropMenu = document.querySelector('.headerdropbuttons');
    const dropMenubtns = document.querySelectorAll('.headerdropbuttons a');
    const accdropMenu = document.querySelector('.accdropbuttons');
    const accdropMenubtns = document.querySelectorAll('.accdropbuttons a');
    const accdropMenu1 = document.querySelector('.accdropbuttons1');
    const accdropMenu1btns = document.querySelectorAll('.accdropbuttons1 a');
    const overlay = document.createElement('div');
    const overlay1 = document.createElement('div');

    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'none';
    overlay.style.zIndex = '501';
    dropMenu.style.left = '-500px';

    document.body.appendChild(overlay);

    headerBtn.addEventListener('click', function () {
        if (parseInt(dropMenu.style.left) <= -220) {
            dropMenu.style.left = '-20px';
            overlay.style.display = 'block';
            if (parseInt(accdropMenu.style.left) <= 220 || parseInt(accdropMenu1.style.left) <= 220) {
                accdropMenu.style.left = '-220px';
                accdropMenu1.style.left = '-220px';
                overlay1.style.display = 'none';
            } else {
                dropMenu.style.left = '-20px';
            }
        } else {
            dropMenu.style.left = '-220px';
            overlay.style.display = 'none';
        }
    });

    overlay1.style.position = 'fixed';
    overlay1.style.top = '0';
    overlay1.style.left = '0';
    overlay1.style.width = '100%';
    overlay1.style.height = '100%';
    overlay1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay1.style.display = 'none';
    overlay1.style.zIndex = '501';
    accdropMenu.style.left = '-500px'; // Set initial position to be off the screen from the right

    document.body.appendChild(overlay1);

    accBtn.addEventListener('click', function () {
        if (parseInt(accdropMenu.style.left) <= -220 || parseInt(accdropMenu1.style.left) <= -220) {
            accdropMenu.style.left = '-20px';
            accdropMenu1.style.left = '-20px';
            overlay1.style.display = 'block';
            if (parseInt(dropMenu.style.left) <= 220) {
                dropMenu.style.left = '-220px';
                overlay.style.display = 'none';
            } else {
                dropMenu.style.left = '-20px';
            }
        } else {
            accdropMenu.style.left = '-220px';
            accdropMenu1.style.left = '-220px';  // Slide out to the right
            overlay1.style.display = 'none';
        }
    });

    
    dropMenubtns.forEach(function(btn) {
        btn.addEventListener('click', function () {
            closeSidebar();
        });
    });
    
    accdropMenubtns.forEach(function(btn) {
        btn.addEventListener('click', function () {
            closeSidebar();
        });
    });
    
    accdropMenu1btns.forEach(function(btn) {
        btn.addEventListener('click', function () {
            closeSidebar();
        });
    });

function closeSidebar() {
    dropMenu.style.left = '-220px';
    overlay.style.display = 'none';
    accdropMenu.style.left = '-220px';
    accdropMenu1.style.left = '-220px';
    overlay1.style.display = 'none';
}


});


var isLoggedIn = false;
/* */
document.addEventListener("DOMContentLoaded", function () {
    const notLoggedInElements = document.querySelectorAll('.notLoggedIn');
    const loggedInElements = document.querySelectorAll('.loggedIn');
    const logOutButton = document.querySelector('.logOutButton');

    notLoggedInElements.forEach(element => {
        if (isLoggedIn) {
            element.style.display = 'none';
        }
    });

    loggedInElements.forEach(element => {
        if (isLoggedIn) {
            element.style.display = 'flex';
        }
    });

    logOutButton.style.display = isLoggedIn ? 'flex' : 'none';

    const mainContent = document.getElementById("mainContent");
    mainContent.classList.add("loaded");
});




/* */

const logOutButtonByClass = document.querySelector('.logOutButton');

logOutButtonByClass.addEventListener('click', function (event) {
    event.preventDefault();

    handleLogOut();
    
    function handleLogOut() {
        isLoggedIn = false;
    
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
    
        sessionStorage.clear();
}
});


document.getElementById('logOut').addEventListener('click', function (event) {
    event.preventDefault();

handleLogOut();

function handleLogOut() {
    isLoggedIn = false;

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

    sessionStorage.clear();
}
})

const storedUsernames = JSON.parse(localStorage.getItem('usernames')) || [];

var userInfo = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    province: '',
    city: '',
    address: ''
};

const additionalUserInfo = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    province: '',
    city: '',
    address: ''

};
