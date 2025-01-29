import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function PCBViewer({objPath, mtlPath, pos_x, pos_y, pos_z}) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!objPath || !mtlPath) {
            console.error('Missing objPath or mtlPath');
            return;
        }

        console.log('OBJ Path:', objPath);
        console.log('MTL Path:', mtlPath);

        const container = containerRef.current;
        if (!container) {
            console.error('Container not found');
            return;
        }

        const width = container.clientWidth;
        const height = container.clientHeight;

        // Create Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xF3F4F6); // tailwind gray-100

        // Create Orthographic Camera
        const scale = 4;
        const aspect = width / height;
        const camera = new THREE.OrthographicCamera(
            -scale * aspect,
            scale * aspect,
            scale,
            -scale,
            0.1,
            100
        );

        // Create Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio
        renderer.shadowMap.enabled = false; // Enable shadows
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows
        container.appendChild(renderer.domElement);

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(0, 10, 7.5);
        directionalLight.castShadow = false;
        directionalLight.shadow.mapSize.width = 512;
        directionalLight.shadow.mapSize.height = 512;
        scene.add(directionalLight);

        // Load Materials and OBJ
        const mtlLoader = new MTLLoader();
        mtlLoader.load(
            mtlPath,
            (materials) => {
                materials.preload();
                const objLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load(
                    objPath,
                    (object) => {
                        object.traverse((child) => {
                            if (child.isMesh) {
                                child.material.side = THREE.DoubleSide;
                                child.castShadow = true;
                                child.receiveShadow = true;
                            }
                        });
                        // object.scale.set(0.9, 0.9, 0.9);
                        // object.scale.set(1,1,1);
                        object.scale.set(1.1,1.1,1.1);
                        object.position.set(0, 0, 0);
                        scene.add(object);
                        renderer.render(scene, camera); // Initial render
                    },
                    undefined, // Progress
                    (error) => console.error('Error loading OBJ:', error)
                );
            },
            undefined, // Progress
            (error) => console.error('Error loading MTL:', error)
        );

        // Add Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth rotation
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.target.set(0, 0, 0);
        camera.position.set(pos_x, pos_y, pos_z);
        controls.update();

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            container.removeChild(renderer.domElement);
        };
    }, [objPath, mtlPath]);

    return <div ref={containerRef} className="w-full h-full"></div>;
}

export default PCBViewer;
