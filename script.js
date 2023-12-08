
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


document.addEventListener('DOMContentLoaded', function() {
const sections = document.querySelectorAll('#mainContent > section');
const buttons = document.querySelectorAll('.buttons1');

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
});

/* */



document.addEventListener('DOMContentLoaded', function () {
    const headerBtn = document.querySelector('.headerdropbtn');
    const accBtn = document.querySelector('.accountlogo');
    const dropMenu = document.querySelector('.headerdropbuttons');
    const accdropMenu = document.querySelector('.accdropbuttons');
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
            if (parseInt(accdropMenu.style.left) <= 220) {
                accdropMenu.style.left = '-220px';
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
        if (parseInt(accdropMenu.style.left) <= -220) {
            accdropMenu.style.left = '-20px'; 
            overlay1.style.display = 'block';
            if (parseInt(dropMenu.style.left) <= 220) {
                dropMenu.style.left = '-220px';
                overlay.style.display = 'none';
            } else {
                dropMenu.style.left = '-20px';
            }
        } else {
            accdropMenu.style.left = '-220px'; // Slide out to the right
            overlay1.style.display = 'none';
        }
    });

});



/* */
document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("mainContent");
    mainContent.classList.add("loaded");
  });
  
  /* */

  document.getElementById('loginButtonId').addEventListener('click', function (event) {
    event.preventDefault();

    var username = document.getElementById('usernameInputId').value;
    var password = document.getElementById('passwordInputId').value;
    var isLoggedIn = loginUser(username, password);
    var loginFormAlert = document.getElementById('loginFormAlert');
    var inputs = document.querySelectorAll('#loginForm input:not([type="submit"])');

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
});

function updateLoginButtons() {
    const notLoggedInUl = document.querySelector('.notLoggedIn');
    const loggedInUl = document.querySelector('.loggedIn');

    if (isLoggedIn()) {
        notLoggedInUl.style.display = 'none';
        loggedInUl.style.display = 'block';
    } else {
        notLoggedInUl.style.display = 'block';
        loggedInUl.style.display = 'none';
    }
}

updateLoginButtons();