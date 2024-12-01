window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.background = "rgba(51, 51, 51, 0.8)";
    }
});

// Typing Effect
const dynamicText = document.querySelector('.dynamic-text');
const phrases = ["Welcome", "Explore Creativity", "Discover Innovation"];
let phraseIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < phrases[phraseIndex].length) {
        dynamicText.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(deleteEffect, 2000);
    }
}

function deleteEffect() {
    if (charIndex > 0) {
        dynamicText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 100);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// About Tabs
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Portfolio Modal
function openModal(projectTitle) {
    alert(`Viewing details of: ${projectTitle}`);
}

// Clock in Footer
setInterval(() => {
    const clock = document.getElementById('clock');
    clock.textContent = new Date().toLocaleTimeString();
}, 1000);
