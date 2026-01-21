document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');

            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        // При нажатии на ссылку мобильное меню закрывается
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }



    // Смена темы
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');

    // Проверка сохраненной темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        updateThemeIcons(true);
    }

    function toggleTheme() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateThemeIcons(false);
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcons(true);
        }
    }

    function updateThemeIcons(isDark) {
        const icon = isDark ? '☀️' : '🌙';
        const mobileText = isDark ? 'Светлая тема ☀️' : 'Темная тема 🌙';

        if (themeToggle) themeToggle.textContent = icon;
        if (mobileThemeToggle) mobileThemeToggle.textContent = mobileText;

        // Логотип
        const logoImg = document.querySelector('.logo img');
        if (logoImg) {
            if (isDark) {
                logoImg.src = 'img/logodark.svg';
            } else {
                logoImg.src = 'img/logolight.svg';
            }
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
});
