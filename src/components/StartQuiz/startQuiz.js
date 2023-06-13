import styles from './startQuiz.module.css';
import { useState } from "react";


const StartQuiz = ({ onSubmit, isQuizStarted }) => {
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleAnswerInput = (event) => {
    setCurrentAnswer(event.target.value);
  }

  const handleSubmitClick = () => {
    onSubmit(currentAnswer); //parent App gives instructions what to do after click
    setCurrentAnswer(''); //2. clear the text box
  }

  return (
    <>
      {isQuizStarted && (
        <section id="starter_answer">
          <input
            className={styles.answerInput}
            type="text"
            placeholder="Enter your answer"
            onChange={handleAnswerInput}
            value={currentAnswer} // we need put the value if we want to clear input programmaticaly
          />
          <button
            className={styles.buttonSubmit}
            onClick={handleSubmitClick}
          >Submit</button>
        </section>

      )}
    </>
  );
}

export default StartQuiz;
