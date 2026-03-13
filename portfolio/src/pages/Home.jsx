import { useState, useEffect } from "react";
import profileImg from "../assets/profile_avatar.png";
import { ArrowRight, Code, BookOpen, Briefcase, Award, Trophy, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const sections = [
        { title: "Technical Arsenal", icon: <Code />, link: "/skills", desc: "Expertise in MERN stack, Java, and AI integration." },
        { title: "Training", icon: <BookOpen />, link: "/training", desc: "Bootcamps in Java & DSA with industrial certifications." },
        { title: "Featured Projects", icon: <Briefcase />, link: "/projects", desc: "AI-driven platforms and real-world web applications." },
        { title: "Certifications", icon: <Award />, link: "/certifications", desc: "Accredited credentials from Nasscom, Google, and Meta." },
        { title: "Achievements", icon: <Trophy />, link: "/achievements", desc: "Recognized coding milestones and competitive programming." },
        { title: "Let's Connect", icon: <Mail />, link: "/contact", desc: "Always open for collaborations and new opportunities." }
    ];

    return (
        <div className="min-h-screen relative z-10 w-full">
            {/* Gradient Overlay for Readability */}
            <div className="fixed inset-0 pointer-events-none -z-40" style={{
                background: "linear-gradient(rgba(2,6,23,0.6), rgba(2,6,23,0.8))"
            }}></div>

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
                {/* Hero Section */}
                <div className={`flex flex-col items-center text-center mb-24 w-full transition-all duration-1000 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    
                    <div className="relative mb-12 group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-2xl group-hover:opacity-100 transition-opacity duration-700"></div>
                        <img
                            src={profileImg}
                            alt="Shivang Chaurasia"
                            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-white/10 shadow-2xl z-10"
                        />
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md">
                        Hi, I'm <span className="text-cyan-400">Shivang Chaurasia</span>
                    </h1>

                    <h2 className="text-lg md:text-2xl text-cyan-400 font-semibold mb-6 tracking-wide drop-shadow-sm">
                        Backend Developer
                    </h2>

                    <p className="max-w-4xl text-base md:text-lg text-slate-300 mb-6 font-light leading-relaxed">
                        I am a <span className="text-white font-medium italic">Computer Science undergraduate</span> at LPU with a strong focus on <span className="text-cyan-400 font-bold">backend development</span>, <span className="text-blue-400 font-bold">full-stack web applications</span>, and problem-solving. I enjoy building scalable applications that combine modern web technologies with practical real-world use cases, including <span className="text-purple-400 font-medium tracking-wide">MERN stack development</span>, AI feature integration, and secure authentication systems.
                    </p>

                    <p className="max-w-2xl text-sm md:text-base text-slate-400 mb-12 font-medium tracking-wide">
                        MERN Stack | Backend Systems | REST APIs
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/projects"
                            className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg flex items-center space-x-2 active:scale-95"
                        >
                            <span>View Projects</span>
                            <Briefcase className="w-5 h-5 ml-1" />
                        </Link>
                        
                        <a
                            href="/resume.pdf"
                            download
                            className="glass border border-slate-700 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center space-x-2 active:scale-95"
                        >
                            <span>Download Resume</span>
                            <Download className="w-5 h-5 ml-1" />
                        </a>

                        <Link
                            to="/contact"
                            className="glass border border-slate-700 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center space-x-2 active:scale-95"
                        >
                            <span>Contact Me</span>
                            <Mail className="w-5 h-5 ml-1" />
                        </Link>
                    </div>
                </div>

                {/* Section Previews */}
                <div className={`w-full transition-all duration-1000 delay-300 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-black">Quick <span className="text-gradient">Navigation</span></h2>
                        <div className="h-[2px] flex-grow mx-8 bg-white/5 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section, idx) => (
                            <Link 
                                to={section.link}
                                key={idx} 
                                className="glass-card p-8 group flex flex-col justify-between hover:-translate-y-2 transition-all duration-500"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{section.title}</h3>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
                                        {section.desc}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                                    <span>Open Section</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}






