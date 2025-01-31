import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import branding from "../images/branding.png";
import uiux from "../images/uiux.png";
import socialmedia from "../images/socialmedia.png";
import flyer from "../images/flyer.png";
import merchandise from "../images/merchandise.png";
import tshirtdesign from "../images/tshirtdesign.png";
import flex from "../images/flex.png";

const projects = [
    {
        title: "PRODUCT BRANDING",
        description: "Sometimes, it's a brand's voice, shaped with purpose.",
        image: branding,
        link: "/branding"  // Use the path to the relevant project page
    },
    {
        title: "UI/UX DESIGN",
        description: "At times, it's crafting seamless journeys that guide with ease.",
        image: uiux,
        link: "/uiux"
    },
    {
        title: "SOCIAL MEDIA VISUALS",
        description: "Other times, ideas inspiring communication and connections.",
        image: socialmedia,
        link: "/socialmedia"
    },
    {
        title: "FLYER DESIGN",
        description: "It's visuals that captivate at first glance.",
        image: flyer,
        link: "/flyer"
    },
    {
        title: "MERCHANDISE DESIGN",
        description: "Here, designs transform into meaningful, personal statements.",
        image: merchandise,
        link: "/merchandise"
    },
    {
        title: "T-SHIRT DESIGN",
        description: "It's fashion that boldly speaks your identity.",
        image: tshirtdesign,
        link: "/tshirt"
    },
    {
        title: "FLEX DESIGN",
        description: "And sometimes, it's a message amplified, loud and clear for all to see.",
        image: flex,
        link: "/flex"
    }
];

function Projects() {
    return (
        <Container className="py-5" style={{ backgroundColor: "#F7FFF2", fontFamily: "'Poppins', sans-serif" }}>
            <h2 className="text-left mb-5" style={{ color: "#558257", marginTop: "60px", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                My Projects
            </h2>

            <Row className="g-4" style={{ gap: "5rem" }}>
                {projects.map((project, index) => (
                    <Col xs={12} key={index}>
                        {/* Wrap the entire card with <a> tag to make it clickable */}
                        <a href={project.link} style={{ textDecoration: "none" }}>
                            <Card className="shadow-sm border-0 h-100 d-flex flex-row position-relative" style={{color:"#558257", background:"#F7FFF2"}}>
                                {/* Swap image and text position for every alternate card */}
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="card-image" style={{ flex: 1 }}>
                                            <Card.Img
                                                variant="top"
                                                src={project.image}
                                                alt={project.title}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="card-text" style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                                            <Card.Title style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", marginBottom: "10px" }}>
                                                {project.title}
                                            </Card.Title>
                                            <Card.Text style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", flexGrow: 1 }}>
                                                {project.description}
                                            </Card.Text>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="card-text" style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Card.Title style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", marginBottom: "10px" }}>
                                                {project.title}
                                            </Card.Title>
                                            <Card.Text style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", flexGrow: 1 }}>
                                                {project.description}
                                            </Card.Text>
                                        </div>
                                        <div className="card-image" style={{ flex: 1 }}>
                                            <Card.Img
                                                variant="top"
                                                src={project.image}
                                                alt={project.title}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    </>
                                )}
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;
