import "./style.css";

import HowToPlay from "./components/HowToPlay/howToPlay";
import Score from "./components/Score/score";
import Timer from "./components/Timer/timer";
import Starter from "./components/Starter";
import Slider from "./components/Slider/slider";

function App() {
  return (
    <div className="app">
      <h1>Can you name the Premier League footballers?</h1>
      <HowToPlay />
      <section className="app__score">
        <Score />
        <Timer />
      </section>
      <Starter />
      <Slider />
    </div>
  );
}

export default App;
