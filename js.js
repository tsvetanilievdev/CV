if (e.target.tagName == 'LI' && e.target.classList.contains('sub-navigation-item')) {
    $(e.target.querySelector('ul.sub-sub-navigation-list')).slideToggle(400)
}