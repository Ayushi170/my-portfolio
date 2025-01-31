import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import t1 from "../images/t1.png"
import t2 from "../images/t2.png"

const projects = [
  {
    description: "A clean and modern approach to visual identity.",
    image: t1
  },
  {
    description: "Exploring the impact of typography in branding.",
    image: t2
  },
];

function Tshirt() {
  return (
    <Container className="py-5" style={{ backgroundColor: "#F7FFF2", fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-left mb-5" style={{ color: "#558257", marginTop: "60px", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        T-Shirt Design
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

export default Tshirt;
