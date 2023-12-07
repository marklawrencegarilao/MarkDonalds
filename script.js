
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









document.addEventListener('DOMContentLoaded', function () {
    const headerBtn = document.querySelector('.headerdropbtn');
    const dropMenu = document.querySelector('.headerdropbuttons');
    const overlay = document.createElement('div');

    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'none';
    overlay.style.zIndex = '501';
    dropMenu.style.left = '-500px';

    setTimeout(function() {
        dropMenu.style.left = '-220px';
      }, 2000);

    document.body.appendChild(overlay);

    headerBtn.addEventListener('click', function () {
        if (parseInt(dropMenu.style.left) <= -220) {
            dropMenu.style.left = '-20px';
            overlay.style.display = 'block';
        } else {
            dropMenu.style.left = '-220px';
            overlay.style.display = 'none';
        }
    });
});

