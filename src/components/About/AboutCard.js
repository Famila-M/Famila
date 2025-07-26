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
            <br />A Frontend Developer with over 2+ years of experience building responsive and user-friendly web applications using 
              Angular, React, JavaScript, and Spring Boot. I specialize in creating clean, scalable UI components and integrating secure, 
                efficient backend services. Currently, I work at Promantus Inc, contributing to projects like DEWA and Material Cataloguing. 
                I’m passionate about clean code, performance optimization, and delivering great user experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
              <li className="about-activity">
              <ImPointRight /> Surfing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
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
