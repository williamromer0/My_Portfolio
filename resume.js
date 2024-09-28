
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#about-nav a');

    function setActiveNav() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 210; // Adjust this value based on your layout
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active-nav');
            }
        });
    }
    window.addEventListener('scroll', setActiveNav);
    setActiveNav(); // Call it once initially to set the active class on page load
});