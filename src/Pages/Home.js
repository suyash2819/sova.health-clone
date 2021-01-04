import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "../Css/Home.css";
import Header from "../Components/Header";
import DisplayCarousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import ChatBox from "../Components/ChatBox";

const OurPartners = () => {
  return (
    <div className="partners">
      <center>
        <h2 className="subheading">OUR PARTNERS</h2>
        <div className="underlining6" id=""></div>
        <br />
        <br />
        <img
          alt="partners.png"
          src="https://static.wixstatic.com/media/9d3b92_e1d9d90c304c4ef999d674989bf1eaff~mv2.png/v1/fill/w_875,h_260,al_c,q_85,usm_0.66_1.00_0.01/partners.webp"
          className="partnerimage"
          style={{ width: "70%", height: "260px", objectFit: "cover" }}
        />
        <br />
        <br />
        <br />
        <h2 className="subheading">AS SEEN IN</h2>
        <div className="underlining7" id=""></div>
        <br />
        <br />
        <img
          alt="news.png"
          src="https://static.wixstatic.com/media/9d3b92_3991b5d25426446e816e611c307fc350~mv2.png/v1/fill/w_865,h_235,al_c,q_85,usm_0.66_1.00_0.01/news.webp"
          className="partnerimage"
          style={{ width: "70%", height: "260px", objectFit: "cover" }}
        ></img>
      </center>
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <div className="customers">
      <center>
        <h2 className="subheading">WHAT OUR CUSTOMERS SAY</h2>
        <div className="underlining5" id=""></div>
      </center>
      <br />
      <br />
      <center>
        <div
          className="carousel"
          style={{ backgroundColor: "#e3e3e3", width: "70%" }}
        >
          <DisplayCarousel />
        </div>
      </center>
    </div>
  );
};

const IntroVideo = (props) => {
  const { videoUrl } = props;
  return (
    <center>
      <div
        className="embed-responsive embed-responsive-16by9"
        style={{ width: "50%" }}
      >
        <iframe
          className="embed-responsive-item"
          title="intro"
          src={videoUrl}
        ></iframe>
      </div>
    </center>
  );
};

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <center>
        <h2 className="subheading">HOW IT WORKS ?</h2>
      </center>
      <div className="underlining3" id=""></div>
      <br />
      <br />
      <center>
        <img
          alt="hiw_summary.png"
          src="https://static.wixstatic.com/media/9d3b92_fee3386e22d64814a30df75ad248f966~mv2.png/v1/fill/w_741,h_185,al_c,q_85,usm_0.66_1.00_0.01/hiw_summary.webp"
          className="howitworksimg"
        ></img>
        <br />
        <br />
        <br />
        <h5>
          <Link to="/howitworks" className="completeprocess">
            SEE HOW THE COMPLETE PROCESS WORKS
          </Link>
        </h5>
        <div className="underlining4" id=""></div>
      </center>
    </div>
  );
};

const HealthGoals = () => {
  const healthGoalImages = [
    [
      "https://static.wixstatic.com/media/885c0e_8d0d8a4426c7476c84d9b5d7c7a34fc0~mv2.jpg/v1/fill/w_259,h_245,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%204-01.webp",
      "https://static.wixstatic.com/media/885c0e_2420973663a04a4bb9a04f9ca88d8dcd~mv2.jpg/v1/fill/w_260,h_245,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%205-01-01.webp",
      "https://static.wixstatic.com/media/885c0e_093db876134f47a7bf15d6ed448ccfb7~mv2.jpg/v1/fill/w_259,h_245,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%203-01.webp",
    ],
    [
      "https://static.wixstatic.com/media/885c0e_023e1a30e19e40398527e8dd258dc69d~mv2.jpg/v1/fill/w_260,h_250,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%201-01.webp",
      "https://static.wixstatic.com/media/885c0e_064ea72ca3244e16ba1b7805bd78bcf0~mv2.jpg/v1/fill/w_260,h_249,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%202-01.webp",
      "https://static.wixstatic.com/media/885c0e_0be74917661446c29c7f0fb74fc2d309~mv2.jpg/v1/fill/w_259,h_249,al_c,q_80,usm_0.66_1.00_0.01/Sova%20banner%202%20(mobile)%206-01.webp",
    ],
  ];

  return (
    <div className="healthGoals">
      <center>
        <h2 className="subheading">WE HELP YOU ACHIEVE YOUR HEALTH GOALS</h2>
      </center>
      <div className="underlining2" id=""></div>
      <br />
      {healthGoalImages.map((batch, j) => {
        return (
          <Row className="healthGoalsRow" key={j}>
            {batch.map((image, i) => {
              return (
                <Col md={3} key={image}>
                  <center>
                    <img
                      alt="Sova banner 2 (mobile) 4-01.jpg"
                      src={image}
                      style={{
                        width: "259px",
                        height: "245px",
                        objectFit: "cover",
                      }}
                    />
                  </center>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
};

const HomeComponent = (props) => {
  return (
    <>
      <Header />
      <Row
        style={{
          marginTop: "70px",
          backgroundColor: " #29385c",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <Col
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          style={{ color: "white" }}
        >
          <div className="frontquote1">
            <h2 id="frontquote1" className="fronttext">
              Discover a Healthier You
            </h2>

            <div className="fronttext" id="underlining"></div>

            <br />
            <br />
            <div className="fronttext" id="frontquote2">
              <p style={{ fontSize: "20px" }}>
                Get a personalized nutrition program based on your lifestyle,
                habits and blood analysis.
              </p>
            </div>
            <br />
            <br />
            <div className="fronttext" id="frontquote3">
              <Link to="/howitworks" className="nav-link learnmore">
                <b>Learn More</b>
              </Link>
            </div>
            <br />
            <br />
          </div>
        </Col>
        <Col
          lg={{ span: 6, order: 2 }}
          md={{ span: 6, order: 1 }}
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          style={{ color: "white" }}
        >
          <center>
            <img
              alt="HP_Image.png"
              src="https://static.wixstatic.com/media/9d3b92_99f1a6ad907e4aae84ca1d2bb15edf58~mv2.png/v1/fill/w_455,h_370,al_c,q_85,usm_0.66_1.00_0.01/HP_Image.webp"
              style={{ width: "70%" }}
              id="frontimage"
            ></img>
          </center>
        </Col>
      </Row>

      <div className="division2">
        <br />
        <center>
          <h2 className="subheading">REDEFINE YOUR RELATIONSHIP WITH FOOD</h2>
        </center>
        <div className="underlining2" id=""></div>
        <center>
          <div className="frontquotediv2">
            <Row className="norestrictrow">
              <Col md={{ span: 4 }} xs={{ span: 12 }}>
                <img
                  alt="cross.png"
                  style={{
                    width: "40px",
                    height: "50px",
                    objectFit: "cover",
                    float: "left",
                  }}
                  src="https://static.wixstatic.com/media/9d3b92_f2d1148d737c4e9e9407d2b91df56572~mv2.png/v1/fill/w_40,h_50,al_c,q_85,usm_0.66_1.00_0.01/cross.webp"
                />
                <span className="norestrictions">
                  <b>No Diet Charts</b>
                </span>
              </Col>
              <Col md={4}>
                <img
                  alt="cross.png"
                  style={{
                    width: "40px",
                    height: "50px",
                    objectFit: "cover",
                    float: "left",
                  }}
                  src="https://static.wixstatic.com/media/9d3b92_f2d1148d737c4e9e9407d2b91df56572~mv2.png/v1/fill/w_40,h_50,al_c,q_85,usm_0.66_1.00_0.01/cross.webp"
                />
                <span className="norestrictions">
                  <b>No Restrictive Diets</b>
                </span>
              </Col>
              <Col md={4}>
                <img
                  alt="cross.png"
                  style={{
                    width: "40px",
                    height: "50px",
                    objectFit: "cover",
                    float: "left",
                  }}
                  className="cross"
                  src="https://static.wixstatic.com/media/9d3b92_f2d1148d737c4e9e9407d2b91df56572~mv2.png/v1/fill/w_40,h_50,al_c,q_85,usm_0.66_1.00_0.01/cross.webp"
                />
                <span className="norestrictions">
                  <b>No Staying Hungry</b>
                </span>
              </Col>
            </Row>
          </div>
        </center>
        <br />
        <br />
      </div>
      <br />
      <HealthGoals />
      <br />
      <br />
      <br />
      <IntroVideo videoUrl="https://www.youtube.com/embed/-3O3TVzbEJ8?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.sova.health&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1" />
      <br />
      <br />
      <br />
      <HowItWorks />
      <br />
      <br />
      <br />
      <br />
      <CustomerFeedback />
      <br />
      <br />
      <OurPartners />
      <br />
      <br />
      <Footer />
      <br />
      <ChatBox />
    </>
  );
};

const mapStateToProps = (state) => ({
  feedbackData: state.feedbackData,
});

const Home = connect(mapStateToProps, null)(HomeComponent);

export default Home;
