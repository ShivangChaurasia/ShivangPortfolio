import { useEffect, useState } from "react";
import { Award, Calendar, ExternalLink, ShieldCheck, Trophy } from "lucide-react";

// Image Imports
import bitsBytesImg from "../assets/certs/Bits&Bytes.png";
import hardwareOSImg from "../assets/certs/Hardware&OS.png";
import p2pImg from "../assets/certs/P2P.png";
import networkCommsImg from "../assets/certs/NetworkComms.png";
import buildGenAIImg from "../assets/certs/Build_Generative.png";
import chatGptImg from "../assets/certs/ChatGpt-4.png";
import computationalTheoryImg from "../assets/certs/Computational_Theory.png";
import generativeAiImg from "../assets/certs/GenerativeAi.png";
import communicationSkillsImg from "../assets/certs/CommunicationSkills.png";
import htmlCssThinqubatorImg from "../assets/certs/HTML&CSS_Thinqubators.png";
import mernThinqubatorImg from "../assets/certs/MERN_Thinqubator.png";
import freeCodeCampImg from "../assets/certs/HTMLFreeCodeCamp.png";
import cryptographyImg from "../assets/certs/NPTEL_Cryptography.png";
import reactHackerRankImg from "../assets/certs/React-HackerRank.png";
import jsHackerRankImg from "../assets/certs/JavaScript-HackerRank.png";
import cssHackerRankImg from "../assets/certs/CSS-HackerRank.png";

import cProgrammingImg from "../assets/certs/C Progaming.png";
import cppOopsImg from "../assets/certs/Cpp & Oops.png";
import dsaImg from "../assets/certs/DSA.png";
import javaImg from "../assets/certs/Java.png";

export default function Certifications() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => {
        setIsLoaded(true);
        // Load Credly Script
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const scriptTag = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
            if (scriptTag) document.body.removeChild(scriptTag);
        };
    }, []);

    const certifications = [
        {
            title: "Data Structures & Algorithms",
            issuer: "NPTEL / SWAYAM",
            platform: "NPTEL",
            date: "N/A",
            category: "Core",
            link: "https://drive.google.com/file/d/1Js1xAKXziyoch6w1Nt60HvTOAVwOxWdA/view?usp=sharing",
            thumbnail: dsaImg,
            details: "In-depth study of algorithmic problem solving and data structure optimization."
        },
        {
            title: "Java Programming",
            issuer: "NPTEL / SWAYAM",
            platform: "NPTEL",
            date: "N/A",
            category: "Core",
            link: "https://drive.google.com/file/d/10leWK3jjvWrmlZulRW_pCJW5ZTNJPQ7n/view?usp=sharing",
            thumbnail: javaImg,
            details: "Mastery of Object-Oriented Programming principles using Java."
        },
        {
            title: "C++ & Object Oriented Programming",
            issuer: "NPTEL / SWAYAM",
            platform: "NPTEL",
            date: "N/A",
            category: "Core",
            link: "https://drive.google.com/file/d/1KZgFDq1YFgcEcxpwEoLqBJ9GT1-F8Y1s/view?usp=sharing",
            thumbnail: cppOopsImg,
            details: "Comprehensive understanding of OOP concepts and C++ standard template library."
        },
        {
            title: "C Programming",
            issuer: "NPTEL / SWAYAM",
            platform: "NPTEL",
            date: "N/A",
            category: "Core",
            link: "https://drive.google.com/file/d/1D-AjTtmOkjsx7oLCLoYrFt5sCGEvZAKD/view?usp=sharing",
            thumbnail: cProgrammingImg,
            details: "Foundational knowledge in C language, memory management, and system-level programming."
        },
        {
            title: "Full Stack Development with MERN",
            issuer: "NASSCOM Foundation",
            platform: "thingQbator",
            date: "N/A",
            category: "Development",
            link: "https://drive.google.com/file/d/1w3wjEuguSuD2n39TFJOs_whI6LRxyRGb/view?usp=sharing",
            thumbnail: mernThinqubatorImg,
            details: "Comprehensive MERN stack bootcamp focusing on real-world web application architecture."
        },
        {
            title: "Foundations of Cryptography",
            issuer: "IIIT Bangalore",
            platform: "NPTEL / SWAYAM",
            date: "Jan–Apr 2025",
            category: "Core",
            id: "Roll No. NPTEL25CS31S1247500172",
            link: "https://drive.google.com/file/d/1KiCXdKOXGmQQt5IJVAvMrPp6r92IRUhZ/view?usp=sharing",
            thumbnail: cryptographyImg,
            details: "Academic dive into cryptographic algorithms, security protocols, and encryption."
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Google",
            platform: "Coursera",
            date: "7 Sept 2024",
            category: "Core",
            link: "https://coursera.org/verify/57R6R13H4JIR",
            thumbnail: bitsBytesImg,
            details: "Comprehensive networking fundamentals: TCP/IP, DNS, DHCP, and network troubleshooting."
        },
        {
            title: "React (Basic)",
            issuer: "HackerRank",
            platform: "HackerRank",
            date: "16 Feb 2026",
            category: "Development",
            id: "BB02C79AEEEB",
            link: "https://www.hackerrank.com/certificates/bb02c79aeeeb",
            thumbnail: reactHackerRankImg,
            details: "Mastery of React components, state management, and reusable UI development."
        },
        {
            title: "JavaScript (Basic)",
            issuer: "HackerRank",
            platform: "HackerRank",
            date: "06 Feb 2026",
            category: "Development",
            id: "E0A56379D18A",
            link: "https://www.hackerrank.com/certificates/e0a56379d18a",
            thumbnail: jsHackerRankImg,
            details: "Demonstrated proficiency in core algorithm logic, data structures, and ES6+ syntax."
        },
        {
            title: "Master Generative AI & Generative AI Tools (ChatGPT & More)",
            issuer: "Udemy",
            platform: "Udemy",
            date: "30 Aug 2025",
            category: "Development",
            id: "UC-a255b11c-2660-433c-b791-1e6a4f4eed53",
            link: "https://drive.google.com/file/d/1VypzQv8dqFY2I45p5ccok9TNfXqAlDCu/view?usp=sharing",
            thumbnail: generativeAiImg,
            details: "End-to-end training in generative tools for productivity and application enhancement."
        },
        {
            title: "Build Generative AI Apps and Solutions with No-Code Tools",
            issuer: "Infosys",
            platform: "Infosys Springboard",
            date: "29 Aug 2025",
            category: "Development",
            link: "https://drive.google.com/file/d/1dImvl24Bs3m7buBjmhrAohNydNdCJfUY/view?usp=sharing",
            thumbnail: buildGenAIImg,
            details: "Developing AI-powered solutions using modern LLM frameworks without manual coding."
        },
        {
            title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
            issuer: "Infosys",
            platform: "Infosys Springboard",
            date: "15 Aug 2025",
            category: "Development",
            link: "https://drive.google.com/file/d/1yB1EqCPDYP4PmAKoGwaDnNlChZaubW3U/view?usp=sharing",
            thumbnail: chatGptImg,
            details: "Mastering advanced prompt engineering techniques to maximize LLM performance."
        },
        {
            title: "CSS (Basic)",
            issuer: "HackerRank",
            platform: "HackerRank",
            date: "15 Oct 2025",
            category: "Development",
            id: "CD3F25DD346B",
            link: "https://www.hackerrank.com/certificates/cd3f25dd346b",
            thumbnail: cssHackerRankImg,
            details: "Building responsive layouts and professional styling with modern CSS properties."
        },
        {
            title: "Responsive Web Design Developer Certification",
            issuer: "freeCodeCamp",
            platform: "freeCodeCamp",
            date: "28 Oct 2023",
            category: "Development",
            link: "https://freecodecamp.org/certification/Shivang_/responsive-web-design",
            thumbnail: freeCodeCampImg,
            details: "Industry-standard certification for mastered front-end responsive design techniques."
        },
        {
            title: "HTML & CSS",
            issuer: "NASSCOM Foundation (Cisco CSR Program)",
            platform: "thingQbator",
            date: "N/A",
            category: "Development",
            link: "https://drive.google.com/file/d/1sCHGjq6cNaltt-isB3cxYDQ_IpAF0Rl8/view?usp=sharing",
            thumbnail: htmlCssThinqubatorImg,
            details: "Building responsive layouts and semantic web structures with modern CSS."
        },
        {
            title: "Computational Theory: Language Principle & Finite Automata Theory",
            issuer: "Infosys",
            platform: "Infosys Springboard",
            date: "28 Aug 2025",
            category: "Core",
            link: "https://drive.google.com/file/d/1O0pZ7YVtf0oVYh0TcZLEum8GgkmO0Pky/view?usp=sharing",
            thumbnail: computationalTheoryImg,
            details: "Deep dive into state machines, grammars, and the mathematical foundations of computation."
        },
        {
            title: "Introduction to Hardware and Operating Systems",
            issuer: "IBM",
            platform: "Coursera",
            date: "10 Sept 2024",
            category: "Core",
            link: "https://coursera.org/verify/XIDKIW0JRWQ6",
            thumbnail: hardwareOSImg,
            details: "Core hardware architecture, OS management, and system optimization principles."
        },
        {
            title: "Peer-to-Peer Protocols and Local Area Networks",
            issuer: "University of Colorado",
            platform: "Coursera",
            date: "4 Nov 2024",
            category: "Core",
            link: "https://coursera.org/verify/4D2Y6JC6OHQ9",
            thumbnail: p2pImg,
            details: "Advanced study of decentralised network protocols and LAN architecture."
        },
        {
            title: "Fundamentals of Network Communication",
            issuer: "University of Colorado",
            platform: "Coursera",
            date: "5 Nov 2024",
            category: "Core",
            link: "https://coursera.org/verify/31IO3GE3IZO",
            thumbnail: networkCommsImg,
            details: "Layered network models, data transmission, and communication protocols."
        },
        {
            title: "Hone Your Communication Skills for Successful Career",
            issuer: "Centre for Professional Enhancement (LPU)",
            platform: "LPU",
            date: "8 Dec 2023",
            category: "Extra Co-curr.",
            id: "298068",
            link: "https://drive.google.com/file/d/1hcOa9R5fyg1YgZNx9p40Hv3vGBFqJlAQ/view?usp=sharing",
            thumbnail: communicationSkillsImg,
            details: "Professional communication, soft skills, and career-oriented leadership training."
        }
    ];

    const badges = [
        "d1217157-4dd0-403e-8170-ac7c1466311a",
        "7a6d3a9b-b7f2-4a8e-9cc5-8f9267faf3bb",
        "9e30672f-13dd-439c-b491-6354746f3881",
        "35298063-104b-49b8-b6dd-cbf785965d01"
    ];

    const tabs = ["All", "Core", "Development", "Extra Co-curr."];
    const filteredCerts = activeTab === "All" ? certifications : certifications.filter(c => c.category === activeTab);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in text-main">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">Professional <span className="text-gradient">Credentials</span></h2>
                <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Industry-recognized certifications representing specialized expertise in Networking, AI, and Full-Stack development.
                </p>
            </div>

            {/* Credly Badges Section */}
            <div className="mb-20">
                <div className="flex items-center space-x-6 mb-12">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-black uppercase tracking-widest text-main">Verified <span className="text-gradient">Badges</span></h3>
                    <div className="h-px flex-grow bg-main/10"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                    {badges.map((id) => (
                        <div 
                            key={id} 
                            className="bg-main/5 p-4 rounded-3xl border border-main/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 shrink-0"
                            data-iframe-width="150" 
                            data-iframe-height="270" 
                            data-share-badge-id={id} 
                            data-share-badge-host="https://www.credly.com"
                        ></div>
                    ))}
                </div>
                
                <div className="mt-12 flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
                    <div className="glass px-8 py-4 rounded-3xl flex items-center gap-4 bg-primary/5 border-primary/20 shadow-xl shadow-primary/10">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="text-4xl font-extrabold text-main leading-tight">{badges.length}+</p>
                            <p className="text-xs uppercase tracking-widest text-muted font-bold">Verified Badges</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                            activeTab === tab 
                            ? "bg-primary text-white shadow-lg shadow-primary/30" 
                            : "glass hover:bg-main/10 text-muted"
                        } active:scale-95`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Flip Cards Section */}
            <div>
                <div className="flex items-center space-x-6 mb-12">
                    <Trophy className="w-8 h-8 text-amber-500" />
                    <h3 className="text-2xl font-black uppercase tracking-widest text-main">Academic <span className="text-gradient">& Professional</span></h3>
                    <div className="h-px flex-grow bg-main/10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {filteredCerts.map((cert, index) => (
                        <div 
                            key={`${activeTab}-${index}`} 
                            className="flip-card h-[450px] cursor-pointer group animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                                {/* Front Side */}
                                <div className="flip-card-front glass relative overflow-hidden flex flex-col border-main/10 group-hover:border-primary/30 transition-all duration-500">
                                    <div className="h-3/5 relative overflow-hidden text-white">
                                        <img 
                                            src={cert.thumbnail} 
                                            alt={cert.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <Award className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="h-2/5 p-6 flex flex-col justify-center bg-bg-base/40">
                                        <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 text-main">{cert.title}</h3>
                                        <p className="text-muted text-xs font-light italic line-clamp-2">"{cert.details}"</p>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="flip-card-back glass absolute inset-0 p-8 flex flex-col justify-between border-primary/20 bg-primary/5">
                                    <div className="space-y-4">
                                        <h4 className="text-base font-black text-main leading-tight uppercase tracking-wider mb-4 border-b border-main/10 pb-4">{cert.title}</h4>
                                        
                                        <div className="space-y-3">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-primary font-black uppercase tracking-widest">Platform</span>
                                                <span className="text-sm font-bold text-main/80">{cert.platform}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-primary font-black uppercase tracking-widest">Issuing Organization</span>
                                                <span className="text-sm font-bold text-main/80">{cert.issuer}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-primary font-black uppercase tracking-widest">Date of Issue</span>
                                                <span className="text-sm font-bold text-main/80">{cert.date}</span>
                                            </div>
                                            {cert.id && (
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">Certificate ID / S.No.</span>
                                                    <span className="text-sm font-bold text-main/80 break-all">{cert.id}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center space-x-2 shadow-xl shadow-primary/20"
                                    >
                                        <span>Verify Document</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
                    <div className="glass px-8 py-4 rounded-3xl flex items-center gap-4 bg-primary/5 border-primary/20 shadow-xl shadow-primary/10">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <Award className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="text-4xl font-extrabold text-main leading-tight">{Math.floor(certifications.length / 10) * 10}+</p>
                            <p className="text-xs uppercase tracking-widest text-muted font-bold">Total Certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

