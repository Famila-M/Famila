import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import grocery from "../../Assets/Projects/Grocery.png";
import colorpalatte from "../../Assets/Projects/colorpalatte.png";
import cafeking from "../../Assets/Projects/Cafe-King.png";
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
              imgPath={cafeking}
              isBlog={false}
              title="Cafe-King"
              description="We want to do a lot of stuff; we’re not in great shape. We didn’t get a good night’s sleep. We’re a little depressed. Coffee solves all these problems in one delightful little cup.Everyone should believe in something. I believe I will have another coffee."
              link="https://github.com/Famila-M/Materialize-CSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Grocery Bud"
              description="I love grocery shopping when I'm home. That's what makes me feel totally normal. I love both the idea of home as in being with my family and friends, and also the idea of exploration. I think those two are probably my great interests."
              link="https://github.com/Famila-M/GroceryBud"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorpalatte}
              isBlog={false}
              title="Color Palatte"
              description="Color Palatte is build with react.js. One of the most important steps of any graphic or web design project is to create an appropriate color palette to use across the entire design.They also include hex code you can copy to add proper color codes when designing websites as well. Best of all, they are completely free to use."
              link="https://github.com/Famila-M/colorpalatte"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cocktail}
              isBlog={false}
              title="Cocktail"
              description="Cocktail is build using react.js.An alcoholic drink consisting of a spirit or spirits mixed with other ingredients, such as fruit juice or cream.A cocktail can contain alcohol, a sugar, and a bitter/citrus.Cock-tail is a stimulating liquor, composed of spirits of any kind, sugar, water, and bitters—it is vulgarly called bittered sling."
              link="https://github.com/Famila-M/Cocktail"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubclone}
              isBlog={false}
              title="Github_Clone"
              description="Github Clone is build using JS. The description of a repo tells the public what is contained in the repo itself. If you have multiple repositories for the same project, it's better to describe what is contained in the repo itself instead of describing the project."
              link="https://github.com/Famila-M/Hackathon-Github_Clone"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
