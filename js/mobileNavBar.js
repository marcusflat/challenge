const menuIcon = document.getElementById('menu-responsivo');
const menus = document.getElementById('menus');
const dropDown = document.querySelector('.drop-down');

menuIcon.addEventListener('click', () => {
    dropDown.appendChild(menus);
    menus.style.display = 'block';
    dropDown.classList.toggle('visible');
})




