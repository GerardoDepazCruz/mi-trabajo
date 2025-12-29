// ========================================
// GALERÍA DE IMÁGENES
// ========================================
function viewImage(src) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    modalImage.src = src;
    modal.classList.add('active');
    
    // Cerrar con ESC
    document.addEventListener('keydown', closeOnEscape);
}

function toExchangeImage(thumb) {
    const mainImage = document.getElementById('imgmain');
    const imgSrc = thumb.querySelector('img').src;
    
    mainImage.src = imgSrc;
    
    // Efecto hover en thumbnails
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('active');
    
    // Remover listener ESC
    document.removeEventListener('keydown', closeOnEscape);
}

function closeOnEscape(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Cerrar modal clicando fuera
    document.getElementById('image-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Smooth scroll para thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            this.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest',
                inline: 'center'
            });
        });
    });
    
    // Animación entrada
    document.body.classList.add('loaded');
});

// ========================================
// EFECTOS VISUALES
// ========================================
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    thumb.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
