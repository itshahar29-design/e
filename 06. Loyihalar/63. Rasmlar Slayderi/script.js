
    const slides = [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
        'https://images.unsplash.com/photo-1511497584788-87676104235f?w=600',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600'
    ];
    let sIdx = 0;
    function showSlide() { document.getElementById('sl-img').src = slides[sIdx]; }
    window.nextSlide = () => { sIdx = (sIdx + 1) % slides.length; showSlide(); };
    window.prevSlide = () => { sIdx = (sIdx - 1 + slides.length) % slides.length; showSlide(); };
  