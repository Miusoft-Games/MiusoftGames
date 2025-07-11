function toggleResponsiveCursor() {
    const responsiveCursors = document.querySelectorAll('.responsiveCursor');
    const isMobile = window.innerWidth <= 768;

    responsiveCursors.forEach(cursor => {
        cursor.style.display = isMobile ? 'none' : 'block';
    });
}

// Run on initial load
toggleResponsiveCursor();

// Run on window resize
window.addEventListener('resize', toggleResponsiveCursor);
