import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub, FaEye } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link1} target="_blank">
         
          {props.isBlog ? "View Blog" : <FaGithub/>}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="primary" href={props.link2} target="_blank">
          
          {props.isBlog ? "View Blog" : <FaEye/>}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
