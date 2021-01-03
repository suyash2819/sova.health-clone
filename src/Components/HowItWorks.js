import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchServicesData } from "./FetchData";
import "../Css/Home.css";
import Header from "./Header";
import DisplayCarousel from "./Carousel";
import Loader from "./Loader";
import Footer from "./Footer";
import MultiCarousel from "./MultiCarousel";
import "../Css/HowItWorks.css";
import ChatBox from "./ChatBox";

const HealthPromise = () => {
  const healthPromiseImages = [
    "https://static.wixstatic.com/media/9d3b92_3df89a4fce7544ffb0bf87b4672b604f~mv2.png/v1/fill/w_242,h_327,al_c,q_85,usm_0.66_1.00_0.01/p1.webp",
    "https://static.wixstatic.com/media/9d3b92_291a6513e63643a3927a1d1d7c4083f3~mv2.png/v1/fill/w_241,h_360,al_c,q_85,usm_0.66_1.00_0.01/p2.webp",
    "https://static.wixstatic.com/media/9d3b92_f6bedbfc7b5e424a8aa61727121f15d1~mv2.png/v1/fill/w_242,h_396,al_c,q_85,usm_0.66_1.00_0.01/p3.webp",
  ];

  return (
    <div className="healthPromise">
      <center>
        <br />
        <h2 className="howitworkssubheading">THE SOVA HEALTH PROMISE</h2>
        <div className="howitworksunderlining4" id=""></div>
      </center>
      <br />
      <Row className="healthpromiserow">
        {healthPromiseImages.map((image) => {
          return (
            <Col md={3} key={image}>
              <center>
                <img
                  alt="health Promise Images"
                  src={image}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </center>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const Services = (props) => {
  const { servicesData } = props;

  return (
    <div className="services">
      <center>
        <br />
        <h2 className="howitworkssubheading">SERVICES</h2>
        <div className="howitworksunderlining3" id=""></div>
        <br />
        <br />
        <MultiCarousel servicesData={servicesData} />
      </center>
      <br />
      <br />
    </div>
  );
};

const HowDeosItWork = () => {
  return (
    <div className="howdoesitwork">
      <center>
        <h2 className="howitworkssubheading">HOW DOES IT WORK ?</h2>
        <div className="howitworksunderlining2" id=""></div>
        <br />
        <br />
        <img
          alt="hiw_h_edited.jpg"
          src="https://static.wixstatic.com/media/9d3b92_04c4ba0e66a7492096d4c1ef31a2ed60~mv2.jpg/v1/fill/w_1101,h_320,al_c,q_80,usm_0.66_1.00_0.01/hiw_h_edited.webp"
          className="howdoesitworkimg"
        />
      </center>
    </div>
  );
};

const HowItWorksComponent = (props) => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetchServicesData().then((serviceData) => {
      setServices(serviceData.data);
    });
  }, []);

  if (!services) return <Loader />;
  return (
    <>
      <Header />
      <Row
        style={{
          marginTop: "70px",
          backgroundColor: "#eaeeef",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <Col
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
        >
          <div className="howitworksfrontquote1">
            <h2 id="frontquote1" className="howitworksfronttext">
              Truly Personalized Nutrition starts with a Blood-Test
            </h2>
            <div
              className="howitworksfronttext"
              id="howitworksunderlining"
            ></div>
            <br />
            <br />
            <div className="howitworksfronttext" id="howitworksfrontquote2">
              <p style={{ fontSize: "20px" }}>
                At home collection of blood sample & analysis for 60+
                parameters. Based on your health reports, our nutritionists will
                guide you with nutritional & lifestyle advice.
              </p>
            </div>
            <br />
            <br />
            <div className="howitworksfronttext" id="howitworksfrontquote3">
              <Link to="/howitworks" className="nav-link viewourplans">
                View Our Plans
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
          <img
            alt="hiw_banner.png"
            src="https://static.wixstatic.com/media/9d3b92_926b8b16573941818318ed5fd7011b51~mv2.png/v1/fill/w_461,h_423,al_c,q_85,usm_0.66_1.00_0.01/hiw_banner.webp"
            className="headimg"
          />
        </Col>
      </Row>
      <br />
      <br />
      <HowDeosItWork />
      <br />
      <br />
      <Services servicesData={services} />
      <br />
      <br />
      <HealthPromise />
      <br />
      <br />
      <div className="pastusers">
        <br />
        <br />

        <center>
          <h2 className="headingpastusers" style={{ width: "70%" }}>
            WE LET THE RESULTS SPEAK FOR THEMSELVES HERE’S WHAT OUR PAST USERS
            HAVE TO SAY:
          </h2>
          <div className="howitworksunderlining5" id=""></div>
          <br />
          <br />
          <div
            className="carousel"
            style={{ backgroundColor: "#e3e3e3", width: "70%" }}
          >
            <DisplayCarousel />
          </div>
        </center>
        <br />
        <br />
      </div>
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

const HowItWorks = connect(mapStateToProps, null)(HowItWorksComponent);

export default HowItWorks;
