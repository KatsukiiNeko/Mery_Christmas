/**
 * Camera setup and configuration.
 */

import { PerspectiveCamera } from 'three';
import { CAMERA_CONFIG } from '../config/constants.js';

export function setupCamera() {
    const camera = new PerspectiveCamera(
        CAMERA_CONFIG.FOV,
        window.innerWidth / window.innerHeight,
        CAMERA_CONFIG.NEAR,
        CAMERA_CONFIG.FAR
    );
    
    camera.position.set(
        CAMERA_CONFIG.INITIAL_POSITION.x,
        CAMERA_CONFIG.INITIAL_POSITION.y,
        CAMERA_CONFIG.INITIAL_POSITION.z
    );
    
    camera.lookAt(
        CAMERA_CONFIG.LOOK_AT.x,
        CAMERA_CONFIG.LOOK_AT.y,
        CAMERA_CONFIG.LOOK_AT.z
    );
    
    return camera;
}