import "./style.css";

import { useState } from "react";

function Score() {
  const [counter, setCounter] = useState(0);
  return (
    <section>
      <p id="score">
        Score: <span> {counter} / 7</span>
      </p>
    </section>
  );
}

export default Score;
