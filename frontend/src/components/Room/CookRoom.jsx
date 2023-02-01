import React, { useState } from 'react';

import BigCamera from '../Wrapper/Box/CameraBox/BigCamera/BigCamera';
import SmallCamera from '../Wrapper/Box/CameraBox/SmallCamera/SmallCamera';

function CookRoom() {
  const [isStageing, setIsStageing] = useState(false);

  const cameraChangeHandler = () => {
    setIsStageing(!isStageing);
  };
  return (
    <>
      {!isStageing ? <SmallCamera /> : <BigCamera />}
      <button onClick={cameraChangeHandler}>카메라 전환</button>
    </>
  );
}

export default CookRoom;
