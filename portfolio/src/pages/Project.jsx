import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

// Asset Imports
import AspirelensImg from "../assets/projects/Aspirelens.png";
import WipeDataImg from "../assets/projects/WipeData.png";
import StudySyncImg from "../assets/projects/StudySync.png";
import RupeekImg from "../assets/projects/Rupeek.png";
import GiftRecommenderImg from "../assets/projects/GiftRecommender.png";
import LeaveOrbitImg from "../assets/projects/leaveOrbit.png";
import BMICalculatorImg from "../assets/projects/BMICalculator.png";
import EcoRhythmImg from "../assets/projects/EcoRhythm.png";
import CounterAppImg from "../assets/projects/CounterApp.png";

export default function Projects() {
    const projects = [
        {
            title: "AspireLens",
            subtitle: "AI-Powered Career Intelligence Platform",
            description: "A comprehensive AI-driven career guidance ecosystem. Features intelligent tests, LLaMA-powered counselling, and a robust admin control system for personalized student growth.",
            tags: ["React (Vite)", "Node.js", "MongoDB", "Groq AI", "Tailwind CSS", "JWT"],
            github: "https://github.com/ShivangChaurasia/Aspirelens",
            live: "https://careerwithaspirelens.vercel.app/",
            image: AspirelensImg
        },
        {
            title: "Rupeek",
            subtitle: "Master Your Finances Launcher",
            description: "A premium finance tracking application featuring secure Firebase authentication, interactive Recharts dashboards, and smart transaction management for personal wealth.",
            tags: ["React", "Firebase", "Tailwind CSS", "Recharts", "Lottie React", "Context API"],
            github: "https://github.com/ShivangChaurasia/Rupeek-TheFinTracker",
            live: "https://rupeekfinances.vercel.app/",
            image: RupeekImg
        },
        {
            title: "LeaveOrbit",
            subtitle: "Intelligent Leave Management System",
            description: "Professional-grade employee management platform with automated workflows, real-time status tracking, and organizational compliance tools using the MERN stack.",
            tags: ["React", "Node.js", "Express", "MongoDB", "Framer Motion", "Firebase SDK"],
            github: "https://github.com/ShivangChaurasia/LeaveOrbit-Employee-Leave-Manager",
            live: "https://leaveorbit.vercel.app/",
            image: LeaveOrbitImg
        },
        {
            title: "WipeData",
            subtitle: "Privacy-Focused Data Janitor",
            description: "A specialized utility for secure data cleaning and privacy management, ensuring complete removal of sensitive information from web environments.",
            tags: ["Node.js", "Express", "MongoDB", "Tailwind CSS", "API Security"],
            github: "https://github.com/ShivangChaurasia/Wipe-Data",
            live: "https://wipe-data-sjp5.vercel.app/",
            image: WipeDataImg
        },
        {
            title: "GiftRecommender",
            subtitle: "AI-Driven Personal Shopper",
            description: "Intelligent chatbot that generates personalized gift ideas using natural language processing, budget-aware filtering, and real-time query detection.",
            tags: ["JavaScript", "Groq AI", "Particles.js", "Tailwind CSS", "Bootstrap"],
            github: "https://github.com/ShivangChaurasia/AI-Gift-Recommender",
            live: "https://giftrecommender.vercel.app/",
            image: GiftRecommenderImg
        },
        {
            title: "StudySync",
            subtitle: "Smart Study Planner & Sync",
            description: "A lightweight academic organizer with subject management, priority tracking, and persistent schedule planning using purely local data architectures.",
            tags: ["HTML5", "Vanilla JS", "LocalStorage", "Tailwind CSS", "Lottie Animation"],
            github: "https://github.com/ShivangChaurasia/StudySync",
            live: "https://shivangchaurasia.github.io/StudySync/",
            image: StudySyncImg
        },
        {
            title: "EcoRhythm",
            subtitle: "Environmental Impact Reporter",
            description: "Social-impact platform enabling users to report civic issues like pollution and injured animals. Features live location fetching and NGO connectivity.",
            tags: ["HTML5", "CSS3", "JavaScript", "Google Maps API", "Web Services"],
            github: "https://github.com/ShivangChaurasia/Environmental-Issue-Reporting",
            live: "https://shivangchaurasia.github.io/Environmental-Issue-Reporting/",
            image: EcoRhythmImg
        },
        {
            title: "BMI Calculator",
            subtitle: "Health & Fitness Utility",
            description: "A sleek, responsive health tool for rapid Body Mass Index calculation with real-time feedback and category interpretation.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            github: "https://github.com/ShivangChaurasia/BMICalculator",
            live: "https://shivangchaurasia.github.io/BMICalculator/",
            image: BMICalculatorImg
        },
        {
            title: "CounterApp",
            subtitle: "Minimalist Utility Tool",
            description: "A fast, React-based state management demonstration tool designed for high-performance interaction and clean UI feedback.",
            tags: ["React", "Tailwind CSS", "State Management"],
            github: "https://github.com/ShivangChaurasia/CounterApp",
            live: "https://shivangchaurasia.github.io/CounterApp/",
            image: CounterAppImg
        },
        {
            title: "TodoApp",
            subtitle: "Task Persistence Manager",
            description: "A robust task management application focusing on user experience, data persistence, and organized list architectures.",
            tags: ["React", "Tailwind CSS", "LocalStorage", "Modern UI"],
            github: "https://github.com/ShivangChaurasia/TodoApp",
            live: "https://shivangchaurasia.github.io/TodoApp/",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1600"
        },
        {
            title: "PrithviPulse",
            subtitle: "Community Environmental Platform",
            description: "An upcoming community-driven platform to report environmental damage and connect with NGOs to promote faster civic action and awareness.",
            tags: ["MERN Stack", "Google Maps API", "Cloudinary", "Coming Soon"],
            github: "#",
            live: "Coming Soon",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in text-main">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">Full-Stack <span className="text-gradient">Portfolio</span></h2>
                <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light italic">
                    "Building scalable solutions from frontend elegance to backend precision."
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-main/5 bg-main/5 flex flex-col"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            
                            {project.live !== "Coming Soon" && project.live !== "#" && (
                                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-2 border border-white/10">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Live</span>
                                </div>
                            )}

                            {project.live === "Coming Soon" && (
                                <div className="absolute top-6 left-6 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-2 border border-primary/30">
                                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">In Progress</span>
                                </div>
                            )}

                            <div className="absolute bottom-6 right-6 flex space-x-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                                {project.github !== "#" && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {project.live !== "Coming Soon" && project.live !== "#" && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="p-10 flex flex-col flex-grow">
                            <div className="mb-6">
                                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors text-main">{project.title}</h3>
                                <p className="text-gradient font-bold text-xs tracking-[0.1em] uppercase">{project.subtitle}</p>
                            </div>
                            
                            <p className="text-muted text-sm mb-8 leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 bg-main/5 border border-main/10 rounded-xl text-muted group-hover:text-primary group-hover:border-primary/20 transition-all"
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
