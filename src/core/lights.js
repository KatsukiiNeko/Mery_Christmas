/**
 * Lighting setup for the scene.
 */

import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

export function setupLights(scene) {
    // Ambient light for overall illumination
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Hemisphere light for natural outdoor lighting
    const hemisphereLight = new HemisphereLight(0x87CEEB, 0x2e7d32, 0.8);
    scene.add(hemisphereLight);
    
    // Directional light for shadows and highlights
    const directionalLight = new DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Secondary directional light for fill
    const fillLight = new DirectionalLight(0xffeedd, 0.3);
    fillLight.position.set(-10, 10, -5);
    scene.add(fillLight);
}