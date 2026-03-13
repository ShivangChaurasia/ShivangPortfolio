import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "AspireLens",
            subtitle: "AI-Powered Career Counselling Platform",
            description: "A full-stack AI-driven career guidance web application that helps students identify suitable career paths through aptitude analysis and personalized recommendations.",
            tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "GROQ API"],
            github: "https://github.com/ShivangChaurasia",
            live: "#",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
        },
        {
            title: "AI-Powered Gift Chatbot",
            subtitle: "Personalized Recommendation Engine",
            description: "Developed an AI-powered chatbot that generates personalized gift suggestions based on natural language input, budget awareness, and occasion-based filtering.",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "Particles.js"],
            github: "https://github.com/ShivangChaurasia",
            live: "#",
            image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1600"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                    A showcase of my recent work, blending artificial intelligence with modern web architectures.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-white/5"
                    >
                        <div className="relative h-72 md:h-80 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            
                            <div className="absolute top-6 right-6 flex space-x-3">
                                <a href={project.github} className="p-3 glass rounded-2xl hover:bg-white/20 transition-all">
                                    <Github className="w-5 h-5 text-white" />
                                </a>
                                <a href={project.live} className="p-3 glass rounded-2xl hover:bg-white/20 transition-all">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>

                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-primary/80 font-semibold text-sm mb-4 tracking-wide uppercase italic">{project.subtitle}</p>
                            <p className="text-gray-400 text-base mb-8 leading-relaxed font-light">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all"
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