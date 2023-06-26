import "./style.css";
import HowToPlay from "./components/HowToPlay/howToPlay";
import Score from "./components/Score/score";
import Timer from "./components/Timer/timer";
import StartQuiz from "./components/StartQuiz/startQuiz";
import Slider from "./components/Slider/slider";
import CompletedGame from "./components/CompletedGame/completedGame";
import { useState } from "react";
import { players } from "./components/players";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setQuizCompleted] = useState(false);
  const [isGivenUp, setIsGivenUp] = useState(false);

  // this function telling a child component what to do when the user submits the answer
  const handleAnswerSubmit = (answer) => {
    //1. do something to check if answer (currentAnswer) is correct
    const isAnswerCorrect = players[currentQuestion].answer.toLowerCase() === answer.toLowerCase()
    if (isAnswerCorrect) {
      setScore(previous => previous + 1)
    }
    setCurrentQuestion(previous => previous + 1) //2. move to the next question
  }

  const onStart = () => {
    setIsQuizStarted(true);
  }

  const onComplete = () => {
    setQuizCompleted(true);
    // setScore(0);
  }

  return (
    <div className="app">
      <h2>Can you name the Premier League footballers?</h2>
      <HowToPlay />
      <section className="app__score">
        <Score score={score} />
        <Timer
          onStart={onStart}
          isQuizStarted={isQuizStarted}
          onComplete={onComplete}
          setIsGivenUp={setIsGivenUp}
        />
      </section>
      <StartQuiz
        onSubmit={handleAnswerSubmit}
        isQuizStarted={isQuizStarted}
        isGivenUp={isGivenUp}
      />
      <Slider
        currentQuestion={currentQuestion}
        isQuizStarted={isQuizStarted}
        isQuizCompleted={isQuizCompleted}
        onStart={setIsQuizStarted}
        onComplete={setQuizCompleted}
        setScore={setScore}
        setCurrentQuestion={setCurrentQuestion}
        isGivenUp={isGivenUp}
      />
      <CompletedGame />

    </div>
  );
}

export default App;
