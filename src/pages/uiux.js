import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import w1 from "../images/w1.png";
import brandingVideo from "../videos/web.mp4"; 
import w2 from "../images/w2.png"
import w3 from "../images/w3.png"
import w4 from "../images/w4.png"

const projects = [
  {
    description: "A clean and modern approach to visual identity.",
    image: w1
  },
  {
    description: "Exploring the impact of typography in branding.",
    image: w2
  },
  {
    
    description: "Designing packaging that speaks to the audience.",
    image: w3
  },
  {
    description: "Understanding how colors influence brand perception.",
    image: w4
  },
];

function UiUx() {
  return (
    <Container className="py-5" style={{ backgroundColor: "#F7FFF2", fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-left mb-5" style={{ color: "#558257", marginTop: "60px", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        Ui/Ux Design
      </h2>

      <Row className="g-4">
        {/* Video Section */}
        <Col md={8} sm={12} xs={12}>
          <Card className="shadow-sm border-0 rounded" style={{ overflow: "hidden" }}>
            <div className="embed-responsive embed-responsive-16by9">
              <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
                <source src={brandingVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Branding Video</Card.Title>
              <Card.Text style={{ fontSize: "0.9rem", color: "#666" }}>
                A dynamic visual representation of branding elements in action.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Image Gallery */}
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

export default UiUx;
