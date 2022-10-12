const subMenuLists = [...document.getElementById('sub-navigation').querySelectorAll('.sub-sub-navigation-list')];
const [hamburgerIcon, XmarkIcon] = [...document.getElementById('show-menu-mob').querySelectorAll('i')];
$('#sub-navigation').on('click', showSubSubMenus);
$('#show-menu-mob').on('click', showSubMenu)


function showSubSubMenus(e) {
    let currList;

    if (e.target.tagName == 'A' && e.target.classList.contains('main-sub-link')) {
        currList = e.target.nextElementSibling;
    } else if (e.target.classList.contains('icon')) {
        currList = e.target.parentElement.parentElement.querySelector('ul.sub-sub-navigation-list')
    } else if (e.target.classList.contains('sub-navigation-item')) {
        currList = e.target.querySelector('ul');
    }

    if (currList) {
        subMenuLists.filter(x => x !== currList).forEach(x => $(x).slideUp());
        $(currList).slideToggle(400);
    }
}

function showSubMenu(e) {
    subMenuLists.forEach(x => x.style.display = 'none');
    hamburgerIcon.classList.toggle('hide-it');
    XmarkIcon.classList.toggle('hide-it');
    $('#sub-navigation').slideToggle('slow');
}
