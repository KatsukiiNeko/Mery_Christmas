/**
 * Image plane creation and management.
 */

import * as THREE from 'three';
import { IMAGE_PLANE_CONFIG } from '../config/constants.js';

export function createImagePlane(imageData) {
    const group = new THREE.Group();
    
    // Create main image plane
    const geometry = new THREE.PlaneGeometry(
        IMAGE_PLANE_CONFIG.WIDTH,
        IMAGE_PLANE_CONFIG.HEIGHT
    );
    
    // Create border
    const borderGeometry = new THREE.PlaneGeometry(
        IMAGE_PLANE_CONFIG.WIDTH + IMAGE_PLANE_CONFIG.BORDER_WIDTH,
        IMAGE_PLANE_CONFIG.HEIGHT + IMAGE_PLANE_CONFIG.BORDER_WIDTH
    );
    
    const borderMaterial = new THREE.MeshStandardMaterial({
        color: IMAGE_PLANE_CONFIG.BORDER_COLOR,
        emissive: IMAGE_PLANE_CONFIG.BORDER_COLOR,
        emissiveIntensity: 0.2,
        side: THREE.DoubleSide
    });
    
    const border = new THREE.Mesh(borderGeometry, borderMaterial);
    border.position.z = -0.01; // Slightly behind the image
    group.add(border);
    
    // Load image texture
    const textureLoader = new THREE.TextureLoader();
    
    // Set up error handling for image loading
    textureLoader.load(
        imageData.src,
        (texture) => {
            const material = new THREE.MeshStandardMaterial({
                map: texture,
                side: THREE.DoubleSide,
                roughness: 0.3,
                metalness: 0.1
            });
            
            const plane = new THREE.Mesh(geometry, material);
            group.add(plane);
            group.userData.plane = plane;
        },
        undefined,
        (error) => {
            console.error(`Failed to load image: ${imageData.src}`, error);
            // Create a placeholder material
            const placeholderMaterial = new THREE.MeshStandardMaterial({
                color: 0x666666,
                side: THREE.DoubleSide,
                roughness: 0.8,
                metalness: 0.1
            });
            
            const plane = new THREE.Mesh(geometry, placeholderMaterial);
            group.add(plane);
            group.userData.plane = plane;
        }
    );
    
    // Store image data for later use
    group.userData.imageData = imageData;
    
    // Position the group
    group.position.set(
        imageData.position.x,
        imageData.position.y,
        imageData.position.z
    );
    
    // Scale if specified
    if (imageData.scale) {
        group.scale.setScalar(imageData.scale);
    }
    
    // Make it interactive
    group.castShadow = true;
    group.receiveShadow = true;
    
    return group;
}