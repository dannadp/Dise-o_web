document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const unitSections = document.querySelectorAll('.unit-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetUnit = button.getAttribute('data-unit');

            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            unitSections.forEach(section => {
                if (section.id === targetUnit) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise();
            }

            if (window.innerWidth <= 900) {
                document.querySelector('.content-area').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const topNavItems = document.querySelectorAll('.navbar .nav-item');
    topNavItems.forEach(item => {
        item.addEventListener('click', () => {
            topNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
