import "./style.css";
import { useState } from "react";
function Starter() {
  const [toggle, setToggle] = useState(true);
  const toggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
        <button className="starter" onClick={() => toggleButton()}>
          Start quiz
        </button>
      ) : (
        <section id="starter_answer">
          <input type="text" placeholder="Enter your answer" />
          <button className="starter">Submit</button>
        </section>
      )}
    </>
  );
}

export default Starter;
