import React, { useRef, useState } from 'react';
import Countdown from 'react-countdown';
import styles from './timer.module.css';

function Timer(props) {
  const [startDate] = useState(Date.now());
  const timerRef = useRef();

  const startCountdown = () => {
    props.onStart(); // starts game and open input field for tapping answer
    timerRef.current.start(); // turns on the timer when we push the button 
  }

  return (

    <section>
      {!props.isQuizStarted &&
         <button className={styles.starter} onClick={startCountdown}>
        Start quiz
      </button>
      }
     

      <Countdown
        date={startDate + 120000}
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

    </section>
  );
}

export default Timer;