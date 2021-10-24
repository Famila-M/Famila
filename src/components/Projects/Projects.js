import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import grocery from "../../Assets/Projects/Grocery.png";
import colorpalatte from "../../Assets/Projects/colorpalatte.png";
import zanzibarstore from "../../Assets/Projects/zanzi.png";
import githubclone from "../../Assets/Projects/Github.png";
import cocktail from "../../Assets/Projects/Cocktail.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zanzi}
              isBlog={false}
              title="Zanzibar Store"
              description="This is FullStack Ecommerce Store using ReactJs, NodeJs, JavaScript, BootStrap, HTML5 & CSS3."
              link1="https://github.com/Famila-M/Ecommerce-Store"
              link2="https://zanzibar-store.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Grocery Bud"
              description="This is Grocery Shop which we can Add & Remove using ReactJs, JavaScript, BootStrap, HTML5 & CSS3."
              link1="https://github.com/Famila-M/GroceryBud"
              link2="https://grocerybud-01.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorpalatte}
              isBlog={false}
              title="Color Palatte"
              description="ColorPalatte is full of colors where we can search for RGB colors using ReactJs, JavaScript, BootStrap, HTML5 & CSS3."
              link1="https://github.com/Famila-M/colorpalatte"
              link2="https://colorpalatte.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cocktail}
              isBlog={false}
              title="Cocktail"
              description="Cocktail is build using ReactJs, JavaScript, BootStrap, HTML5 & CSS3."
              link1="https://github.com/Famila-M/Cocktail"
              link2="https://cock-tail.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubclone}
              isBlog={false}
              title="Github_Clone"
              description="Github Clone is build using JavaScript, HTML5 & CSS3, BootStrap, API"
              link1="https://github.com/Famila-M/Hackathon-Github_Clone"
              link2="https://github-14.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
