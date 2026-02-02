// Product page image gallery functionality

function changeImage(imageUrl) {
    // Update main image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = imageUrl;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src.includes(imageUrl)) {
            thumb.classList.add('active');
        }
    });
}

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});
