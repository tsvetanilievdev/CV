$('#sub-navigation').on('click', showSubMenus);


function showSubMenus(e) {
    if (e.target.tagName == 'A' && e.target.classList.contains('main-sub-link')) {
        $(e.target.nextElementSibling).slideToggle(400)
    }
}