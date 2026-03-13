import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Training", path: "/training" },
        { name: "Projects", path: "/projects" },
        { name: "Certificates", path: "/certifications" },
        { name: "Achievements", path: "/achievements" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-6">
            <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
                <Link to="/" className="text-xl font-extrabold text-gradient">
                    Shivang.
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${location.pathname === item.path ? "text-primary scale-105" : "text-gray-400"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            download
                            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2"
                        >
                            <span>Resume</span>
                            <Download className="w-3 h-3" />
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-gray-400 hover:text-white transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden mt-4 glass rounded-2xl p-6 animate-fade-in">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm font-medium transition-all duration-300 hover:text-primary ${location.pathname === item.path ? "text-primary" : "text-gray-400"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/resume.pdf"
                                download
                                className="bg-primary hover:bg-primary/80 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 w-full"
                            >
                                <span>Get Resume</span>
                                <Download className="w-4 h-4" />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}