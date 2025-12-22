/**
 * Modal UI for displaying image details.
 */

export function setupModal() {
    // Create modal element
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '×';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    modal.appendChild(closeButton);
    modal.appendChild(modalContent);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    // Close modal functions
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Open modal with image data
    function open(imageData) {
        modalContent.innerHTML = '';
        
        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'modal-image-container';
        
        const img = document.createElement('img');
        img.className = 'modal-image';
        img.src = imageData.src;
        img.alt = imageData.title || 'Image';
        
        imageContainer.appendChild(img);
        
        // Create text content
        const textContainer = document.createElement('div');
        textContainer.className = 'modal-text';
        
        if (imageData.title) {
            const title = document.createElement('h2');
            title.className = 'modal-title';
            title.textContent = imageData.title;
            textContainer.appendChild(title);
        }
        
        if (imageData.description) {
            const description = document.createElement('p');
            description.className = 'modal-description';
            description.textContent = imageData.description;
            textContainer.appendChild(description);
        }
        
        // Append to modal
        modalContent.appendChild(imageContainer);
        modalContent.appendChild(textContainer);
        
        // Show modal
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    return {
        open,
        close: closeModal
    };
}