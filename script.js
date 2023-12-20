const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });

    card.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});
