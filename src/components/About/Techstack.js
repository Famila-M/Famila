import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiAngularSimple,
  DiNodejs,
  DiMongodb,
  DiGit
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
  <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
  <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
  <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
  <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
