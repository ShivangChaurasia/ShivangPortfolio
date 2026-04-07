import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import ResumeDownload from "./ResumeDownload";

export default function Navbar({ theme, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const [typedLogo, setTypedLogo] = useState("");
    const logoName = "ShivangChaurasia";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        let isStopped = false;
        let currentIndex = 0;
        let isDeleting = false;

        const type = () => {
            if (isStopped) return;

            const fullText = "ShivangChaurasia";
            
            setTypedLogo(isDeleting 
                ? fullText.substring(0, currentIndex) 
                : fullText.substring(0, currentIndex)
            );

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && currentIndex < fullText.length) {
                currentIndex++;
                typeSpeed = 100 + Math.random() * 50; // Variable typing speed
            } else if (!isDeleting && currentIndex === fullText.length) {
                isDeleting = true;
                typeSpeed = 3000; // Long pause at full text
            } else if (isDeleting && currentIndex > 0) {
                currentIndex--;
                typeSpeed = 40; // Faster deletion
            } else if (isDeleting && currentIndex === 0) {
                isDeleting = false;
                typeSpeed = 1000; // Pause before restarting
            }

            setTimeout(type, typeSpeed);
        };

        const initialTimeout = setTimeout(type, 1000);

        return () => {
            isStopped = true;
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(initialTimeout);
        };
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Training", path: "/training" },
        { name: "Projects", path: "/projects" },
        { name: "Certificates", path: "/certifications" },
        { name: "Achievements", path: "/achievements" },
        { name: "Education", path: "/education" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "py-4 glass shadow-lg" : "py-6 bg-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-12">
                <Link to="/" className="text-2xl font-black tracking-tighter group transition-colors flex-shrink-0 min-w-[220px]">
                    <span className="text-primary group-hover:text-main transition-colors duration-300">
                        {typedLogo}
                    </span>
                    <span className="text-main group-hover:text-primary transition-colors duration-300">.</span>
                    <span className="inline-block w-[2px] h-[1em] bg-primary animate-pulse ml-1 align-middle"></span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`text-sm font-bold tracking-widest uppercase transition-all hover:text-primary ${
                                    location.pathname === item.path ? "text-primary border-b-2 border-primary pb-1" : "text-main/70 hover:scale-110"
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    
                    {/* Theme Toggle Button */}
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-xl glass hover:bg-primary/20 transition-all border border-white/10 hover:border-primary/50 text-yellow-400 group active:scale-95"
                        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" /> : <Moon className="w-5 h-5 text-indigo-400 group-hover:-rotate-12 transition-transform duration-500" />}
                    </button>

                    <ResumeDownload 
                        className="bg-primary hover:bg-white hover:text-black text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 flex items-center space-x-2"
                    >
                        <span>Resume</span>
                        <Download className="w-4 h-4" />
                    </ResumeDownload>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-xl glass border border-white/10 text-yellow-400"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-indigo-400" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full glass py-8 px-6 border-t border-white/5 animate-fade-in">
                    <ul className="flex flex-col space-y-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-bold tracking-widest uppercase block ${
                                        location.pathname === item.path ? "text-primary" : "text-gray-300"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <ResumeDownload 
                                className="bg-primary inline-flex items-center space-x-2 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest w-full justify-center shadow-xl shadow-primary/20"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>Download Resume</span>
                                <Download className="w-5 h-5" />
                            </ResumeDownload>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

