const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', (e) => {

    
    menuToggle.classList.contains('active') ? menuToggle.classList.remove('active') : menuToggle.classList.add('active');
    showcase.classList.contains('active') ? showcase.classList.remove('active') : showcase.classList.add('active');
})