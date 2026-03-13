import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "AspireLens",
            subtitle: "AI-Powered Career Counselling Platform",
            description: "A full-stack AI-driven career guidance web application that helps students identify suitable career paths through aptitude analysis and personalized recommendations.",
            tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "GROQ API"],
            github: "https://github.com/ShivangChaurasia",
            live: "https://aspirelens.vercel.app", // Example live link for demo
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
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in text-white">
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
                        className="glass rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-white/5 bg-white/5 flex flex-col"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            
                            {project.live !== "#" && (
                                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-2 border border-white/10">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Live</span>
                                </div>
                            )}

                            <div className="absolute bottom-6 right-6 flex space-x-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                                <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                {project.live !== "#" && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="p-10 flex flex-col flex-grow">
                            <div className="mb-6">
                                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-primary/80 font-bold text-xs tracking-[0.1em] uppercase">{project.subtitle}</p>
                            </div>
                            
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-gray-500 group-hover:text-primary group-hover:border-primary/20 transition-all"
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
