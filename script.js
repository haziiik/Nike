const hamburgerButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');


function toggleMenu() {
    menu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    hamburgerButton.classList.toggle('open');
}



hamburgerButton.addEventListener('click', toggleMenu);