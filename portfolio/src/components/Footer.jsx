import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, Heart, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Training", path: "/training" },
        { name: "Projects", path: "/projects" },
        { name: "Certifications", path: "/certifications" },
        { name: "Achievements", path: "/achievements" },
        { name: "Contact", path: "/contact" }
    ];

    const socials = [
        { icon: <Github className="w-5 h-5" />, link: "https://github.com/ShivangChaurasia" },
        { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/shivang-chaurasia-754232297/" }
    ];

    const contact = [
        { icon: <Mail className="w-4 h-4 text-primary" />, value: "shiva17ng@gmail.com", link: "mailto:shiva17ng@gmail.com" },
        { icon: <Phone className="w-4 h-4 text-primary" />, value: "+91 9660967612", link: "tel:+919660967612" }
    ];

    return (
        <footer className="relative mt-20 border-t border-main/10 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute top-0 right-1/4 -translate-y-1/2 w-64 h-64 bg-secondary/5 blur-3xl rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-main group flex items-center">
                            SHIVANG<span className="text-gradient">.</span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-xs">
                            A passionate Full-Stack Developer specializing in MERN and scalable architectures. Building digital experiences that matter.
                        </p>
                        <div className="flex space-x-4">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-main/5 border border-main/10 flex items-center justify-center text-main hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-main font-black uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path} 
                                        className="text-sm text-muted hover:text-primary transition-colors flex items-center group"
                                    >
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-main font-black uppercase tracking-widest text-xs mb-8">Get in Touch</h4>
                        <ul className="space-y-4">
                            {contact.map((item, i) => (
                                <li key={i}>
                                    <a 
                                        href={item.link}
                                        className="flex items-center space-x-3 text-sm text-muted hover:text-primary transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-main/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            {item.icon}
                                        </div>
                                        <span>{item.value}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="lg:text-right">
                        <h4 className="text-main font-black uppercase tracking-widest text-xs mb-8">Current Focus</h4>
                        <div className="glass-card p-4 inline-block text-left border-primary/20">
                            <p className="text-xs font-bold text-primary mb-1 uppercase tracking-tighter">Available for Freelance</p>
                            <p className="text-xs text-muted leading-relaxed">Currently exploring scalable system designs and blockchain interactions.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-main/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-muted font-medium flex items-center">
                        © {currentYear} Shivang Chaurasia. Made with <Heart className="w-3 h-3 mx-1 text-red-500 fill-red-500" /> & Coffee.
                    </p>
                    <div className="flex space-x-8 text-[10px] font-black uppercase tracking-widest text-muted">
                        <span className="hover:text-primary transition-colors cursor-default">Designed for Excellence</span>
                        <span className="hover:text-primary transition-colors cursor-default">Built for Scale</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
