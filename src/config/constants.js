/**
 * Application constants and configuration values.
 */

// Scene configuration
export const SCENE_CONFIG = {
    BACKGROUND_COLOR: 0x0a1929,
    FOG_COLOR: 0x0a1929,
    FOG_NEAR: 10,
    FOG_FAR: 50
};

// Renderer configuration
export const RENDERER_CONFIG = {
    ANTIALIAS: true,
    ALPHA: false,
    SHADOWS: true,
    SHADOW_TYPE: 'PCFSoftShadowMap'
};

// Camera configuration
export const CAMERA_CONFIG = {
    FOV: 60,
    NEAR: 0.1,
    FAR: 1000,
    INITIAL_POSITION: { x: 0, y: 5, z: 15 },
    LOOK_AT: { x: 0, y: 0, z: 0 }
};

// Tree configuration
export const TREE_CONFIG = {
    HEIGHT: 10,
    RADIUS: 3,
    SEGMENTS: 8,
    COLOR: 0x2e7d32,
    WIREFRAME: false
};

// Image plane configuration
export const IMAGE_PLANE_CONFIG = {
    WIDTH: 1.5,
    HEIGHT: 1.5,
    BORDER_COLOR: 0x4CAF50,
    BORDER_WIDTH: 0.05,
    HOVER_COLOR: 0x8BC34A
};

// Camera animation configuration
export const CAMERA_ANIMATION_CONFIG = {
    DURATION: 1500,
    EASING: 'easeInOutCubic',
    FOCUS_DISTANCE: 3
};

// Controls configuration
export const CONTROLS_CONFIG = {
    ENABLE_DAMPING: true,
    DAMPING_FACTOR: 0.05,
    MIN_DISTANCE: 5,
    MAX_DISTANCE: 50,
    MAX_POLAR_ANGLE: Math.PI / 2 - 0.1
};