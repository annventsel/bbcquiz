import React, { useRef } from 'react';
import Countdown from 'react-countdown';

function Timer(props) {

  const timerRef  = useRef();

  const handleStart = () => timerRef.current.start(); 
  const handlePause = () => timerRef.current.pause();
  const handleStop = () => timerRef.current.stop();
  

  return (
    
    <section>
    
    <Countdown
  date={Date.now() + 120000}
  intervalDelay={3}
  zeroPadTime={2}
  autoStart={false}
  ref={timerRef}
  renderer={props => (
    <span>
      {String(props.minutes).padStart(2, '0')}:
      {String(props.seconds).padStart(2, '0')}
    </span>
  )}
/>
        <br />
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleStop}>Stop</button>    
    </section>
  );
}

export default Timer;