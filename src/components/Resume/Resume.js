import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://drive.google.com/file/d/10umIWN7C_OXi1ravJaIGQLwgV43ruIBb/view?usp=sharing";

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={uri} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
  <Resumecontent
              title="Promantus Inc"
              content={[
                "Designed and developed responsive, feature-rich web applications using Angular and Java Spring Boot with RESTful API integration. Enhanced user experience through optimized UI performance, lazy loading, and reusable component design. Implemented dynamic features like advanced search filters, reactive forms, and client-side validations to improve interactivity and usability. Ensured secure and seamless frontend-backend communication with robust CRUD operations, proper session handling, and custom error responses. Integrated authentication mechanisms including SAML/SSO for secure access control. Collaborated in Agile teams, participated in code reviews, and followed clean-code practices and version control (Git). Delivered modules with 40% performance improvement and reduced user-reported issues by 15%.",
              ]}
            />
            <Resumecontent
              title="Calmscious"
              content={[
                "At Calmscious, we thrive on innovation and collaboration to create exceptional digital solutions. As a Frontend Developer here, I've been part of a dynamic team committed to excellence in every project. Our culture fosters creativity, continuous learning, and a user-centric approach, ensuring our solutions are always cutting-edge and impactful. It's an environment where challenges fuel growth, and our collective passion drives us to exceed expectations every time.",
              ]}
            />
            <Resumecontent
              title="Accenture"
              content={[
                "Provided support in project management activities including documentation, task scheduling, and milestone tracking to ensure smooth execution and timely delivery. Maintained up-to-date project plans, status reports, and dashboards to support stakeholder communication and decision-making. Assisted in preparing project documentation such as meeting minutes, requirement specs, and risk logs. Contributed to process standardization, knowledge base creation, and continuous improvement initiatives across teams. Ensured compliance with project governance and facilitated coordination among cross-functional teams.",
              ]}
            /> 
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              content={[
                "Certification in “Full Stack MERN Bootcamp” by Learn Code Online(LCO).",
              ]}
            />
            <Resumecontent
              content={[
                "Certification in Javascript by Guvi.",
              ]}
            />
            <Resumecontent
              content={[
                "Certification in “Build a Face Recognition Application using Python” by Guvi.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Sc.Computer Science [Hindusthan College of Arts And Science,Coimbatore] "
              date="2017 - 2020"
              content={["Precentage: 80.11%"]}
            />
                <Resumecontent
              title="Master of Computer Applications [Bharathiar University,Coimbatore] "
              date="2021 - 2023"
              content={["Precentage: 79.12%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={uri} target="_blank">
          <AiOutlineDownload />&nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
