/**
 * Loads images from JSON configuration and creates image planes.
 */

import { createImagePlane } from '../objects/imagePlane.js';

export async function loadImages(scene) {
    try {
        const response = await fetch('./assets/images.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Raw JSON response:', text.substring(0, 200) + '...');
        
        const images = JSON.parse(text);
        
        if (!Array.isArray(images)) {
            throw new Error('images.json should contain an array');
        }
        
        const imagePlanes = [];
        
        images.forEach(imageData => {
            try {
                // Validate required fields
                if (!imageData.id || !imageData.src || !imageData.position) {
                    console.warn('Invalid image data:', imageData);
                    return;
                }
                
                const imagePlane = createImagePlane(imageData);
                scene.add(imagePlane);
                imagePlanes.push(imagePlane);
                
                console.log(`Loaded image: ${imageData.id}`);
            } catch (error) {
                console.error(`Failed to create image plane for ${imageData.id}:`, error);
            }
        });
        
        console.log(`Successfully loaded ${imagePlanes.length} images`);
        return imagePlanes;
        
    } catch (error) {
        console.error('Failed to load images:', error);
        
        // Show user-friendly error
        const loader = document.getElementById('loader');
        if (loader) {
            loader.innerHTML = `
                <div style="text-align: center; color: #ff6b6b;">
                    <h2>Error Loading Images</h2>
                    <p>Failed to load image configuration.</p>
                    <p>Error: ${error.message}</p>
                    <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Refresh Page
                    </button>
                </div>
            `;
        }
        
        // Return empty array if loading fails
        return [];
    }
}