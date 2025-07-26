import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import travelapp from "../../Assets/Projects/Travel App.png"
import grocery from "../../Assets/Projects/Grocery.png";
import cafeking from "../../Assets/Projects/Cafe King.png";
import bishoponchessboard from "../../Assets/Projects/Bishop on Chessboard.png";
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
              imgPath={drieddelights}
              isBlog={false}
              title="Dried Delights"
              description="Dried Delights is a modern, visually appealing landing page built using Framer, designed to showcase premium dried fruits. 
                The website features a clean and minimal layout, smooth transitions, and vibrant product imagery that captures attention. 
                It’s fully responsive, ensuring a seamless experience across all devices. Ideal for branding, the site reflects elegance, simplicity, 
                and product focus in every scroll."
              link2="https://drieddelights.framer.website/"
            />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zanzibarstore}
              isBlog={false}
              title="Zanzibar Store"
              description="Zanzibar Store is a comprehensive FullStack Ecommerce platform developed using 
              ReactJs for the frontend, NodeJs for the backend, along with JavaScript, Bootstrap, HTML5, and 
              CSS3, offering a seamless shopping experience with intuitive user interfaces, robust functionalities, 
              and visually appealing design elements."
              link1="https://github.com/Famila-M/Ecommerce-Store"
              link2="https://zanzibar-store.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
             imgPath={cafeking}
             isBlog={false}
             title="Cafe King"
             description="CafeKing Web App, crafted with Materialize CSS, delivers a sleek and intuitive platform for 
             coffee aficionados to explore, order, and engage with the coffee community, ensuring a seamless and enjoyable 
             browsing experience."
             link1="https://github.com/Famila-M/Materialize-CSS"
             link2="https://cafeking-coffee.netlify.app/"
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

          <Col md={4} className="project-card">
            <ProjectCard 
             imgPath={travelapp}
             isBlog={false}
             title="Travel App"
             description="The Travel App, designed in Figma, streamlines travel planning with its visually appealing interface, allowing users to discover destinations, book accommodations, and create itineraries seamlessly."
             link2="https://www.figma.com/proto/BgN0la4LmYLlK4KeKXMIKF/Travel-App?node-id=1-3&starting-point-node-id=1%3A3&scaling=scale-down&mode=design&t=JTeUyGikiC51yTS8-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
             imgPath={bishoponchessboard}
             isBlog={false}
             title="Bishop on Chessboard"
             description="Bishop on Chessboard project is a program designed to simulate the movement of a bishop on a chessboard 
             featuring a graphical user interface, movement validation, legal move highlighting, input validation, error handling, 
             and customizable options, catering to both chess enthusiasts and programming enthusiasts."
             link1="https://github.com/Famila-M/Bishop-on-Chessboard"
             link2="https://bishoponchessboard.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

