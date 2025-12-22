/**
 * Christmas tree creation and configuration.
 */

import { ConeGeometry, MeshStandardMaterial, Mesh, Group } from 'three';
import { TREE_CONFIG } from '../config/constants.js';

export function createTree() {
    const treeGroup = new Group();
    
    // Create tree trunk
    const trunkGeometry = new ConeGeometry(0.5, 2, 6);
    const trunkMaterial = new MeshStandardMaterial({
        color: 0x8B4513,
        roughness: 0.9
    });
    const trunk = new Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = -TREE_CONFIG.HEIGHT / 2 - 1;
    treeGroup.add(trunk);
    
    // Create tree foliage (cones stacked)
    const coneCount = 5;
    for (let i = 0; i < coneCount; i++) {
        const height = TREE_CONFIG.HEIGHT * (0.8 - i * 0.15);
        const radius = TREE_CONFIG.RADIUS * (0.9 - i * 0.15);
        
        const coneGeometry = new ConeGeometry(
            radius,
            height,
            TREE_CONFIG.SEGMENTS
        );
        
        const coneMaterial = new MeshStandardMaterial({
            color: TREE_CONFIG.COLOR,
            roughness: 0.8,
            metalness: 0.1
        });
        
        const cone = new Mesh(coneGeometry, coneMaterial);
        cone.position.y = (i * height * 0.6) - (TREE_CONFIG.HEIGHT / 3);
        cone.castShadow = true;
        cone.receiveShadow = true;
        
        treeGroup.add(cone);
    }
    
    // Add a star on top
    const starGeometry = new ConeGeometry(0.3, 1, 5);
    const starMaterial = new MeshStandardMaterial({
        color: 0xFFD700,
        emissive: 0xFFD700,
        emissiveIntensity: 0.5
    });
    const star = new Mesh(starGeometry, starMaterial);
    star.position.y = TREE_CONFIG.HEIGHT / 2 + 0.5;
    star.rotation.x = Math.PI;
    treeGroup.add(star);
    
    treeGroup.castShadow = true;
    treeGroup.receiveShadow = true;
    
    return treeGroup;
}