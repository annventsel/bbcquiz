import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from './slider.module.css';
import { players } from '../players';

const Slider = ({ currentQuestion, isQuizStarted }) => {

  return (
    <section className={styles.carousel}>
      <Carousel
        selectedItem={currentQuestion}
        className={!isQuizStarted ? styles.blocked : styles.unblocked}
        showThumbs={false}
        showIndicators={false}
      >
        {players.map((player) => (
          <div key={player.id}>
            <img src={player.imgSrc} alt='Football Player 1' />
          </div>
        ))}

      </Carousel>

    </section>

  );
}

export default Slider;
