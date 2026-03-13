import { BookOpen, Calendar, CheckCircle2, MapPin } from "lucide-react";

export default function Training() {
    const trainings = [
        {
            title: "Placement Ace: Java & DSA Bootcamp",
            institution: "Lovely Professional University",
            duration: "Jun 2025 – Jul 2025",
            status: "Completed",
            details: [
                "Hands-on experience in Java programming and Data Structures.",
                "Developed a Contact Management Application using Java Swing with a Trie-based search system.",
                "Applied OOP principles for modular application structure."
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Specialized <span className="text-gradient">Training</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Focused bootcamps and intensive training programs that have shaped my technical foundation.
                </p>
            </div>

            <div className="space-y-10">
                {trainings.map((item, idx) => (
                    <div key={idx} className="glass-card p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen className="w-24 h-24" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm font-medium">
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-primary" />
                                            {item.institution}
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-secondary" />
                                            {item.duration}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-xs font-bold border border-green-500/20 flex items-center">
                                    <CheckCircle2 className="w-4 h-4 mr-2" />
                                    {item.status}
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {item.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start text-gray-300 leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
