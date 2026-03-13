import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import Achievements from "./pages/Achievements";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
    return (
        <Router>
            <BackgroundAnimation />
            <div className="relative z-10">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <WhatsAppButton />
            </div>
        </Router>
    );
}
