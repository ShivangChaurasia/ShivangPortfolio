import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
            tags: ["React", "Express", "MongoDB", "Stripe"],
            github: "#",
            live: "#",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600"
        },
        {
            title: "AI Chat Application",
            description: "Real-time chat app featuring AI-powered auto-responses and sentiment analysis.",
            tags: ["Next.js", "OpenAI", "Firebase", "Tailwind"],
            github: "#",
            live: "#",
            image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1600"
        },
        {
            title: "Portfolio Website",
            description: "Modern portfolio with glassmorphism design and automated contact workflows.",
            tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
            github: "#",
            live: "#",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    A selection of my recent work, ranging from full-stack applications to creative frontend experiments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                <a href={project.github} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all">
                                    <Github className="w-6 h-6 text-white" />
                                </a>
                                <a href={project.live} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all">
                                    <ExternalLink className="w-6 h-6 text-white" />
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-primary/10 text-primary rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}