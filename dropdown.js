const productMenuItem = document.querySelector('.main-menu li:nth-child(2)');
const dropdownMenu = document.querySelector('.vertical-hidden-menu');

productMenuItem.addEventListener('mouseenter', () => {
    const scrollHeight = dropdownMenu.scrollHeight;
    dropdownMenu.style.maxHeight = `${scrollHeight}px`;
    dropdownMenu.style.opacity = '1';
});

productMenuItem.addEventListener('mouseleave', () => {
    dropdownMenu.style.maxHeight = '0';
    dropdownMenu.style.opacity = '0';
});