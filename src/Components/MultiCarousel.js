import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = (props) => {
  const { servicesData } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
    >
      {Object.keys(servicesData).map((services) => {
        return (
          <div key={servicesData[services].imagesrc}>
            <center>
              <img
                alt="carouselimages"
                className=""
                src={servicesData[services].imagesrc}
              ></img>
            </center>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MultiCarousel;
