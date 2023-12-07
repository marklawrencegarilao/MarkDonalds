
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

/* */

const currentPage = window.location.href;

// Check if the URL ends with "home.html"
if (currentPage.endsWith("index.html")) {
    // Find the first child of elements with class .buttons1 and add the class .on-specific-page
    const buttons = document.querySelectorAll('.buttons1');
    if (buttons.length > 0) {
        buttons[0].classList.add('on-specific-page');
    }
}

if (currentPage.endsWith("menu.html")) {
    // Find the first child of elements with class .buttons1 and add the class .on-specific-page
    const buttons = document.querySelectorAll('.buttons1');
    if (buttons.length > 0) {
        buttons[1].classList.add('on-specific-page');
    }
}

if (currentPage.endsWith("about.html")) {
    // Find the first child of elements with class .buttons1 and add the class .on-specific-page
    const buttons = document.querySelectorAll('.buttons1');
    if (buttons.length > 0) {
        buttons[2].classList.add('on-specific-page');
    }
}







  document.addEventListener('DOMContentLoaded', function() {
    const headerBtn = document.querySelector('.headerdropbtn');
    const dropMenu = document.querySelector('.headerdropbuttons');
    const overlay = document.createElement('div'); // Create an overlay element

    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Semi-transparent white
    overlay.style.display = 'none'; // Initially hidden
    overlay.style.zIndex = '500';

    document.body.appendChild(overlay); // Append the overlay to the document body

    headerBtn.addEventListener('click', function() {
        if (dropMenu.style.left === '-220px') {
            dropMenu.style.left = '-20px';
            overlay.style.display = 'block'; // Show the overlay when the menu pops up
        } else {
            dropMenu.style.left = '-220px';
            overlay.style.display = 'none'; // Hide the overlay when the menu closes
        }
    });
});

