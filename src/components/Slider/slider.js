import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from './slider.module.css';

function Slider() {


  return (
    <Carousel 
    className={styles.carousel}
    showThumbs={false}
    showIndicators={false}
    
    >
    
      <div>
        <img src="images/1.jpg" alt='Football Player 1' />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="images/2.jpg" alt='Football Player 2' />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="images/3.jpg" alt='Football Player 3' />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="images/4.jpg" alt='Football Player 4' />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="images/5.jpg" alt='Football Player 5' />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="images/6.jpg" alt='Football Player 6 '/>
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="images/7.jpg" alt='Football Player 7' />
        {/* <p className="legend">Legend 7</p> */}
      </div>
    </Carousel>
  );
}

export default Slider;
