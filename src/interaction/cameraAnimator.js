/**
 * Camera animation for focusing on objects.
 */

import { CAMERA_ANIMATION_CONFIG } from '../config/constants.js';
import * as TWEEN from '@tweenjs/tween.js';

export function setupCameraAnimator(camera, controls) {
    
    function focusOnObject(object) {
        // Disable controls during animation
        controls.enabled = false;
        
        // Calculate target position
        const targetPosition = object.position.clone();
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        
        // Position camera in front of the object
        const focusPosition = targetPosition.clone();
        focusPosition.add(cameraDirection.multiplyScalar(-CAMERA_ANIMATION_CONFIG.FOCUS_DISTANCE));
        
        // Create tweens for smooth animation
        const positionTween = new TWEEN.Tween(camera.position)
            .to(focusPosition, CAMERA_ANIMATION_CONFIG.DURATION)
            .easing(TWEEN.Easing[CAMERA_ANIMATION_CONFIG.EASING])
            .onUpdate(() => {
                camera.lookAt(targetPosition);
            })
            .onComplete(() => {
                controls.enabled = true;
                controls.target.copy(targetPosition);
            })
            .start();
        
        // Also tween controls target
        const targetTween = new TWEEN.Tween(controls.target)
            .to(targetPosition, CAMERA_ANIMATION_CONFIG.DURATION)
            .easing(TWEEN.Easing[CAMERA_ANIMATION_CONFIG.EASING])
            .start();
    }
    
    function resetCamera() {
        controls.enabled = false;
        
        const initialPosition = new THREE.Vector3(0, 5, 15);
        const initialTarget = new THREE.Vector3(0, 0, 0);
        
        const positionTween = new TWEEN.Tween(camera.position)
            .to(initialPosition, CAMERA_ANIMATION_CONFIG.DURATION)
            .easing(TWEEN.Easing[CAMERA_ANIMATION_CONFIG.EASING])
            .onComplete(() => {
                controls.enabled = true;
                controls.target.copy(initialTarget);
            })
            .start();
        
        const targetTween = new TWEEN.Tween(controls.target)
            .to(initialTarget, CAMERA_ANIMATION_CONFIG.DURATION)
            .easing(TWEEN.Easing[CAMERA_ANIMATION_CONFIG.EASING])
            .start();
    }
    
    // Update TWEEN animations in the animation loop
    function update() {
        TWEEN.update();
    }
    
    return {
        focusOnObject,
        resetCamera,
        update
    };
}