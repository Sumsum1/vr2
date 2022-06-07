import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
import { Box, Environment, OrbitControls } from '@react-three/drei'

function App() {
  return (

  <VRCanvas style={{height: '100vh'}}>
    <DefaultXRControllers />
    <ambientLight />
    <spotLight />

    <OrbitControls />

    <Box position={[0, 0.8, -1]} scale={[0.3, 0.3, 0.3]}>
      <meshStandardMaterial color="#e23" />
    </Box>
  </VRCanvas>
  );
}

export default App;
