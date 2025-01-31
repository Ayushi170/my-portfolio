import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Branding from "./pages/branding";
import UiUx from "./pages/uiux";
import { Container } from "react-bootstrap";
import SocialMedia from "./pages/socialmedia";
import Merchandise from "./pages/merchandise";
import Flyer from "./pages/flyer";
import Tshirt from "./pages/tshirt";
import Flex from "./pages/flex";

function App() {
    return (
        <Router>
            <div style={{ backgroundColor: "#F7FFF2" }}>
                <Navbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/branding" element={<Branding />} />
                        <Route path="/uiux" element={<UiUx />} />
                        <Route path="/socialmedia" element={<SocialMedia />} />
                        <Route path="/flyer" element={<Flyer />} />
                        <Route path="/merchandise" element={<Merchandise />} />
                        <Route path="/tshirt" element={<Tshirt />} />
                        <Route path="/flex" element={<Flex />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;
