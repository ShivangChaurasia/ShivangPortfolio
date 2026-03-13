import { Trophy, Calendar, ExternalLink, ArrowRight } from "lucide-react";

export default function Achievements() {
    const achievements = [
        {
            title: "Nasscom & ThinkQubator MERN Graduate",
            description: "Successfully completed the Full Stack Development bootcamp with distinction.",
            date: "Jan 2026",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1523240715630-360e6e408eee?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "8.2 CGPA at Lovely Professional University",
            description: "Maintained a strong academic record while actively participating in technical events.",
            date: "2023 - Present",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Infosys Springboard - Computational Theory",
            description: "Top performer in Language Principle & Finite Automata Theory certification.",
            date: "Aug 2025",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">Major <span className="text-gradient">Achievements</span></h2>
                <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Highlighting key milestones and recognitions from my academic and professional journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {achievements.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-card overflow-hidden group hover:scale-[1.02] active:scale-95 transition-all duration-500 block"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute top-4 right-4 p-2 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex items-center text-primary text-xs font-bold mb-4 tracking-widest uppercase">
                                <Calendar className="w-3 h-3 mr-2" />
                                {item.date}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-main">{item.title}</h3>
                            <p className="text-muted text-sm leading-relaxed mb-6 font-light">
                                {item.description}
                            </p>
                            <div className="flex items-center text-sm font-bold text-main group-hover:text-primary transition-colors">
                                <span>Read More</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
