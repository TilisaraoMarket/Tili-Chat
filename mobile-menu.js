document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const html = document.documentElement;
    let isMenuOpen = false;

    // Función para abrir el menú
    function openMenu() {
        if (sidebar) {
            sidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
            isMenuOpen = true;
        }
    }

    // Función para cerrar el menú
    function closeMenu() {
        if (sidebar) {
            sidebar.classList.remove('active');
            document.body.style.overflow = '';
            isMenuOpen = false;
        }
    }

    // Toggle sidebar on mobile menu button click
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Close sidebar on close button click
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            closeMenu();
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function (event) {
        if (isMenuOpen && !sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            closeMenu();
        }
    });

    // Close sidebar when a nav link is clicked (for single page navigation)
    const navLinks = document.querySelectorAll('.channel-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 768) {
                closeMenu();
            }
        });
    });

    // Handle window resize and orientation change
    let resizeTimer;
    function handleResize() {
        // Clear the timeout to prevent multiple executions
        clearTimeout(resizeTimer);

        // Set a new timeout to run the function after resizing is complete
        resizeTimer = setTimeout(function () {
            // If screen width is tablet/desktop size or orientation changed
            if (window.innerWidth >= 768 || Math.abs(window.orientation) === 90) {
                closeMenu();
            }
        }, 250);
    }

    // Add event listeners for both resize and orientationchange
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Initial check
    handleResize();

    // Prevent body scroll when menu is open on mobile
    document.addEventListener('touchmove', function (e) {
        if (isMenuOpen) {
            e.preventDefault();
        }
    }, { passive: false });
});
