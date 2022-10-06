"use strict"

document.getElementById('close-menu').addEventListener('click', closeMenu);
document.getElementById('show-menu').addEventListener('click', showMenu);
document.getElementById('toogle-menu').addEventListener('click', toogleProcedures);
const links = [...document.querySelectorAll('a.pro')];

function closeMenu(event) {
    document.getElementById('toogle-menu').classList.add('closed');
}
function showMenu(event) {
    document.getElementById('toogle-menu').classList.remove('closed');
}

function toogleProcedures(event) {
    let clickedLink = event.target;
    if (clickedLink.tagName == 'A' && clickedLink.classList.contains('heading')) {
        //closed all open links
        links.filter(x => !x.classList.contains(clickedLink.id)).forEach(x => x.parentElement.classList.add('none'));
        //when click on heading link, toogle his sublinks
        links.filter(x => x.classList.contains(clickedLink.id)).forEach(x => x.parentElement.classList.toggle('none'))
    }
}