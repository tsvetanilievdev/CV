const subMenuLists = [...document.getElementById('sub-navigation').querySelectorAll('.sub-sub-navigation-list')];
const [hamburgerIcon, XmarkIcon] = [...document.getElementById('show-menu-mob').querySelectorAll('i')];
console.log(hamburgerIcon, XmarkIcon)
$('#sub-navigation').on('click', showSubSubMenus);
$('#show-menu-mob').on('click', showSubMenu)


function showSubSubMenus(e) {

    if (e.target.tagName == 'A' && e.target.classList.contains('main-sub-link')) {
        $(e.target.nextElementSibling).slideToggle(400);

    } else if (e.target.classList.contains('icon')) {
        let parent = e.target.parentElement.parentElement;
        $(parent.querySelector('ul.sub-sub-navigation-list')).slideToggle(400);
    }
}

function showSubMenu(e) {
    subMenuLists.forEach(x => x.style.display = 'none');
    hamburgerIcon.classList.toggle('hide-it');
    XmarkIcon.classList.toggle('hide-it');
    $('#sub-navigation').slideToggle('slow');
}
