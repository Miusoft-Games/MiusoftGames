// Prevent text selection
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// Prevent right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});