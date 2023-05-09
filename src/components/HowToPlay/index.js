import "./style.css";
import { useState } from "react";
function HowToPlay() {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button id="htp" onClick={() => toggleButton()}>
        How to play
      </button>
      {toggle && (
        <div id="htp_div">
          <p>
            To get under way, click 'Start'. You won’t be able to see any of the
            images until you’ve done so! Once you have started the quiz, type an
            answer into the box and either hit enter or click the submit button.
            If you are right, the answer will appear above the picture. If not,
            you’ll get a message saying you were incorrect, and can try again.
            Once you’ve got the answer correct, click the right arrow to move
            onto the next picture. You can also move onto the next one if you
            aren’t sure, or want to come back to that image. You can scroll left
            and right through all the pictures - the ones you’ve got right so
            far will have the answers above the photograph. Keep entering more
            answers until you’ve successfully completed the quiz - or the timer
            runs out. If you do not want to play any more, just hit the 'Give
            up!' button. You can then reveal the answers you missed - or have
            another go.
          </p>
        </div>
      )}
    </>
  );
}

export default HowToPlay;
