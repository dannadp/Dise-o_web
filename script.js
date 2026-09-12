document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const unitSections = document.querySelectorAll('.unit-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetUnitId = button.getAttribute('data-unit');

            navButtons.forEach(btn => btn.classList.remove('active'));
            unitSections.forEach(section => section.classList.remove('active'));

            button.classList.add('active');
            
            const targetSection = document.getElementById(targetUnitId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise();
            }
        });
    });

    const headerNavLinks = document.querySelectorAll('.nav-links a, .hero-actions a');
    headerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});