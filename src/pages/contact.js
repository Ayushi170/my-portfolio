import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jellyfish from "../images/jellyfish.png"; // Importing the jellyfish image

function Contact() {
    return (
        <Container 
            fluid 
            className="d-flex align-items-center justify-content-center text-center" 
            style={{
                backgroundColor: "#F7FFF2",
                fontFamily: "'Poppins', sans-serif",
                minHeight: "100vh",
                position: "relative",
                padding: "50px 20px",
                textAlign: "center"
            }}
        >
            {/* Background Jellyfish Image */}
            <div 
                style={{
                    backgroundImage: `url(${jellyfish})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "clamp(400px, 50vw, 500px)", // Increased size dynamically
                    height: "clamp(400px, 50vw, 500px)",
                    transform: "translate(-50%, -50%)",
                    zIndex: "0"
                }} 
            ></div>

            <Row className="w-100" style={{ position: "relative", zIndex: "1" }}>
                <Col xs={12}>
                    <h2 
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            color: "#558257",
                            marginBottom: "20px"
                        }}
                    >
                        Let’s find your <br></br><span style={{ color: "#558257", fontStyle: "italic" }}>clarity</span> together
                    </h2>

                    <div className="d-flex justify-content-center flex-column flex-md-row" style={{ gap: "20px" }}>
                        {/* Email */}
                        <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#333", margin: "5px 0" }}>
                            <a href="mailto:ayushikowe03@gmail.com" style={{ textDecoration: "none", color: "#2d5c34"}}>
                                ayushikowe03@gmail.com
                            </a>
                        </p>

                        {/* Phone Number */}
                        <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#333", margin: "5px 0" }}>
                            <a href="tel:+917821907735" style={{ textDecoration: "none", color: "#2d5c34" }}>
                                +91 7821907735
                            </a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
