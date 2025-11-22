// App.js for Tili Chat

document.addEventListener('DOMContentLoaded', () => {
    console.log('Tili Chat iniciado.');

    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('closeSidebarBtn');
    const overlay = document.getElementById('overlay');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleSidebar);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', toggleSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }

    // Close sidebar on link click (mobile)
    const links = document.querySelectorAll('.channel-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }

            // Active state logic (visual only)
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

// Toggle Tutorial Section
function toggleTutorial() {
    const content = document.getElementById('tutorialContent');
    const toggle = document.getElementById('tutorialToggle');
    
    content.classList.toggle('expanded');
    toggle.classList.toggle('rotated');
}
