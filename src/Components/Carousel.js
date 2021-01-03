import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const DisplayCarouselComponent = (props) => {
  const { feedbackData } = props;

  return (
    <Carousel>
      {Object.keys(feedbackData).map((user) => {
        return (
          <Carousel.Item key={feedbackData[user].imagesrc}>
            <Row>
              <Col md={{ span: 3, order: 1 }}>
                <img
                  alt={feedbackData[user].name}
                  className="userImage"
                  style={{
                    width: "185px",
                    height: "185px",
                    objectFit: "cover",
                    margin: "50px 0px 50px 50px",
                  }}
                  src={feedbackData[user].imagesrc}
                ></img>
              </Col>
              <Col md={{ span: 9, order: 2 }}>
                <Carousel.Caption>
                  <p>{feedbackData[user].feedback}</p>
                  <span
                    style={{
                      color: "#29385C",
                      float: "right",
                      fontSize: "22px",
                    }}
                  >
                    <b>-{feedbackData[user].name}</b>
                  </span>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

const mapStateToProps = (state) => ({
  feedbackData: state.feedbackData,
});

const DisplayCarousel = connect(
  mapStateToProps,
  null
)(DisplayCarouselComponent);

export default DisplayCarousel;
