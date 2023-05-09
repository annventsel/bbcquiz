import Countdown from "react-countdown";

function Timer() {
  return (
    <section>
      <p>02:00</p>

      <button>Start</button>
      <button>Pause</button>
      <button>Stop</button>

      <Countdown
        date={Date.now() + 120000}
        intervalDelay={1000}
        precision={1}
        zeroPadTime={2}
        renderer={(props) => <div>{props.total}</div>}
      ></Countdown>
    </section>
  );
}

export default Timer;
