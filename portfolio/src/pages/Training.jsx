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
                    <div key={idx} className="glass-card overflow-hidden group border border-white/5 hover:border-primary/30 transition-all duration-500">
                        <div className="flex flex-col lg:flex-row">
                            {/* Content Side */}
                            <div className="p-8 md:p-12 lg:w-2/3 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <BookOpen className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <div className="flex flex-wrap gap-6 text-gray-400 text-sm font-bold tracking-wide">
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
                                        <div className="bg-green-500/10 text-green-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20 flex items-center shadow-lg shadow-green-500/10">
                                            <CheckCircle2 className="w-4 h-4 mr-2" />
                                            {item.status}
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {item.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-start text-gray-400 leading-relaxed font-light">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Image/Certificate Side */}
                            <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                                <img 
                                    src={item.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"} 
                                    alt="Certificate"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-transparent to-black/60 lg:to-black/80"></div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
