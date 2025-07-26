import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi there! I'm a dedicated software developer with 2+ years of experience, currently working at 
  <b className="purple"> Promantus Inc</b> as a Frontend Developer. I specialize in building responsive, 
  scalable web applications using modern technologies. My journey includes valuable experience at 
  <b className="purple"> Accenture</b>, where I honed my project coordination and documentation skills. 
  I'm passionate about crafting intuitive user interfaces and delivering seamless digital experiences. Let's create something awesome together!
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Html5, CSS3, Javascript, TypeScript, Angular, Bootstrap, ReactJS, NodeJS, Figma & Framer </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Scalable Products</b> and
    exploring emerging trends in{" "}
                <b className="purple">
                  New Technologies.
                </b>
              </i>
              <br />
              <br />
             Whenever possible, I love applying my skills to develop efficient solutions using 
              with <b className="purple">Java Spring Boot</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Angular </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Famila-M"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/famila-m"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
