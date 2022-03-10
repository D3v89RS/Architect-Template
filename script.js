// Aula 6 - 14:00
const menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

menu.addEventListener("click", () => {
    container.classList.toggle('change');
});

const scroll = document.querySelector('.scroll-btn');
scroll.addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = 'unset';
    }, 2000);
}); 