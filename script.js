document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('header nav ul');
    
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
}
