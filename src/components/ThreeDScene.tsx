
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDSceneProps {
  className?: string;
}

const ThreeDScene = ({ className }: ThreeDSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<THREE.Mesh[]>([]);
  const frameIdRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create colorful 3D objects (inspired by Bengali patterns)
    const colors = [0xE63946, 0xF97316, 0xF8B400, 0x4F8A10, 0x8B5CF6, 0xD946EF];
    const objects: THREE.Mesh[] = [];

    // Add toroidal knots (representing alpana patterns)
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.TorusKnotGeometry(
        0.3 + Math.random() * 0.2,
        0.1 + Math.random() * 0.05,
        64,
        8
      );
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        shininess: 100,
      });
      const torusKnot = new THREE.Mesh(geometry, material);
      
      // Position randomly in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 1.5;
      
      torusKnot.position.x = radius * Math.sin(phi) * Math.cos(theta);
      torusKnot.position.y = radius * Math.sin(phi) * Math.sin(theta);
      torusKnot.position.z = radius * Math.cos(phi);
      
      scene.add(torusKnot);
      objects.push(torusKnot);
    }

    // Add dodecahedrons (representing stars/flowers in celebration)
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.DodecahedronGeometry(0.2 + Math.random() * 0.2);
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        shininess: 100,
      });
      const dodecahedron = new THREE.Mesh(geometry, material);
      
      // Position randomly in a larger sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 3 + Math.random() * 2;
      
      dodecahedron.position.x = radius * Math.sin(phi) * Math.cos(theta);
      dodecahedron.position.y = radius * Math.sin(phi) * Math.sin(theta);
      dodecahedron.position.z = radius * Math.cos(phi);
      
      scene.add(dodecahedron);
      objects.push(dodecahedron);
    }

    objectsRef.current = objects;

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized device coordinates
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      // Rotate camera slightly based on mouse position
      if (cameraRef.current) {
        cameraRef.current.position.x += (mousePosition.current.x * 2 - cameraRef.current.position.x) * 0.01;
        cameraRef.current.position.y += (mousePosition.current.y * 2 - cameraRef.current.position.y) * 0.01;
        cameraRef.current.lookAt(0, 0, 0);
      }

      // Animate each object
      objectsRef.current.forEach((object, index) => {
        // Different rotation speeds and directions
        const speedFactor = 0.2 + (index % 3) * 0.1;
        const directionX = index % 2 === 0 ? 1 : -1;
        const directionY = index % 3 === 0 ? 1 : -1;
        
        object.rotation.x += 0.005 * speedFactor * directionX;
        object.rotation.y += 0.007 * speedFactor * directionY;
        
        // Subtle position oscillation
        const time = Date.now() * 0.001;
        const oscillation = Math.sin(time + index) * 0.02;
        object.position.x += oscillation * (index % 2 ? 1 : -1);
        object.position.y += oscillation * (index % 3 ? 1 : -1);
      });

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    frameIdRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className={className} />;
};

export default ThreeDScene;
