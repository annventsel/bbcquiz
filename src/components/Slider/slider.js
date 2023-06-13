import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from './slider.module.css';
import { players } from '../players';
import { useState } from 'react';

const Slider = ({ currentQuestion, isQuizStarted, isQuizCompleted, onStart, onComplete, setScore, setCurrentQuestion }) => {
const [showAnswers, setShowAnswers] = useState(false);
const answersToggle = () => {
  setShowAnswers(!showAnswers)
}

const handleTryAgain = () => {
  setScore(0);
  setShowAnswers(!showAnswers);
  setCurrentQuestion(0);
  onComplete(!isQuizCompleted);
  onStart();
}

  return (
    <section className={styles.carousel}>
      {isQuizCompleted && (
        <div>
          <button className={styles.tryAgain__button} onClick={handleTryAgain}>Try again</button>
          <button className={styles.showAnswers__button} onClick={answersToggle}>{!showAnswers ? 'Show' : 'Hide'} answers</button>
        </div>

      )}
      <Carousel
        selectedItem={currentQuestion}
        className={!isQuizStarted ? styles.blocked : styles.unblocked}
        showThumbs={false}
        showIndicators={false}
      >
        {players.map((player) => (
          <div key={player.id}>
            <figcaption 
            className={styles.figcap}>{!showAnswers ? player.question : player.answer}
            </figcaption>
            <img src={player.imgSrc} alt='Football Player 1' />
          </div>
        ))}

      </Carousel>

    </section>

  );
}

export default Slider;
