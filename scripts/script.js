const subMenuLists = [...document.getElementById('sub-navigation').querySelectorAll('.sub-sub-navigation-list')];
const [hamburgerIcon, XmarkIcon] = [...document.getElementById('show-menu-mob').querySelectorAll('i')];
console.log(hamburgerIcon, XmarkIcon)
$('#sub-navigation').on('click', showSubSubMenus);
$('#show-menu-mob').on('click', showSubMenu)


function showSubSubMenus(e) {

    if (e.target.tagName == 'A' && e.target.classList.contains('main-sub-link')) {
        let currList = e.target.nextElementSibling
        $(currList).slideToggle(400);
        subMenuLists.filter(x => x !== currList).forEach(x => $(x).slideUp());

    } else if (e.target.classList.contains('icon')) {
        let currList = e.target.parentElement.parentElement.querySelector('ul.sub-sub-navigation-list')
        $(currList).slideToggle(400);
    } else if (e.target.classList.contains('sub-navigation-item')) {
        let currList = e.target.querySelector('ul');
        $(currList).slideToggle(400);
    }
}

function showSubMenu(e) {
    subMenuLists.forEach(x => x.style.display = 'none');
    hamburgerIcon.classList.toggle('hide-it');
    XmarkIcon.classList.toggle('hide-it');
    $('#sub-navigation').slideToggle('slow');
}
