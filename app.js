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

// Mediafire link used by buttons
const MEDIAFIRE_URL = 'https://www.mediafire.com/file/s6il7reek6opcoy/Tili_Chat.apk/file';

function copyLink() {
    const feedbackEl = document.getElementById('copyFeedback');
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(MEDIAFIRE_URL).then(() => {
            showCopyFeedback('Enlace copiado al portapapeles');
        }).catch(() => {
            showCopyFeedback('No se pudo copiar');
        });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = MEDIAFIRE_URL;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showCopyFeedback('Enlace copiado al portapapeles');
        } catch (e) {
            showCopyFeedback('No se pudo copiar');
        }
        document.body.removeChild(textarea);
    }
}

function showCopyFeedback(message) {
    const el = document.getElementById('copyFeedback');
    if (!el) return;
    el.textContent = message;
    el.classList.add('visible');
    setTimeout(() => {
        el.classList.remove('visible');
        el.textContent = '';
    }, 2500);
}
