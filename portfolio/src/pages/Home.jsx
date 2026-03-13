import profileImg from "../assets/profile_avatar.png";
import { ArrowRight, Code, BookOpen, Briefcase, Award, Trophy, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    const sections = [
        { title: "Technical Skills", icon: <Code />, link: "/skills", desc: "Expertise in MERN stack, Java, and AI integration." },
        { title: "Specailized Training", icon: <BookOpen />, link: "/training", desc: "Bootcamps in Java & DSA with industrial certifications." },
        { title: "Featured Projects", icon: <Briefcase />, link: "/projects", desc: "AI-driven platforms and real-world web applications." },
        { title: "Certifications", icon: <Award />, link: "/certifications", desc: "Accredited credentials from Nasscom, Google, and Meta." },
        { title: "Achievements", icon: <Trophy />, link: "/achievements", desc: "Recognized coding milestones and competitive programming." },
        { title: "Let's Connect", icon: <Mail />, link: "/contact", desc: "Always open for collaborations and new opportunities." }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center mb-24 animate-fade-in">
                    <div className="relative mb-10 group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
                        <img
                            src={profileImg}
                            alt="Shivang Chaurasia"
                            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/10 shadow-2xl animate-float"
                        />
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                        Hi, I'm <span className="text-gradient">Shivang</span>
                    </h1>

                    <p className="max-w-3xl text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-light">
                        I am a <span className="text-white font-medium italic">Computer Science undergraduate</span> at LPU with a strong interest in <span className="text-primary font-bold">backend development</span>, <span className="text-secondary font-bold">full-stack web applications</span>, and problem-solving.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/projects"
                            className="bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-primary/30 flex items-center space-x-2"
                        >
                            <span>Explore My Work</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="glass hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center space-x-2"
                        >
                            <span>Contact Me</span>
                        </Link>
                    </div>
                </div>

                {/* Section Previews - Scrollable on mobile, Grid on desktop */}
                <div className="w-full">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold">Quick <span className="text-gradient">Navigation</span></h2>
                        <div className="h-[2px] flex-grow mx-8 bg-white/5 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section, idx) => (
                            <div key={idx} className="glass-card p-8 group flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                        {section.desc}
                                    </p>
                                </div>
                                <Link
                                    to={section.link}
                                    className="flex items-center space-x-2 text-primary font-bold text-sm hover:translate-x-2 transition-transform"
                                >
                                    <span>Visit Section</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}