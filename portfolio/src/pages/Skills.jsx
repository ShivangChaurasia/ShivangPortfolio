import { useState } from "react";
import { 
    FaJava, FaPython, FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, 
    FaBootstrap, FaGitAlt, FaGithub, FaCubes, FaShieldAlt, FaProjectDiagram, FaServer
} from "react-icons/fa";
import { 
    SiC, SiJavascript, SiExpress, SiTailwindcss, SiMongodb, SiMysql, 
    SiPostman, SiFirebase, SiVercel 
} from "react-icons/si";

export default function Skills() {
    const [activeTab, setActiveTab] = useState("All");

    const allSkills = [
        { name: "Java", icon: FaJava, color: "text-orange-500", category: "Backend" },
        { name: "C", icon: SiC, color: "text-blue-500", category: "Backend" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", category: "Frontend" },
        { name: "Python", icon: FaPython, color: "text-blue-400", category: "Backend" },
        { name: "React (Vite)", icon: FaReact, color: "text-cyan-400", category: "Frontend" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500", category: "Backend" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400", category: "Backend" },
        { name: "PHP", icon: FaPhp, color: "text-indigo-500", category: "Backend" },
        { name: "HTML", icon: FaHtml5, color: "text-orange-600", category: "Frontend" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", category: "Frontend" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", category: "Frontend" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600", category: "Frontend" },
        { name: "Java Swing", icon: FaJava, color: "text-red-500", category: "Tools & Core" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600", category: "Backend" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600", category: "Backend" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-600", category: "Tools & Core" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white", category: "Tools & Core" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500", category: "Tools & Core" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", category: "Tools & Core" },
        { name: "Vercel", icon: SiVercel, color: "text-gray-900 dark:text-white", category: "Tools & Core" },
        { name: "DSA", icon: FaProjectDiagram, color: "text-primary", category: "Tools & Core" },
        { name: "OOPs", icon: FaCubes, color: "text-secondary", category: "Tools & Core" },
        { name: "REST APIs", icon: FaServer, color: "text-green-400", category: "Backend" },
        { name: "Auth Systems", icon: FaShieldAlt, color: "text-red-400", category: "Backend" }
    ];

    const tabs = ["All", "Frontend", "Backend", "Tools & Core"];
    const filteredSkills = activeTab === "All" ? allSkills : allSkills.filter(s => s.category === activeTab);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">Technical <span className="text-gradient">Arsenal</span></h2>
                <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light">
                    My diverse collection of tools and technologies categorized for better discoverability.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                            activeTab === tab 
                            ? "bg-primary text-white shadow-lg shadow-primary/30" 
                            : "glass hover:bg-main/10 text-muted"
                        } active:scale-95`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                {filteredSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="glass-card aspect-square flex flex-col items-center justify-center p-6 text-center group hover:border-primary/50 hover:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 animate-slide-up relative overflow-hidden"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        {/* Interactive background glow effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-current ${skill.color}`}></div>
                        
                        <div className={`relative mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ${skill.color}`}>
                            {/* Inner glow effect on the icon */}
                            <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-25 blur-xl transition-all duration-500 rounded-full"></div>
                            <skill.icon className="relative z-10 w-12 h-12 drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-500" />
                        </div>
                        <span className="text-sm font-bold tracking-wider text-main group-hover:text-primary transition-colors relative z-10">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
