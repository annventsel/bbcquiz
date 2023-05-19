import styles from './score.module.css';
import { players } from '../players';

const Score = ({ score }) => {

  return (
    <section className={styles.score}>
      <p>
        Score:
        <span>
          {score} / {players.length}
        </span>
      </p>
    </section>
  );
}

export default Score;
