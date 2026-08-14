document.querySelectorAll('.medheader').forEach(function(header) {
    header.addEventListener('click', function() {
        const content = this.closest('.box').querySelector('.charcontent');

        if (!content) return;

        if (getComputedStyle(content).display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
