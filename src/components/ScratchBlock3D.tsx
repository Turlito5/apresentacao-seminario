import { Component, useEffect, useMemo, useRef, useState, type ComponentRef, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useIsPresent } from 'framer-motion';
import { OrbitControls } from '@react-three/drei';
import { CanvasTexture, ExtrudeGeometry, Group, MathUtils, Shape, SRGBColorSpace, Vector3 } from 'three';
import { MoveUpRight, RotateCcw, RotateCw } from 'lucide-react';

// Referências estáveis: um clique nos controles não recria a câmera nem
// reinicia a medição. offsetSize ignora transformações dos ancestrais.
const CAMERA = { position: [0, 0.9, 7.4] as [number, number, number], fov: 40 };
const RESIZE = { scroll: false, offsetSize: true, debounce: { scroll: 0, resize: 80 } };
const GL_OPTIONS = { antialias: true, alpha: true, powerPreference: 'high-performance' as const };
const PIXEL_RATIO: [number, number] = [1, 2];

function createBlockShape() {
  // Perfil inspirado no encaixe do Scratch. A extrusão e o bevel
  // dão espessura real ao bloco, sem modelos 3D externos.
  const s = new Shape();
  s.moveTo(-2.18, 0.56);
  s.lineTo(-1.48, 0.56);
  s.lineTo(-1.34, 0.38);
  s.lineTo(-0.84, 0.38);
  s.lineTo(-0.7, 0.56);
  s.lineTo(2.18, 0.56);
  s.quadraticCurveTo(2.3, 0.56, 2.3, 0.42);
  s.lineTo(2.3, -0.42);
  s.quadraticCurveTo(2.3, -0.56, 2.18, -0.56);
  s.lineTo(-0.7, -0.56);
  s.lineTo(-0.84, -0.74);
  s.lineTo(-1.34, -0.74);
  s.lineTo(-1.48, -0.56);
  s.lineTo(-2.18, -0.56);
  s.quadraticCurveTo(-2.3, -0.56, -2.3, -0.42);
  s.lineTo(-2.3, 0.42);
  s.quadraticCurveTo(-2.3, 0.56, -2.18, 0.56);
  return s;
}

function createLabel() {
  // A textura é desenhada localmente. Não depende de fonte remota do drei/Text.
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas 2D indisponível');
  context.scale(2, 2);
  context.textBaseline = 'middle';
  context.font = '600 74px Arial, sans-serif';
  context.fillStyle = '#fffaf5';
  context.fillText('mover', 45, 128);
  context.fillStyle = '#f9f1e7';
  context.beginPath();
  context.roundRect(335, 64, 176, 128, 64);
  context.fill();
  context.fillStyle = '#68422c';
  context.textAlign = 'center';
  context.fillText('10', 423, 128);
  context.textAlign = 'left';
  context.fillStyle = '#fffaf5';
  context.fillText('passos', 560, 128);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function FloatingBlock({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState<CanvasTexture | null>(null);
  const geometry = useMemo(() => {
    const result = new ExtrudeGeometry(createBlockShape(), {
      depth: 0.44, bevelEnabled: true, bevelSegments: 3,
      bevelSize: 0.065, bevelThickness: 0.065, curveSegments: 14, steps: 1,
    });
    result.translate(0, 0, -0.22);
    return result;
  }, []);

  useEffect(() => {
    const texture = createLabel();
    setLabel(texture);
    return () => texture.dispose();
  }, []);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    // As mutações por frame ficam no Three.js, sem setState a 60 fps.
    const time = clock.getElapsedTime();
    group.current.position.x = 0;
    group.current.position.z = 0;
    group.current.position.y = reducedMotion ? 0 : Math.sin(time * 0.8) * 0.11;
    group.current.rotation.z = reducedMotion ? -0.04 : -0.04 + Math.sin(time * 0.45) * 0.025;
    const target = hovered ? 1.055 : 1;
    const scale = reducedMotion ? target : MathUtils.damp(group.current.scale.x, target, 7, delta);
    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group} rotation={[0.03, -0.22, -0.04]}>
      <mesh geometry={geometry}
        onPointerOver={event => { event.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}>
        <meshStandardMaterial color={hovered ? '#db995e' : '#ca854b'} roughness={0.34} metalness={0.12} />
      </mesh>
      {label && (
        <mesh position={[0, -0.025, 0.289]} raycast={() => null}>
          <planeGeometry args={[4.22, 1.055]} />
          <meshBasicMaterial map={label} transparent depthWrite={false} toneMapped={false} />
        </mesh>
      )}
    </group>
  );
}

function SceneControls({ rotation, reset, reducedMotion }: { rotation: number; reset: number; reducedMotion: boolean }) {
  const controls = useRef<ComponentRef<typeof OrbitControls>>(null);
  const { camera, invalidate } = useThree();
  const lastRotation = useRef(rotation);
  useEffect(() => {
    if (rotation !== lastRotation.current) {
      const step = rotation - lastRotation.current;
      camera.position.applyAxisAngle(new Vector3(0, 1, 0), step * Math.PI / 4);
      controls.current?.update();
      lastRotation.current = rotation;
      invalidate();
    }
  }, [rotation, camera, invalidate]);
  useEffect(() => {
    controls.current?.reset();
    invalidate();
  }, [reset, invalidate]);
  return <OrbitControls ref={controls} makeDefault enablePan={false} enableZoom={false}
    // Órbita contínua em torno do centro, sem deslocar o modelo.
    // O próprio controle suspende a rotação enquanto o usuário arrasta.
    autoRotate={!reducedMotion} autoRotateSpeed={2}
    enableDamping dampingFactor={0.07} rotateSpeed={0.7}
    minPolarAngle={0.05} maxPolarAngle={Math.PI - 0.05} />;
}

export function ScratchFallback({ message = 'Ilustração do comando de movimento' }: { message?: string }) {
  return (
    <div className="scene-fallback" role="img" aria-label="Bloco Scratch: mover 10 passos">
      <div className="fallback-block">mover <span>10</span> passos</div>
      <p>{message}</p>
    </div>
  );
}

function ContextMonitor({ onLost }: { onLost: () => void }) {
  const canvas = useThree(state => state.gl.domElement);
  useEffect(() => {
    const handleLost = (event: Event) => { event.preventDefault(); onLost(); };
    canvas.addEventListener('webglcontextlost', handleLost);
    return () => canvas.removeEventListener('webglcontextlost', handleLost);
  }, [canvas, onLost]);
  return null;
}

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <ScratchFallback message="Visualização 2D disponível neste navegador" />
      : this.props.children;
  }
}

export default function ScratchBlock3D({ reducedMotion, active = true }: { reducedMotion: boolean; active?: boolean }) {
  const isPresent = useIsPresent();
  const [rotation, setRotation] = useState(0);
  const [reset, setReset] = useState(0);
  const [visible, setVisible] = useState(!document.hidden);
  const [lost, setLost] = useState(false);

  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  return (
    <div className="scratch-scene" data-no-slide-nav>
      <div className="scene-topline"><span>UM COMANDO. UMA AÇÃO.</span><MoveUpRight size={17} /></div>
      <div className="scene-canvas" tabIndex={0} role="group"
        aria-label="Bloco Scratch interativo. Arraste para girar ou use as setas esquerda e direita."
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault(); event.stopPropagation();
            setRotation(value => value + (event.key === 'ArrowRight' ? 1 : -1));
          }
        }}>
        <div className="scene-shadow" aria-hidden="true" />
        <SceneBoundary>
          {lost ? <ScratchFallback message="Visualização 2D: contexto gráfico indisponível" /> : !active || !isPresent ? (
            <ScratchFallback message="" />
          ) : (
            <Canvas className="webgl-viewport" camera={CAMERA} resize={RESIZE}
              dpr={PIXEL_RATIO} gl={GL_OPTIONS}
              frameloop={!visible ? 'never' : reducedMotion ? 'demand' : 'always'}
              fallback={<ScratchFallback message="Visualização 2D: WebGL indisponível" />}>
              <ContextMonitor onLost={() => setLost(true)} />
              <ambientLight intensity={1.3} />
              <directionalLight position={[3, 5, 6]} intensity={3.5} color="#fff2e6" />
              <directionalLight position={[-4, 1, 3]} intensity={1.4} color="#c4d6eb" />
              <directionalLight position={[0, -2, -4]} intensity={1.8} color="#e8edf5" />
              <FloatingBlock reducedMotion={reducedMotion} />
              <SceneControls rotation={rotation} reset={reset} reducedMotion={reducedMotion} />
            </Canvas>
          )}
        </SceneBoundary>
      </div>
      <div className="scene-toolbar">
        <span>{reducedMotion ? 'Arraste para explorar em 360°' : 'Rotação 360° em loop · arraste para explorar'}</span>
        <div className="flex gap-2">
          <button className="scene-button" onClick={() => setRotation(value => value + 1)} aria-label="Girar bloco 45 graus" title="Girar 45°"><RotateCw size={17} /></button>
          <button className="scene-button" onClick={() => setReset(value => value + 1)} aria-label="Restaurar posição do bloco" title="Restaurar posição"><RotateCcw size={17} /></button>
        </div>
      </div>
      <span className="scene-disclosure">Modelo didático inspirado no Scratch</span>
    </div>
  );
}
