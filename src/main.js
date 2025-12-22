/**
 * Main entry point for the 3D Christmas Tree Gallery application.
 * Initializes all modules and coordinates the application flow.
 */

import { setupScene } from './core/scene.js';
import { setupCamera } from './core/camera.js';
import { setupRenderer } from './core/renderer.js';
import { setupLights } from './core/lights.js';
import { createTree } from './objects/tree.js';
import { setupControls } from './controls/orbitControls.js';
import { setupRaycaster } from './interaction/raycaster.js';
import { setupCameraAnimator } from './interaction/cameraAnimator.js';
import { loadImages } from './data/imageLoader.js';
import { setupModal } from './ui/modal.js';
import { hideLoader, showLoader } from './ui/loader.js';
import { SCENE_CONFIG, RENDERER_CONFIG } from './config/constants.js';

// Global application state
let scene, camera, renderer, controls, raycaster, cameraAnimator;

async function init() {
    // Set a timeout to hide loader if something goes wrong
    const loadingTimeout = setTimeout(() => {
        console.warn('Loading timeout - forcing loader to hide');
        hideLoader();
    }, 10000); // 10 seconds timeout
    
    try {
        // 1. Setup core Three.js components
        scene = setupScene();
        camera = setupCamera();
        renderer = setupRenderer(RENDERER_CONFIG);
        
        // 2. Append renderer to DOM
        const container = document.getElementById('scene-container');
        container.appendChild(renderer.domElement);
        
        // 3. Setup lights
        setupLights(scene);
        
        // 4. Create and add the Christmas tree
        const tree = createTree();
        scene.add(tree);
        
        // 5. Setup controls
        controls = setupControls(camera, renderer.domElement);
        
        // 6. Setup interaction systems
        raycaster = setupRaycaster(camera);
        cameraAnimator = setupCameraAnimator(camera, controls);
        
        // 7. Setup UI
        const modal = setupModal();
        
        // 8. Load images from JSON and add them to the scene
        console.log('Loading images...');
        const imagePlanes = await loadImages(scene);
        
        // 9. Setup click handler for image interaction
        setupImageInteraction(imagePlanes, raycaster, cameraAnimator, modal);
        
        // 10. Start animation loop
        animate();
        
        // 11. Hide loading screen
        clearTimeout(loadingTimeout);
        hideLoader();
        
        console.log('Application initialized successfully');
        
    } catch (error) {
        clearTimeout(loadingTimeout);
        console.error('Failed to initialize application:', error);
        
        // Show error message to user
        const loader = document.getElementById('loader');
        if (loader) {
            loader.innerHTML = `
                <div style="text-align: center; color: #ff6b6b;">
                    <h2>Error Loading Application</h2>
                    <p>${error.message}</p>
                    <p>Please check the console for details and refresh the page.</p>
                    <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Refresh Page
                    </button>
                </div>
            `;
        }
    }
}

function setupImageInteraction(imagePlanes, raycaster, cameraAnimator, modal) {
    const handleClick = (event) => {
        // Get mouse position in normalized device coordinates
        const rect = renderer.domElement.getBoundingClientRect();
        const mouse = {
            x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
            y: -((event.clientY - rect.top) / rect.height) * 2 + 1
        };
        
        // Check for intersections
        const intersects = raycaster.getIntersections(imagePlanes, mouse);
        
        if (intersects.length > 0) {
            const clickedPlane = intersects[0].object;
            const imageData = clickedPlane.userData.imageData;
            
            // Animate camera to focus on the image
            cameraAnimator.focusOnObject(clickedPlane);
            
            // Show modal with image details
            modal.open(imageData);
        }
    };
    
    // Add click event listener
    renderer.domElement.addEventListener('click', handleClick);
}

function animate() {
    requestAnimationFrame(animate);
    
    // Update controls
    if (controls) controls.update();
    
    // Update camera animations
    if (cameraAnimator) cameraAnimator.update();
    
    // Render the scene
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

// Handle window resize
function onWindowResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

window.addEventListener('resize', onWindowResize);

// Initialize the application
init();