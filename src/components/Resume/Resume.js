import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://drive.google.com/file/d/1ejMho4l_tyk63o7mUf06xLSEmT9jge5O/view?usp=sharing";

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
              title="Calmscious"
              content={[
                "At Calmscious, we thrive on innovation and collaboration to create exceptional digital solutions. As a Frontend Developer here, I've been part of a dynamic team committed to excellence in every project. Our culture fosters creativity, continuous learning, and a user-centric approach, ensuring our solutions are always cutting-edge and impactful. It's an environment where challenges fuel growth, and our collective passion drives us to exceed expectations every time.",
              ]}
            />
            <Resumecontent
              title="Accenture"
              content={[
                "My time at Accenture was enriching, providing me with valuable insights into project control services and effective project management. I collaborated with diverse teams on innovative projects, gaining exposure to cutting-edge technologies. The culture fostered continuous learning and growth, equipping me with essential skills for success in the tech industry.",
              ]}
            /> 
            <Resumecontent
              title="Guvi Geeks"
              content={[
                "My time at Guvi Geeks was transformative, where I delved into the MERN stack, gaining practical experience in MongoDB, Express.js, React, and Node.js. Collaborating on various projects, I honed my coding skills and embraced a culture of innovation and exploration. It was a foundational experience that ignited my passion for software development.",
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
              title="12TH BOARD [Nandha Matric Hr.Sec School,Erode]"
              date="2015 - 2017"
              content={["Precentage: 65%"]}
            />
            <Resumecontent
              title="10TH BOARD [AKR Academy CBSE School, Tirupur] "
              date="2013 - 2015"
              content={[`CGPA: ${6.6} `]}
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
