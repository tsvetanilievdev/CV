const toggleMenuButton = document.getElementById('toggle_menu');
const menu = document.querySelector('.menu_mobile');

toggleMenuButton.addEventListener('click', () => {
    const menuHeight = menu.scrollHeight;
    if (menu.classList.contains('show')) {
        menu.style.maxHeight = `${menuHeight}px`;
        menu.style.maxHeight = '0';
        menu.classList.remove('show');

    } else {
        menu.style.maxHeight = '0';
        menu.classList.add('show');
        menu.style.maxHeight = `${menuHeight}px`;
    }
});