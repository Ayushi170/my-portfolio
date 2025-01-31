import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import m1 from "../images/m1.png"
import m2 from "../images/m2.png"
import m3 from "../images/m3.png"
import m4 from "../images/m4.png"
import m5 from "../images/m5.png"

const projects = [
  {
    description: "A clean and modern approach to visual identity.",
    image: m1
  },
  {
    description: "Exploring the impact of typography in branding.",
    image: m2
  },
  {
    description: "Designing packaging that speaks to the audience.",
    image: m3
  },
  {
    description: "Understanding how colors influence brand perception.",
    image: m4
  },
  {
    description: "High-end branding for luxury products.",
    image: m5
  }
];

function Merchandise() {
  return (
    <Container className="py-5" style={{ backgroundColor: "#F7FFF2", fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-left mb-5" style={{ color: "#558257", marginTop: "60px", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        Merchandise Design
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

export default Merchandise;
