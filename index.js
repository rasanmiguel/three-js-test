import * as THREE from 'three';

// Create threejs Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(76, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create threejs Renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// then add it to the HTML 
document.body.appendChild(renderer.domElement);

// Test Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'blue' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube)

camera.position.z = 5;


// Loads/Renders the object into the site
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Call the animate function
renderer.setAnimationLoop(animate);