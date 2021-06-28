const NavBtn = document.querySelector('.nav_btn');
const father = document.querySelector('.nav_father');
NavBtn.addEventListener('click', (e) => {
    father.classList.toggle('show_links')
    if (NavBtn.innerText === 'MENU') {
        NavBtn.innerText = '||||';
    } else {
        NavBtn.innerText = 'MENU';
    }

})