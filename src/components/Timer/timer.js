import React, { useRef, useState } from 'react';
import Countdown from 'react-countdown';
import styles from './timer.module.css';

const Timer = ({ onStart, isQuizStarted, onComplete, setIsGivenUp }) => {
  const [startDate, setStartDate] = useState(Date.now());
  const timerRef = useRef();

  const startCountdown = () => {
    onStart(); // starts game and open input field for tapping answer
    timerRef.current.start(); // turns on the timer when we push the button 
    setStartDate(startDate);
  }

  const completedCountdown = () => {
    onComplete();
    timerRef.current.stop()
    setIsGivenUp(true);
  }

  return (

    <section className={styles.timer}>

      <Countdown
        date={startDate + 120000}
        intervalDelay={3}
        zeroPadTime={2}
        autoStart={false}
        ref={timerRef}
        // onComplete={completedCountdown}

        renderer={({ minutes, seconds }) => (
          <span className={(seconds <= 10 && minutes === 0) ? styles.redText : styles.blackText}>
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </span>
        )}
      />

      {!isQuizStarted &&
        <button className={styles.starter} onClick={startCountdown}>
          Start quiz
        </button>
      }
      {isQuizStarted && (
        <button
          className={styles.giveUp_button}
          onClick={completedCountdown}>
          Give Up
        </button>
      )

      }

    </section>
  );
}

export default Timer;