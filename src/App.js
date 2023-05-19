import "./style.css";
import HowToPlay from "./components/HowToPlay/howToPlay";
import Score from "./components/Score/score";
import Timer from "./components/Timer/timer";
import StartQuiz from "./components/StartQuiz/startQuiz";
import Slider from "./components/Slider/slider";
import { useState } from "react";
import { players } from "./components/players";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  // this function telling a child component what to do when the user submits the answer
  const handleAnswerSubmit = (answer) => {
    //1. do something to check if answer (currentAnswer) is correct
    const isAnswerCorrect = players[currentQuestion].answer.toLowerCase() === answer.toLowerCase()
    if(isAnswerCorrect) {
      setScore(previous => previous + 1)
    }
   setCurrentQuestion(previous => previous + 1) //2. move to the next question
  }

const onStart = () => {
  setIsQuizStarted(true);
}

  return (
    <div className="app">
      <h1>Can you name the Premier League footballers?</h1>
      <HowToPlay />
      <section className="app__score">
        <Score score={score}/>
        <Timer onStart={onStart} isQuizStarted={isQuizStarted}/>
      </section>
      <StartQuiz onSubmit={handleAnswerSubmit} isQuizStarted={isQuizStarted}/>
      <Slider currentQuestion={currentQuestion} isQuizStarted={isQuizStarted}/>
    </div>
  );
}

export default App;
