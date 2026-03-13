import { Award, Calendar, ExternalLink, BadgeCheck, ShieldCheck, Database, Code2 } from "lucide-react";

export default function Certifications() {
    const certifications = [
        {
            title: "Full Stack Development (MERN)",
            issuer: "Nasscom & ThinkQubator",
            date: "Jan 2026",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            details: "Intensive training in MongoDB, Express.js, React, and Node.js with scalable project implementation."
        },
        {
            title: "Computational Theory",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
            details: "Mastery of Language Principle & Finite Automata Theory."
        },
        {
            title: "Generative AI Solutions",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            details: "Building Generative AI applications using LLM frameworks and no-code tools."
        },
        {
            title: "Java Programming / DSA",
            issuer: "SDC / LPU",
            date: "Jul 2025",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800",
            details: "Bootcamp covering advanced Java topics and competitive programming on TopCoder."
        },
        {
            title: "Database Management System",
            issuer: "NPTEL (IIT Madras)",
            date: "May 2025",
            link: "#",
            thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
            details: "Academic certification in DBMS principles, SQL, and database normalization."
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in text-white">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Professional <span className="text-gradient">Credentials</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Validated expertise through industry-recognized certifications and intensive training programs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                {certifications.map((cert, index) => (
                    <div key={index} className="flip-card h-[400px] cursor-pointer group">
                        <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                            {/* Front Side */}
                            <div className="flip-card-front glass relative overflow-hidden flex flex-col items-center justify-center border-white/5 group-hover:border-primary/30 transition-all duration-500">
                                <div className="absolute inset-0">
                                    <img 
                                        src={cert.thumbnail} 
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
                                </div>
                                <div className="relative z-10 p-8 text-center flex flex-col items-center">
                                    <div className="w-14 h-14 mb-6 flex items-center justify-center bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 shadow-xl">
                                        <Award className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">{cert.issuer}</p>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="flip-card-back glass absolute inset-0 p-10 flex flex-col justify-between border-primary/20 bg-primary/5">
                                <div>
                                    <div className="flex items-center text-primary mb-6 font-black text-xs tracking-[0.2em] uppercase">
                                        <Calendar className="w-4 h-4 mr-3" />
                                        {cert.date}
                                    </div>
                                    <h4 className="text-lg font-bold mb-4 text-white line-clamp-2">{cert.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                                       "{cert.details}"
                                    </p>
                                </div>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full py-4 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary/80 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-primary/20"
                                >
                                    <span>Verify Document</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
