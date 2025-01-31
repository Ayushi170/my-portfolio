import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import fl1 from "../images/fl1.png"
import fl2 from "../images/fl2.png"
import fl3 from "../images/fl3.jpg"
import fl4 from "../images/fl4.png"
import fl5 from "../images/fl5.png"


const projects = [
  {
    description: "A clean and modern approach to visual identity.",
    image: fl1
  },
  {
    description: "Designing packaging that speaks to the audience.",
    image: fl3
  },
  {
    description: "Exploring the impact of typography in branding.",
    image: fl2
  },
  {
    description: "Understanding how colors influence brand perception.",
    image: fl4
  },
  {
    description: "High-end branding for luxury products.",
    image: fl5
  }
];

function Flex() {
  return (
    <Container className="py-5" style={{ backgroundColor: "#F7FFF2", fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-left mb-5" style={{ color: "#558257", marginTop: "60px", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        Flex Design
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

export default Flex;
