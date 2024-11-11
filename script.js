
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger i');

    navLinks.classList.toggle('active');

    // Toggle the hamburger icon to a cross
    if (navLinks.classList.contains('active')) {
        hamburger.classList.replace('fa-bars', 'fa-times');
    } else {
        hamburger.classList.replace('fa-times', 'fa-bars');
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});

//    faq section 

document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});