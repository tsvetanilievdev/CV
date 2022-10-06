"use strict"

document.getElementById('close-menu').addEventListener('click', closeMenu);
document.getElementById('show-menu').addEventListener('click', showMenu);
document.getElementById('toogle-menu').addEventListener('click', toogleProcedures);
const links = [...document.querySelectorAll('a.pro')];
const headingLinks = [...document.querySelectorAll('a.heading')];
console.log(headingLinks)

//close menu from 'X' link
function closeMenu(event) {
    document.getElementById('toogle-menu').classList.add('closed');
}
//toogle menu
function showMenu(event) {
    document.getElementById('toogle-menu').classList.toggle('closed');
}

//toggle procedures and add seleced class to link 
function toogleProcedures(event) {
    let clickedLink = event.target;
    if (clickedLink.tagName == 'A' && clickedLink.classList.contains('heading')) {
        //clear .selected class of for not clicked heading links
        headingLinks.filter(x => x.id != clickedLink.id).forEach(x => x.classList.remove('selected'));
        //toogle .selected to the clicked heading link
        clickedLink.classList.toggle('selected');
        //closed all open links - add .none
        links.filter(x => !x.classList.contains(clickedLink.id)).forEach(x => x.parentElement.classList.add('none'));
        //when click on heading link, toogle(.none) his sublinks
        links.filter(x => x.classList.contains(clickedLink.id)).forEach(x => x.parentElement.classList.toggle('none'))
    }
}