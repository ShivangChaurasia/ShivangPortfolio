import { Code2, Database, Globe, Layout, Server, Smartphone } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout className="w-8 h-8 text-blue-400" />,
            skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"]
        },
        {
            title: "Backend Development",
            icon: <Server className="w-8 h-8 text-green-400" />,
            skills: ["Node.js", "Express", "Firebase", "MongoDB", "SQL"]
        },
        {
            title: "Programming Languages",
            icon: <Code2 className="w-8 h-8 text-purple-400" />,
            skills: ["Python", "Java", "C++", "C#"]
        },
        {
            title: "Mobile & Web",
            icon: <Smartphone className="w-8 h-8 text-orange-400" />,
            skills: ["React Native", "PWA", "Responsive Design"]
        },
        {
            title: "Database",
            icon: <Database className="w-8 h-8 text-red-400" />,
            skills: ["Firestore", "PostgreSQL", "Redis"]
        },
        {
            title: "Other Tools",
            icon: <Globe className="w-8 h-8 text-indigo-400" />,
            skills: ["Git", "Docker", "Vercel", "AWS"]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4">My <span className="text-gradient">Skills</span></h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    I've worked with a variety of technologies in the web and mobile development world.
                    Here's a snapshot of my technical expertise.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="glass p-8 rounded-3xl hover:scale-105 transition-all duration-300 group"
                    >
                        <div className="mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-white/10 transition-colors">
                            {category.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIndex) => (
                                <span
                                    key={sIndex}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}