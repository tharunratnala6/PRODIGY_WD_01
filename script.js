// JavaScript to handle scrolling effect on the navigation bar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// JavaScript to handle hover effect on menu items
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'color 0.3s'; // Smooth hover transition
        link.style.color = '#ff9800';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});
