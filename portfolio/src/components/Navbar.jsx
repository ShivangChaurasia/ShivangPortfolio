import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Certifications", path: "/certifications" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-4xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
                <Link to="/" className="text-xl font-extrabold text-gradient">
                    Shivang.
                </Link>
                <ul className="flex items-center space-x-6">
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
                </ul>
            </div>
        </nav>
    );
}