import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://drive.google.com/file/d/1mNEPwbeB1bqi8wihcuCGHB_6UleFmvIU/view?usp=sharing";

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={uri} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Accomplishment</h3>
            <Resumecontent
              title="Workshop"
              content={[
                "Actively Participated at Developer Fest SalemConnect’19 Organized by i18n Solutions.",
              ]}
            />
            <Resumecontent
              content={[
                "Attended the National Level Workshop on “Machine Learning & Artificial Intelligence” in K.S.R College of Technology.",
              ]}
            /> 
            <Resumecontent
              content={[
                "Attended the National Level Technical Workshop on “Applying Machine Learning To Real Time Problems” in Jai Shriram Engineering College.",
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
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
