/**
 * Loading screen management.
 */

export function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }
}

export function showLoader(message = 'Loading...') {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.querySelector('p').textContent = message;
        loader.classList.remove('hidden');
    }
}