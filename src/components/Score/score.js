import styles from './score.module.css';
import { useState } from "react";

function Score() {
  const [counter, setCounter] = useState(0);
  return (
    <section className={styles.score}>
      <p>
        Score: <span> {counter} / 7</span>
      </p>
    </section>
  );
}

export default Score;
