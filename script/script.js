"use strict"

document.getElementById('close-menu').addEventListener('click', closeMenu);
document.getElementById('show-menu').addEventListener('click', showMenu);
document.getElementById('show-menu-mob').addEventListener('click', showMenu);

//close menu from 'X' link
function closeMenu(event) {
    document.getElementById('sub-navigation').classList.remove('show');
}
//toogle menu
function showMenu(event) {
    document.getElementById('sub-navigation').classList.toggle('show');
}

document.getElementById('sub-navigation').addEventListener('click', (e) => {

    if (e.target.tagName == 'A' && e.target.classList.contains('main-sub-link')) {

        e.target.nextElementSibling.classList.toggle('show');
    }
})