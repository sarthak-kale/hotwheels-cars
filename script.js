// Fade-in animation delay for cards
document.querySelectorAll('.car-card').forEach((card, index) => {
    setTimeout(() => {
        card.style.opacity = '1';
    }, index * 200); // delay each card
});

// Search filter function
const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll('.car-card').forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(searchTerm) ? 'block' : 'none';
    });
});
