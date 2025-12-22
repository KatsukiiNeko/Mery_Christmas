/**
 * Renderer setup and configuration.
 */

import { WebGLRenderer } from 'three';

export function setupRenderer(config) {
    const renderer = new WebGLRenderer({
        antialias: config.ANTIALIAS,
        alpha: config.ALPHA
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = config.SHADOWS;
    renderer.shadowMap.type = config.SHADOW_TYPE;
    
    return renderer;
}