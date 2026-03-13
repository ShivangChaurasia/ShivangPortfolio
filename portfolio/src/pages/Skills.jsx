import { Layout, Server, Database, Cpu, Globe, Terminal, FileCode, Layers, Search, Workflow, Cog, Smartphone, Cloud, Boxes, Shapes, Code } from "lucide-react";

export default function Skills() {
    const allSkills = [
        { name: "Java", icon: <FileCode className="w-10 h-10 text-orange-500" /> },
        { name: "C", icon: <Terminal className="w-10 h-10 text-blue-500" /> },
        { name: "JavaScript", icon: <FileCode className="w-10 h-10 text-yellow-400" /> },
        { name: "Python", icon: <Terminal className="w-10 h-10 text-blue-400" /> },
        { name: "React (Vite)", icon: <Layout className="w-10 h-10 text-cyan-400" /> },
        { name: "Node.js", icon: <Server className="w-10 h-10 text-green-500" /> },
        { name: "Express.js", icon: <Layers className="w-10 h-10 text-gray-400" /> },
        { name: "HTML", icon: <Code className="w-10 h-10 text-orange-600" /> },
        { name: "CSS", icon: <Shapes className="w-10 h-10 text-blue-500" /> },
        { name: "Tailwind CSS", icon: <Shapes className="w-10 h-10 text-cyan-500" /> },
        { name: "Bootstrap", icon: <Shapes className="w-10 h-10 text-purple-600" /> },
        { name: "Java Swing", icon: <Layout className="w-10 h-10 text-red-500" /> },
        { name: "MongoDB", icon: <Database className="w-10 h-10 text-green-600" /> },
        { name: "MySQL", icon: <Database className="w-10 h-10 text-blue-600" /> },
        { name: "Git", icon: <BranchIcon className="w-10 h-10 text-orange-600" /> },
        { name: "GitHub", icon: <GitHubIcon className="w-10 h-10 text-white" /> },
        { name: "Postman", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
        { name: "Firebase", icon: <Cloud className="w-10 h-10 text-yellow-500" /> },
        { name: "Vercel", icon: <Globe className="w-10 h-10 text-white" /> },
        { name: "DSA", icon: <Workflow className="w-10 h-10 text-primary" /> },
        { name: "OOPs", icon: <Cog className="w-10 h-10 text-secondary" /> },
        { name: "REST APIs", icon: <Globe className="w-10 h-10 text-green-400" /> },
        { name: "Auth Systems", icon: <ShieldIcon className="w-10 h-10 text-red-400" /> }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Technical <span className="text-gradient">Arsenal</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                    My diverse collection of tools and technologies for building exceptional digital solutions.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                {allSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="glass-card aspect-square flex flex-col items-center justify-center p-6 text-center group hover:border-primary/50"
                    >
                        <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                            {skill.icon}
                        </div>
                        <span className="text-sm font-bold tracking-wider text-gray-300 group-hover:text-primary transition-colors">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function BranchIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
        </svg>
    )
}

function GitHubIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
    )
}

function ShieldIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    )
}
