import { Award, Calendar, ExternalLink, BadgeCheck } from "lucide-react";

export default function Certifications() {
    const certifications = [
        {
            title: "Full Stack Development with MERN",
            issuer: "Nasscom & ThinkQubator",
            date: "Jan 2026",
            link: "#",
            icon: <BadgeCheck className="w-full h-full text-blue-400" />,
            details: "Comprehensive training in MongoDB, Express.js, React, and Node.js with real-world project work."
        },
        {
            title: "Computational Theory",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            link: "#",
            icon: <Award className="w-full h-full text-purple-400" />,
            details: "Focused on Language Principle & Finite Automata Theory."
        },
        {
            title: "Generative AI Apps & Solutions",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            link: "#",
            icon: <Award className="w-full h-full text-green-400" />,
            details: "Building Generative AI applications using no-code tools and modern LLM frameworks."
        },
        {
            title: "Java Programming / DSA",
            issuer: "SDC / LPU",
            date: "Jul 2025",
            link: "#",
            icon: <BadgeCheck className="w-full h-full text-orange-400" />,
            details: "Intensive bootcamp covering advanced Java topics and competitive programming on LeetCode/Codeforces."
        },
        {
            title: "MongoDB Schema Design",
            issuer: "MongoDB University",
            date: "Jun 2025",
            link: "#",
            icon: <Database className="w-full h-full text-green-500" />,
            details: "Optimization techniques for MongoDB schema design and query performance."
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Professional <span className="text-gradient">Credentials</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Recognized certifications and formal validations of my technical expertise across various domains.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                {certifications.map((cert, index) => (
                    <div key={index} className="flip-card h-64 cursor-pointer group">
                        <div className="flip-card-inner relative w-full h-full text-center">
                            {/* Front Side */}
                            <div className="flip-card-front glass p-8 flex flex-col items-center justify-center border-white/5 group-hover:border-primary/30 transition-all duration-500">
                                <div className="w-16 h-16 mb-6 p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                                    {cert.icon}
                                </div>
                                <h3 className="text-lg font-bold leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                                <p className="text-gray-500 text-sm font-medium">{cert.issuer}</p>
                            </div>

                            {/* Back Side */}
                            <div className="flip-card-back glass p-8 flex flex-col items-center justify-center border-primary/20 bg-primary/5">
                                <div className="flex items-center text-primary mb-4 font-mono text-sm tracking-wider">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {cert.date}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light italic">
                                   "{cert.details}"
                                </p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 py-2 bg-primary/20 text-primary border border-primary/30 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center space-x-2"
                                >
                                    <span>Verify Credential</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Database({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
        </svg>
    )
}