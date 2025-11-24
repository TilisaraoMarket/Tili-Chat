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
        if (overlay) {
            overlay.classList.toggle('active');
        }
    }

    // Event Listeners
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
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
            // Active state logic (solo visual)
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

// Toggle Image Tutorial Section
function toggleImageTutorial() {
    const content = document.getElementById('imageTutorialContent');
    const toggle = document.getElementById('imageTutorialToggle');
    if (!content || !toggle) return;

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        toggle.classList.remove('fa-chevron-down');
        toggle.classList.add('fa-chevron-up');
    } else {
        content.style.display = 'none';
        toggle.classList.remove('fa-chevron-up');
        toggle.classList.add('fa-chevron-down');
    }
}

// Toggle Tutorial Section (GitHub)
function toggleTutorial() {
    const content = document.getElementById('tutorialContent');
    const toggle = document.getElementById('tutorialToggle');
    if (!content || !toggle) return;

    content.classList.toggle('expanded');
    toggle.classList.toggle('rotated');
}

// Toggle Tutorial Section (Imágenes)
function toggleImageTutorial() {
    const content = document.getElementById('imageTutorialContent');
    const toggle = document.getElementById('imageTutorialToggle');
    if (!content || !toggle) return;

    content.classList.toggle('expanded');
    toggle.classList.toggle('rotated');
}

// Mediafire link used by buttons
const MEDIAFIRE_URL = 'https://www.mediafire.com/file/s6il7reek6opcoy/Tili_Chat.apk/file';

// Global modal element
let modal = null;

// Initialize modal
function initModal() {
    modal = document.getElementById('imageModal');
    if (!modal) return;
    
    // Close modal when clicking the close button or outside the image
    document.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            closeModal();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Open modal with image
function openModal(imageSrc) {
    if (!modal) return;
    const modalImg = document.getElementById('modalImage');
    if (modalImg) {
        modalImg.src = imageSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Close modal
function closeModal(event) {
    if (event) {
        event.stopPropagation();
    }
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}

// Copy link to clipboard
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

// Show feedback message
function showCopyFeedback(message) {
    const el = document.getElementById('copyFeedback');
    if (!el) return;
    el.textContent = message;
    el.classList.add('visible');
    setTimeout(() => {
        el.classList.remove('visible');
    }, 3000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initModal();
});
