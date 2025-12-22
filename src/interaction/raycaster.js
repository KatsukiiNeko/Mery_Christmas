/**
 * Raycaster setup for mouse interaction.
 */

import { Raycaster } from 'three';

export function setupRaycaster(camera) {
    const raycaster = new Raycaster();
    
    return {
        getIntersections: function(objects, mouse) {
            raycaster.setFromCamera(mouse, camera);
            return raycaster.intersectObjects(objects);
        }
    };
}