const show = document.querySelector('.show')
const hide = document.querySelector('.hide')
const navlink = document.querySelector('.navLink')
const box = document.querySelector('.rotate')

hide.style.display = 'none';
navlink.style.transform = 'scaleX(0)';

show.addEventListener('click', () => {
    navlink.style.transform = 'scaleX(1)';
    hide.style.display = 'block';
    show.style.display = 'none';
    box.style.transform = 'rotate(360deg)';
})

hide.addEventListener('click', () => {
    hide.style.display = 'none';
    navlink.style.transform = 'scaleX(0)';
    show.style.display = 'block';
    box.style.transform = 'rotate(0deg)';
})