import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import chaosImage from "../images/chaos.webp";  // Convert to WebP for better performance
import chaosImage2 from "../images/chaos2.webp";

function Home() {
    const [inViewLeft1, setInViewLeft1] = useState(false);
    const [inViewRight1, setInViewRight1] = useState(false);
    const [inViewLeft2, setInViewLeft2] = useState(false);
    const [inViewRight2, setInViewRight2] = useState(false);

    const [imagesLoaded, setImagesLoaded] = useState([false, false]); // Track load status of both images
    const [animationsReady, setAnimationsReady] = useState(false); // Flag to trigger animations only after both images are loaded

    // Handle image load completion
    const handleImageLoad = (index) => {
        setImagesLoaded((prev) => {
            const newState = [...prev];
            newState[index] = true;  // Mark specific image as loaded
            return newState;
        });
    };

    useEffect(() => {
        // Trigger animations only when both images are loaded
        if (imagesLoaded[0] && imagesLoaded[1]) {
            // Add a slight delay to ensure everything is ready
            setTimeout(() => {
                setAnimationsReady(true);
            }, 500); // 500ms delay to ensure smooth load
        }
    }, [imagesLoaded]);

    useEffect(() => {
        const observerLeft1 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && animationsReady) {
                    setInViewLeft1(true);
                }
            },
            { threshold: 0.5 }
        );

        const observerRight1 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && animationsReady) {
                    setInViewRight1(true);
                }
            },
            { threshold: 0.5 }
        );

        const observerLeft2 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && animationsReady) {
                    setInViewLeft2(true);
                }
            },
            { threshold: 0.5 }
        );

        const observerRight2 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && animationsReady) {
                    setInViewRight2(true);
                }
            },
            { threshold: 0.5 }
        );

        // Target elements for intersection observer
        const leftElements1 = document.querySelectorAll(".left-text1");
        const rightElements1 = document.querySelectorAll(".right-text1");
        const leftElements2 = document.querySelectorAll(".left-text2");
        const rightElements2 = document.querySelectorAll(".right-text2");

        leftElements1.forEach((el) => observerLeft1.observe(el));
        rightElements1.forEach((el) => observerRight1.observe(el));
        leftElements2.forEach((el) => observerLeft2.observe(el));
        rightElements2.forEach((el) => observerRight2.observe(el));

        // Clean up observers on component unmount
        return () => {
            leftElements1.forEach((el) => observerLeft1.unobserve(el));
            rightElements1.forEach((el) => observerRight1.unobserve(el));
            leftElements2.forEach((el) => observerLeft2.unobserve(el));
            rightElements2.forEach((el) => observerRight2.unobserve(el));
        };
    }, [animationsReady]);

    return (
        <Container
            style={{
                backgroundColor: "#F7FFF2",
                color: "#558257",
                fontFamily: "'Poppins', sans-serif",
                padding: "0",
                position: "relative",
                minHeight: "100vh",
            }}
        >
            <div style={{ position: "relative" }}>
                {/* First Image */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={chaosImage}
                        alt="Chaos"
                        style={{
                            width: "90vw",
                            position: "relative",
                            zIndex: 0,  // Keep the first image at the back
                        }}
                        onLoad={() => handleImageLoad(0)}  // Track load of first image
                    />
                </div>

                {/* Text Overlays with Intersection Observer Triggered Animations */}
                {animationsReady && (
                    <>
                        <div
                            className="left-text1"
                            style={{
                                position: "absolute",
                                top: "11%",
                                left: "0%",
                                textAlign: "left",
                                fontSize: "clamp(1rem, 3vw, 3rem)",
                                zIndex: 2,  // Text above the image
                                animation: inViewLeft1 ? "slideInLeft 1s ease-out forwards" : "none",
                            }}
                        >
                            Do you see chaos?
                        </div>

                        <div
                            className="right-text1"
                            style={{
                                position: "absolute",
                                top: "30%",
                                right: "0%",
                                textAlign: "right",
                                fontSize: "clamp(1rem, 3vw, 3rem)",
                                zIndex: 2,  // Text above the image
                                animation: inViewRight1 ? "slideInRight 1s ease-out forwards" : "none",
                            }}
                        >
                            I see the potential to <br />weave a story.
                        </div>
                    </>
                )}

                {/* Second Image */}
                <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                    <img
                        src={chaosImage2}
                        alt="Chaos 2"
                        style={{
                            width: "98.7vw",
                            position: "relative",
                            zIndex: 1,  // Keep the second image below the text
                        }}
                        onLoad={() => handleImageLoad(1)}  // Track load of second image
                    />
                </div>

                {/* More Text with Intersection Observer Triggered Animations */}
                {animationsReady && (
                    <>
                        <div
                            className="left-text2"
                            style={{
                                position: "absolute",
                                top: "60%",
                                left: "0%",
                                textAlign: "left",
                                fontSize: "clamp(1rem, 3vw, 3rem)",
                                zIndex: 2,  // Text above the image
                                animation: inViewLeft2 ? "slideInLeft 1s ease-out forwards" : "none",
                            }}
                        >
                            Hi, I am Ayushi Kowe<br />a UI/UX & Graphic Designer
                        </div>

                        <div
                            className="right-text2"
                            style={{
                                position: "absolute",
                                top: "83%",
                                right: "0%",
                                textAlign: "right",
                                fontSize: "clamp(1rem, 3vw, 3rem)",
                                zIndex: 2,  // Text above the image
                                animation: inViewRight2 ? "slideInRight 1s ease-out forwards" : "none",
                            }}
                        >
                            I untangle your chaos into <br />clear, beautiful stories.
                        </div>
                    </>
                )}
            </div>

            <style>
                {`
                    .fs-responsive {
                        font-size: clamp(1rem, 3vw, 3rem); /* Making font-size responsive */
                    }

                    /* Keyframes for Slide In Animations */
                    @keyframes slideInLeft {
                        0% {
                            transform: translateX(-100%);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    @keyframes slideInRight {
                        0% {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </Container>
    );
}

export default Home;
