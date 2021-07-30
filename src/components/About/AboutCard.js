import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello!!, I am <span className="purple">Famila </span>
            from <span className="purple"> Chennai, India.</span>
            <br />I'm a graduate of 2020 from Hindusthan College of Arts And Science 
            at Coimbatore with a degree in Computer Science. I'm most passionate about 
            giving back to the community, and my goal is to pursue this passion within 
            the field of software Developer. In my free time I like working on open source projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
