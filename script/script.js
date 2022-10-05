document.getElementById('close-menu').addEventListener('click', closeMenu);
document.getElementById('show-menu').addEventListener('click', showMenu);

function closeMenu(event) {
    document.getElementById('toogle-menu').classList.add('closed');
}
function showMenu(event) {
    document.getElementById('toogle-menu').classList.remove('closed');

}