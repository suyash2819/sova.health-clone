import "../Css/Footer.css";
import { Link } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";

const Footer = () => {
  const socialmediaimages = [
    "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp",
    "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp",
    "https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp",
    "https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/78aa2057f0cb42fbbaffcbc36280a64a.webp",
  ];

  return (
    <div className="footer">
      <center>
        <div className="underlining" id=""></div>
      </center>
      <br />

      <Row className="footerRow">
        <Col md={6} className="emailform">
          <p className="para">
            <b>Just good content. No spam. Sign up for our newsletter</b>
          </p>
          <br />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <button type="submit">Submit</button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="phonenumber">
            <img
              alt="Buttons-38.png"
              src="https://static.wixstatic.com/media/885c0e_a3ef59513eaa4633aa3d289fbd0e776c~mv2.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/Buttons-38.webp"
              style={{ width: "20px", height: "20px", objectFit: "cover" }}
            />
            <span style={{ fontSize: "16px", marginLeft: "5%" }}>
              +91 9811 574 691
            </span>
          </div>
          <br />
          <div className="email">
            <img
              alt="Buttons-38.png"
              src="https://static.wixstatic.com/media/885c0e_eb3fd16be6fe4e26974aa3473cdeae77~mv2.png/v1/fill/w_20,h_15,al_c,q_85,usm_0.66_1.00_0.01/Buttons-39.webp"
              style={{ width: "20px", height: "15px", objectFit: "cover" }}
            />
            <span style={{ fontSize: "16px", marginLeft: "5%" }}>
              support@sova.health
            </span>
          </div>
        </Col>
      </Row>

      <center>
        {socialmediaimages.map((image) => {
          return (
            <Link to="#" className="" key={image}>
              <img
                alt="social media links"
                src={image}
                style={{ width: "42px", height: "42px", objectFit: "cover" }}
                className="socialmedia"
              />
            </Link>
          );
        })}
        <br />
        <br />
        <p>WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED</p>
      </center>
    </div>
  );
};

export default Footer;
