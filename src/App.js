import logo from "./logo.svg";
import "./App.css";

import HowToPlay from "./components/HowToPlay";
import Score from "./components/Score";
import Timer from "./components/Timer";
import Starter from "./components/Starter";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <h1>Can you name the Premier League footballers?</h1>
      <HowToPlay />
      <section>
        <Score />
        <Timer />
      </section>
      <Starter />
      <Slider />
    </div>
  );
}

export default App;
