document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const menu = document.getElementById("menu");

    menu.style.display = 'none';
    closeIcon.style.display = 'none';

    function setupMenu() {
        menuIcon.addEventListener("click", function() {
            menu.classList.add("active");
            menu.style.display = 'block';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';

            closeAllSubmenus();
        });

        closeIcon.addEventListener("click", function() {
            menu.classList.remove("active");
            menu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            closeAllSubmenus();
        });

        const menuItems = document.querySelectorAll('.subheader__topmenu > li');
        function closeAllSubmenus() {
            const allSubmenus = document.querySelectorAll('.subheader__submenu');
            allSubmenus.forEach(sub => {
                sub.classList.remove('active');
                sub.style.display = 'none';
            });
        }

        menuItems.forEach(item => {
            const submenuToggle = item.querySelector('.subheader__has-submenu');

            if (submenuToggle) {
                submenuToggle.addEventListener('click', function(event) {
                    event.preventDefault();
                    const submenu = item.querySelector('.subheader__submenu');

                    closeAllSubmenus();

                    const isActive = submenu.classList.contains('active');

                    if (!isActive) {
                        submenu.classList.add('active');
                        submenu.style.display = 'block';
                    }
                });
            }
        });

        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !menuIcon.contains(event.target) && !closeIcon.contains(event.target)) {
                closeAllSubmenus();
                menu.classList.remove('active');
                menu.style.display = 'none';
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }

        });
    }

    function checkScreenSize() {
        if (window.innerWidth <= 900) {
            setupMenu();
        } else {
            closeIcon.style.display = 'none';
            menu.style.display = 'block';
            menuIcon.style.display = 'none';
            closeAllSubmenus();
        }
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});
