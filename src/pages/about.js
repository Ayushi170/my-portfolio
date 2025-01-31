import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutMe from "../images/me.png";
import jellyfish from "../images/jellyfish.png";

function About() {
    return (
        <Container fluid className="py-5 position-relative" style={{ backgroundColor: "#F7FFF2", fontFamily: "'Poppins', sans-serif", color:'#558257' }}>
            {/* First Section */}
            <Row className="justify-content-center text-center position-relative">
                <Col xs={12} md={12} className="position-relative">
                    {/* Image */}
                    <Image 
                        src={aboutMe} 
                        alt="Ayushi Kowe"
                        fluid
                        className="w-50"
                    />
                    {/* Overlaying Text */}
                    <div 
                    className="position-absolute top-50 start-0 translate-middle-y text-start px-7"
                    style={{ fontSize: "clamp(1rem, 2vw, 2.5rem)", width: "clamp(40%, 90%, 30%)" }}
                    >
                    <p>Hi, I’m <b>Ayushi Kowe</b>,</p>
                    <p>a UI/UX and Graphic Designer</p>
                    </div>

                    <div 
                    className="position-absolute top-50 end-0 translate-middle-y text-end px-7"
                    style={{ 
                        fontSize: "clamp(0.45rem, 2vw, 1.5rem)", 
                        width: "clamp(30%, 90%, 30%)" 
                    }}
                    >
                    <p>
                        Yet another designer, with a passion for turning scattered ideas into visually compelling and intuitive designs. 
                        I don’t just design; I bring order to the chaos of creativity, shaping raw concepts into structured, meaningful experiences.
                    </p>
                    </div>

                </Col>
            </Row>

            {/* Second Section */}
            <Row className="py-5 px-4" style={{background: "#C7E1AC"}}>
                <Col xs={12} md={4} className="mb-4 d-flex align-items-center justify-content-center">
                    <div className="text-start">
                        <h3>My Experience in UI/UX & Graphic Design</h3>
                        <h2 style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)", lineHeight: "1.3" }}>
                            I’ve worked extensively with both UI/UX design and graphic design, merging creative intuition with user-centric development to build visually appealing, functional designs.
                        </h2>
                    </div>
                </Col>

                {/* Skills Columns */}
                <Col xs={12} md={4} className="mb-4">
                    <div className="mb-3">
                        <h5>Figma</h5>
                        <p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
                            2+ years of experience. Used for UI design, prototyping, and collaboration with developers.
                        </p>
                    </div>
                    <div className="mb-3">
                        <h5>Adobe Illustrator</h5>
                        <p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
                            4+ years of experience. Used for creating vector graphics, logos, and branding materials.
                        </p>
                    </div>
                    <div className="mb-3">
                        <h5>Adobe Photoshop</h5>
                        <p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
                            2+ years of experience. Used for photo editing, visual composition, and creating digital art.
                        </p>
                    </div>
                </Col>

                <Col xs={12} md={4} className="mb-4">
                    <div className="mb-3">
                        <h5>Adobe After Effects</h5>
                        <p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
                            1+ years of experience. Used for building motion effects for digital content.
                        </p>
                    </div>
                    <div className="mb-3">
                        <h5>Canva</h5>
                        <p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
                            4+ years of experience. Used for creating interactive prototypes and wireframes.
                        </p>
                    </div>
                    <div className="mb-3">
                        <h5>Coding (MERN and Html/CSS/Js)</h5>
                        <p style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
                            4+ years of experience. Used for Website Development.
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Background Image Jellyfish */}
            <div 
                style={{
                    backgroundImage: `url(${jellyfish})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    position: "absolute",
                    bottom: "0", // Align the image to the bottom of the viewport
                    left: "50%", // Center horizontally
                    width: "clamp(400px, 50vw, 700px)", // Responsive width
                    height: "clamp(400px, 50vw, 700px)", // Responsive height
                    transform: "translateX(-50%)", // Horizontally center the image
                    zIndex: "0", // Ensure it's behind the content
                    marginBottom: "clamp(120px, 5vh, 70px)"

                }} 
            ></div>

            {/* Third Section */}
            <Row className="py-4 px-2" style={{ position: "relative", zIndex: "1" }}>
                <Col xs={12} sm={5} md={5} lg={5}>
                    <p style={{ fontSize: "clamp(0.7rem, 2vw, 1.5rem)", lineHeight: "1.6" }}>
                        But at my core, I’ve always been an artist, sketching ideas that eventually found a place in digital storytelling.
                    </p>
                </Col>
            </Row>

            {/* Fourth Section */}
            <Row className="py-5 px-4 justify-content-end" style={{ position: "relative", zIndex: "1" }}>
                <Col xs={12} sm={5} md={5} lg={5} xl={5} className="text-end">
                    <p style={{ fontSize: "clamp(0.7rem, 2vw, 1.5rem)", lineHeight: "1.6" }}>
                        I believe great design is like a jellyfish—fluid, adaptable, and effortlessly navigating the chaos to create something mesmerizing.
                    </p>
                </Col>
            </Row>

            {/* Fifth Section */}
            <Row className="py-5 px-4" style={{ position: "relative", zIndex: "1" }}>
                <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                    <p style={{ fontSize: "clamp(0.7rem, 2vw, 1.5rem)", lineHeight: "1.6" }}>
                        Whether it’s a UI that enhances user experience or branding that tells a compelling story, I strive to craft designs that flow seamlessly, illuminate ideas, and leave an impact.
                    </p>
                </Col>
            </Row>

            {/* Last Section */}
            <Row className="py-5 px-4">
                <Col xs={12}>
                    <p className="text-center" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}>
                        So, let’s untangle the mess of ideas and weave them into something remarkable.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
