import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import f1 from "../images/f1.png"
import f2 from "../images/f2.png"
import f3 from "../images/f3.png"
import f4 from "../images/f4.png"
import f5 from "../images/f5.png"

const projects = [
  {
    description: "A clean and modern approach to visual identity.",
    image: f1
  },
  {
    description: "Exploring the impact of typography in branding.",
    image: f2
  },
  {
    description: "Designing packaging that speaks to the audience.",
    image: f3
  },
  {
    description: "Understanding how colors influence brand perception.",
    image: f4
  },
  {
    description: "High-end branding for luxury products.",
    image: f5
  }
];

function Flyer() {
  return (
    <Container className="py-5" style={{ backgroundColor: "#F7FFF2", fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-left mb-5" style={{ color: "#558257", marginTop: "60px", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        Flyer Design
      </h2>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card className="shadow-sm border-0 rounded" style={{ overflow: "hidden" }}>
              <Card.Img variant="top" src={project.image} style={{ objectFit: "cover", width: "100%" }} />
              <Card.Body>
                <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{project.title}</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem", color: "#666" }}>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Flyer;
