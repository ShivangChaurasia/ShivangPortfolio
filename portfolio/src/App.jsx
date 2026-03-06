import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}