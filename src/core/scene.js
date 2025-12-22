/**
 * Scene setup and configuration.
 */

import { Scene, Fog, Color } from 'three';
import { SCENE_CONFIG } from '../config/constants.js';

export function setupScene() {
    const scene = new Scene();
    
    // Set background color
    scene.background = new Color(SCENE_CONFIG.BACKGROUND_COLOR);
    
    // Add fog for depth effect
    scene.fog = new Fog(
        SCENE_CONFIG.FOG_COLOR,
        SCENE_CONFIG.FOG_NEAR,
        SCENE_CONFIG.FOG_FAR
    );
    
    return scene;
}