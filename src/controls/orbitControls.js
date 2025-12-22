/**
 * OrbitControls setup and configuration.
 */

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CONTROLS_CONFIG } from '../config/constants.js';

export function setupControls(camera, domElement) {
    const controls = new OrbitControls(camera, domElement);
    
    controls.enableDamping = CONTROLS_CONFIG.ENABLE_DAMPING;
    controls.dampingFactor = CONTROLS_CONFIG.DAMPING_FACTOR;
    controls.minDistance = CONTROLS_CONFIG.MIN_DISTANCE;
    controls.maxDistance = CONTROLS_CONFIG.MAX_DISTANCE;
    controls.maxPolarAngle = CONTROLS_CONFIG.MAX_POLAR_ANGLE;
    
    // Disable panning for this application
    controls.enablePan = false;
    
    return controls;
}