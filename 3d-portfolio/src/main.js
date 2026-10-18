import * as THREE from 'three';

// --- DATA: FLAGSHIP ARCHITECTURES ---
const PROJECTS = [
  {
    name: 'Arachne',
    domain: 'AUTONOMOUS RESEARCH ENGINE',
    desc: 'Terminal-first autonomous web intelligence & deep research CLI engine featuring multi-source evidence extraction and agentic synthesis.',
    tags: ['Python', 'Agents', 'CLI', 'Web Scraping', 'Research'],
    url: 'https://github.com/DeepxkJadhav/Arachne',
    color: 0x00f2fe,
    position: new THREE.Vector3(4.2, 1.2, 0)
  },
  {
    name: 'Chrono',
    domain: 'LOCAL-FIRST LIVING STATE',
    desc: 'Continuous background living state recorder for code with one-click time travel, branch speculation, and local-first DAG execution.',
    tags: ['TypeScript', 'Local-First', 'DAG', 'Time-Travel', 'State Engine'],
    url: 'https://github.com/DeepxkJadhav/ChronoExtension',
    color: 0x8b5cf6,
    position: new THREE.Vector3(1.3, 3.8, 2.5)
  },
  {
    name: 'VoxTrace',
    domain: 'MULTIMODAL AUDIO PIPELINE',
    desc: 'End-to-end multimodal audio intelligence pipeline: OpenAI Whisper transcription, FAISS semantic vector retrieval, and FastAPI delivery.',
    tags: ['FastAPI', 'Whisper', 'FAISS', 'PyTorch', 'Vector Search'],
    url: 'https://github.com/DeepxkJadhav/VoxTrace',
    color: 0x10b981,
    position: new THREE.Vector3(-3.8, 1.8, 2.0)
  },
  {
    name: 'Model Studio',
    domain: 'GENERATIVE 3D & RIGGING',
    desc: 'AI 2D-to-3D asset generation workspace with automated skeletal rigging, morph targets, and interactive WebGL / Three.js canvas.',
    tags: ['React', 'Three.js', 'Vite', 'TypeScript', 'WebGL'],
    url: 'https://github.com/DeepxkJadhav/ModelStudio',
    color: 0xec4899,
    position: new THREE.Vector3(-2.8, -2.5, -2.2)
  },
  {
    name: 'SyncMesh',
    domain: 'DISTRIBUTED P2P MESH',
    desc: 'Privacy-first zero-cloud offline clipboard and high-speed local network file synchronization across desktop and mobile devices.',
    tags: ['C#', 'Android', 'P2P', 'Offline-First', 'Zero-Cloud'],
    url: 'https://github.com/DeepxkJadhav/SyncMesh',
    color: 0x38bdf8,
    position: new THREE.Vector3(2.5, -2.8, 2.8)
  }
];

// --- 1. SETUP CANVAS & THREE.JS SCENE ---
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x04060a, 0.045);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 11);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

// --- 2. LIGHTING RIG ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const cyanPoint = new THREE.PointLight(0x00f2fe, 3, 25);
cyanPoint.position.set(6, 6, 6);
scene.add(cyanPoint);

const violetPoint = new THREE.PointLight(0x8b5cf6, 3, 25);
violetPoint.position.set(-6, -6, 6);
scene.add(violetPoint);

const centerCoreLight = new THREE.PointLight(0x38bdf8, 4, 12);
centerCoreLight.position.set(0, 0, 0);
scene.add(centerCoreLight);

// --- 3. CENTRAL 3D CYBERNETIC HOLOGRAPHIC CORE ---
const coreGroup = new THREE.Group();
scene.add(coreGroup);

// Inner Pulsing Core Diamond
const innerCoreGeo = new THREE.OctahedronGeometry(1.2, 0);
const innerCoreMat = new THREE.MeshStandardMaterial({
  color: 0x00f2fe,
  emissive: 0x00b4d8,
  emissiveIntensity: 0.8,
  roughness: 0.2,
  metalness: 0.9,
  wireframe: false
});
const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
coreGroup.add(innerCore);

// Outer Wireframe 3D Icosahedron Cage
const outerWireGeo = new THREE.IcosahedronGeometry(2.2, 1);
const outerWireMat = new THREE.MeshBasicMaterial({
  color: 0x38bdf8,
  wireframe: true,
  transparent: true,
  opacity: 0.5
});
const outerCage = new THREE.Mesh(outerWireGeo, outerWireMat);
coreGroup.add(outerCage);

// Holographic Particle Node Cloud inside the Cage
const coreVertices = outerWireGeo.attributes.position.array;
const nodeGeo = new THREE.BufferGeometry();
nodeGeo.setAttribute('position', new THREE.BufferAttribute(coreVertices, 3));
const nodeMat = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.12,
  transparent: true,
  opacity: 0.9
});
const coreNodes = new THREE.Points(nodeGeo, nodeMat);
coreGroup.add(coreNodes);

// Concentric Orbital Rings
const ringGeo1 = new THREE.TorusGeometry(3.2, 0.025, 16, 100);
const ringMat1 = new THREE.MeshStandardMaterial({
  color: 0x00f2fe,
  emissive: 0x00f2fe,
  emissiveIntensity: 0.5,
  roughness: 0.3
});
const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
ring1.rotation.x = Math.PI / 3;
coreGroup.add(ring1);

const ringGeo2 = new THREE.TorusGeometry(3.6, 0.02, 16, 100);
const ringMat2 = new THREE.MeshStandardMaterial({
  color: 0x8b5cf6,
  emissive: 0x8b5cf6,
  emissiveIntensity: 0.5,
  roughness: 0.3
});
const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
ring2.rotation.x = -Math.PI / 4;
ring2.rotation.y = Math.PI / 6;
coreGroup.add(ring2);

// --- 4. 3,000 STARFIELD NEBULA PARTICLES ---
const particlesCount = 2800;
const posArray = new Float32Array(particlesCount * 3);
const colArray = new Float32Array(particlesCount * 3);

const colorCyan = new THREE.Color(0x00f2fe);
const colorViolet = new THREE.Color(0x8b5cf6);
const colorWhite = new THREE.Color(0xffffff);

for (let i = 0; i < particlesCount * 3; i += 3) {
  posArray[i] = (Math.random() - 0.5) * 45;
  posArray[i + 1] = (Math.random() - 0.5) * 45;
  posArray[i + 2] = (Math.random() - 0.5) * 45;

  const randColor = Math.random();
  const c = randColor < 0.45 ? colorCyan : randColor < 0.85 ? colorViolet : colorWhite;
  colArray[i] = c.r;
  colArray[i + 1] = c.g;
  colArray[i + 2] = c.b;
}

const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
starGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

const starMat = new THREE.PointsMaterial({
  size: 0.08,
  vertexColors: true,
  transparent: true,
  opacity: 0.75
});
const starField = new THREE.Points(starGeo, starMat);
scene.add(starField);

// --- 5. INTERACTIVE 3D PROJECT BEACONS ---
const beaconMeshes = [];
const beaconGroup = new THREE.Group();
scene.add(beaconGroup);

PROJECTS.forEach((proj, idx) => {
  const beaconHolder = new THREE.Group();
  beaconHolder.position.copy(proj.position);

  // Core Diamond
  const bGeo = new THREE.OctahedronGeometry(0.4, 0);
  const bMat = new THREE.MeshStandardMaterial({
    color: proj.color,
    emissive: proj.color,
    emissiveIntensity: 0.9,
    roughness: 0.2
  });
  const bMesh = new THREE.Mesh(bGeo, bMat);
  bMesh.userData = { projectIndex: idx, name: proj.name };
  beaconHolder.add(bMesh);

  // Outer Pulse Ring
  const pRingGeo = new THREE.RingGeometry(0.65, 0.72, 32);
  const pRingMat = new THREE.MeshBasicMaterial({
    color: proj.color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.6
  });
  const pRing = new THREE.Mesh(pRingGeo, pRingMat);
  beaconHolder.add(pRing);

  // Connecting laser line from center to beacon
  const lineMat = new THREE.LineBasicMaterial({ color: proj.color, transparent: true, opacity: 0.25 });
  const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), proj.position]);
  const laserLine = new THREE.Line(lineGeo, lineMat);
  scene.add(laserLine);

  beaconGroup.add(beaconHolder);
  beaconMeshes.push(bMesh);
});

// --- 6. RAYCASTING & INTERACTION ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-999, -999);
let hoveredMesh = null;
let activeProjectIndex = null;

// Target camera position for smooth dollying
const targetCamPos = new THREE.Vector3(0, 0, 11);
const defaultCamPos = new THREE.Vector3(0, 0, 11);

// Parallax tracking
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
  mouseY = (e.clientY - window.innerHeight / 2) * 0.001;

  document.getElementById('coords-metric').innerText = `[${mouse.x.toFixed(2)}, ${mouse.y.toFixed(2)}]`;
});

// Drag Rotation State
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousMousePosition = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

window.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    coreGroup.rotation.y += deltaX * 0.006;
    coreGroup.rotation.x += deltaY * 0.006;
    beaconGroup.rotation.y += deltaX * 0.006;
    beaconGroup.rotation.x += deltaY * 0.006;

    previousMousePosition = { x: e.clientX, y: e.clientY };
  }
});

// Beacon Click Event
window.addEventListener('click', () => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(beaconMeshes);

  if (intersects.length > 0) {
    const clickedBeacon = intersects[0].object;
    selectProject(clickedBeacon.userData.projectIndex);
    playBlipSound(600);
  }
});

// --- 7. HUD DRAWER LOGIC ---
const drawer = document.getElementById('project-drawer');
const drawerDomain = document.getElementById('drawer-domain');
const drawerTitle = document.getElementById('drawer-title');
const drawerDesc = document.getElementById('drawer-desc');
const drawerTags = document.getElementById('drawer-tags');
const drawerLink = document.getElementById('drawer-link');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const resetCamBtn = document.getElementById('reset-cam-btn');

function selectProject(index) {
  activeProjectIndex = index;
  const proj = PROJECTS[index];

  drawerDomain.innerText = `DOMAIN // ${proj.domain}`;
  drawerTitle.innerText = proj.name;
  drawerDesc.innerText = proj.desc;
  drawerTags.innerHTML = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');
  drawerLink.href = proj.url;
  drawer.classList.remove('hidden');

  // Highlight bottom buttons
  document.querySelectorAll('.nav-beacon').forEach((b, i) => {
    b.classList.toggle('active', i === index);
  });

  // Dolly Camera smoothly closer to the beacon
  const offset = proj.position.clone().normalize().multiplyScalar(3.2);
  targetCamPos.copy(proj.position).add(offset);
}

closeDrawerBtn.addEventListener('click', () => {
  drawer.classList.add('hidden');
  resetView();
});

resetCamBtn.addEventListener('click', () => {
  resetView();
});

function resetView() {
  activeProjectIndex = null;
  drawer.classList.add('hidden');
  targetCamPos.copy(defaultCamPos);
  document.querySelectorAll('.nav-beacon').forEach(b => b.classList.remove('active'));
}

document.querySelectorAll('.nav-beacon').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const idx = parseInt(e.target.dataset.index, 10);
    selectProject(idx);
    playBlipSound(520);
  });
});

// --- 8. PROCEDURAL AUDIO SYNTHESIZER ---
let audioCtx = null;
let isAudioOn = false;
let ambientOsc = null;

const soundBtn = document.getElementById('sound-btn');
soundBtn.addEventListener('click', () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  isAudioOn = !isAudioOn;
  soundBtn.innerHTML = isAudioOn ? '<span class="sound-icon">⚡</span> AUDIO: ON' : '<span class="sound-icon">⚡</span> AUDIO: OFF';
  soundBtn.classList.toggle('active', isAudioOn);

  if (isAudioOn) {
    startAmbientHum();
    playBlipSound(880);
  } else {
    stopAmbientHum();
  }
});

function startAmbientHum() {
  if (!audioCtx) return;
  ambientOsc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  ambientOsc.type = 'sine';
  ambientOsc.frequency.setValueAtTime(55, audioCtx.currentTime); // Low A hum
  gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
  ambientOsc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  ambientOsc.start();
}

function stopAmbientHum() {
  if (ambientOsc) {
    try { ambientOsc.stop(); ambientOsc.disconnect(); } catch (e) {}
    ambientOsc = null;
  }
}

function playBlipSound(freq = 440) {
  if (!isAudioOn || !audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.12);
  gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}

// --- 9. RESIZE HANDLER ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// --- 10. ANIMATION TICK RENDER LOOP ---
const clock = new THREE.Clock();
let fpsCounter = document.getElementById('fps-counter');
let lastFpsUpdate = 0;

function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();

  // Rotate Core Elements
  innerCore.rotation.y = elapsedTime * 0.6;
  innerCore.rotation.x = elapsedTime * 0.4;
  innerCore.scale.setScalar(1 + Math.sin(elapsedTime * 2.5) * 0.08);

  outerCage.rotation.y = -elapsedTime * 0.25;
  outerCage.rotation.z = elapsedTime * 0.15;

  ring1.rotation.z = elapsedTime * 0.35;
  ring2.rotation.z = -elapsedTime * 0.25;

  // Gentle float for starfield
  starField.rotation.y = elapsedTime * 0.015;

  // Orbit Beacons
  beaconGroup.children.forEach((bHolder, idx) => {
    // Subtle breathing pulse
    const pRing = bHolder.children[1];
    if (pRing) {
      pRing.lookAt(camera.position);
      pRing.scale.setScalar(1 + Math.sin(elapsedTime * 3 + idx) * 0.15);
    }
  });

  // Parallax Interpolation
  targetX += (mouseX - targetX) * 0.05;
  targetY += (mouseY - targetY) * 0.05;

  // Camera smooth interpolation to target
  camera.position.lerp(targetCamPos, 0.05);
  camera.lookAt(0, 0, 0);

  // Raycast hover check
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(beaconMeshes);

  if (intersects.length > 0) {
    if (hoveredMesh !== intersects[0].object) {
      if (hoveredMesh) hoveredMesh.scale.set(1, 1, 1);
      hoveredMesh = intersects[0].object;
      hoveredMesh.scale.set(1.4, 1.4, 1.4);
      canvas.style.cursor = 'pointer';
      playBlipSound(720);
    }
  } else {
    if (hoveredMesh) {
      hoveredMesh.scale.set(1, 1, 1);
      hoveredMesh = null;
      canvas.style.cursor = isDragging ? 'grabbing' : 'grab';
    }
  }

  // FPS metric update
  if (elapsedTime - lastFpsUpdate > 0.5) {
    fpsCounter.innerText = Math.round(1 / clock.getDelta() || 60);
    lastFpsUpdate = elapsedTime;
  }

  renderer.render(scene, camera);
}

animate();
