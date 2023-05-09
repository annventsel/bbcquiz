import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Slider() {
  return (
    <Carousel>
      <div>
        <img src="images/1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="images/2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="images/3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="images/4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="images/5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="images/6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img src="images/7.jpg" />
        <p className="legend">Legend 7</p>
      </div>
    </Carousel>
  );
}

export default Slider;
