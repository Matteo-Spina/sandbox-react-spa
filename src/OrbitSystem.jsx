// credits: example code from Formidable 'renature' animation library gallery at https://codesandbox.io/s/renature-orbit-7w6z0

import styled from "styled-components/macro";
import { useGravity2D } from "renature";

const OrbitSystemContainer = styled.div`
  /* layout */
  margin: 0 1rem;
  /* size constraints */
  min-width: 30ch;
  max-width: 45ch;
  min-height: 30ch;
  max-height: 45ch;
  /* size */
  /* ... */
`;

const Center = styled.div`
  /* size */
  height: 100%;
  width: 100%;
  /* as flex-container */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Attractor = styled.div`
  /* size */
  height: 6rem;
  width: 6rem;
  /* decoration */
  border-radius: 50%;
  background: yellow;
  transform: translateX(50%);
`;
const Orbiter = styled.div`
  /* size */
  height: 3rem;
  width: 3rem;
  /* decos */
  border-radius: 50%;
  background: purple;
`;

function OrbitSystem() {
  const config = {
    attractorMass: 1000000000000,
    moverMass: 10000,
    attractorPosition: [0, 0],
    threshold: {
      min: 20,
      max: 100,
    },
    timeScale: 100,
  };

  const [planetOne] = useGravity2D({
    config: {
      ...config,
      initialMoverPosition: [0, -100],
      initialMoverVelocity: [1, 0],
    },
  });

  const [planetTwo] = useGravity2D({
    config: {
      ...config,
      initialMoverPosition: [0, 100],
      initialMoverVelocity: [-1, 0],
    },
  });

  return (
    <OrbitSystemContainer>
      <Center>
        <Attractor />
        <Orbiter {...planetOne} />
        <Orbiter {...planetTwo} />
      </Center>
    </OrbitSystemContainer>
  );
}

export default OrbitSystem;
