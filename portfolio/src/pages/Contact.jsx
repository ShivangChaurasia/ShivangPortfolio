import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Mail, MessageSquare, Send, User, Github, Linkedin, Phone } from "lucide-react";
import Lottie from "lottie-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("idle");
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("https://assets3.lottiefiles.com/packages/lf20_vnikrcia.json")
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.log("Lottie load error:", err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                createdAt: serverTimestamp()
            });
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setStatus("error");
        }
    };

    const contactInfo = [
        { icon: <Mail />, label: "Email", value: "shiva17ng@gmail.com", link: "mailto:shiva17ng@gmail.com" },
        { icon: <Phone />, label: "Phone", value: "+91 9660967612", link: "tel:+919660967612" }
    ];

    const socials = [
        { icon: <Github />, link: "https://github.com/ShivangChaurasia" },
        { icon: <Linkedin />, link: "https://www.linkedin.com/in/shivang-chaurasia-754232297/" }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in relative">
            <div className="text-center mb-16 lg:mb-24">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">Let's <span className="text-gradient">Connect</span></h2>
                <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Have a vision? Let's build it together. I'm always open to new opportunities and collaborations.
                </p>
            </div>

            <div className="glass-card p-8 md:p-12 relative overflow-hidden max-w-6xl mx-auto">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-40 h-40 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-stretch">
                    {/* Left Side: Contact Info */}
                    <div className="flex flex-col justify-center items-center h-full space-y-12">
                        <div className="space-y-8 w-full max-w-sm">
                            {contactInfo.map((info, idx) => (
                                <a 
                                    href={info.link} 
                                    key={idx} 
                                    className="flex items-center space-x-6 group hover:bg-main/5 p-4 rounded-3xl transition-all duration-300 w-full"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-main/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-black/20 shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted uppercase font-black tracking-widest mb-1">{info.label}</p>
                                        <p className="text-lg font-bold text-main group-hover:text-primary transition-colors">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="flex space-x-6 justify-center">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-14 h-14 bg-main/5 border border-main/10 flex items-center justify-center rounded-2xl hover:bg-primary hover:text-white hover:scale-110 shadow-lg active:scale-95 transition-all duration-300 text-main"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="space-y-8 bg-main/5 p-8 rounded-3xl border border-main/5 shadow-2xl backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-main mb-2">Send a Message</h3>
                            
                            {status === "success" && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-sm animate-fade-in flex items-center">
                                    <BadgeCheck className="w-5 h-5 mr-3" />
                                    Message sent successfully! Thank you for reaching out; I will review it and get back to you promptly.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-sm animate-fade-in">
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-muted tracking-wider">FULL NAME</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-main/5 border border-main/10 rounded-2xl pl-12 pr-5 py-3 focus:outline-none focus:border-primary/50 transition-all font-medium text-sm text-main"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-muted tracking-wider">EMAIL ADDRESS</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-main/5 border border-main/10 rounded-2xl pl-12 pr-5 py-3 focus:outline-none focus:border-primary/50 transition-all font-medium text-sm text-main"
                                            placeholder="example@email.ext"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-muted tracking-wider">SUBJECT</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-main/5 border border-main/10 rounded-2xl px-5 py-3 focus:outline-none focus:border-primary/50 transition-all font-medium text-sm text-main"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-muted tracking-wider">YOUR MESSAGE</label>
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-main/5 border border-main/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary/50 transition-all font-medium resize-none text-sm text-main"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-primary hover:bg-primary/80 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50 flex items-center justify-center space-x-3"
                            >
                                <span>{status === "submitting" ? "SENDING..." : "SEND MESSAGE"}</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

function BadgeCheck({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
            <path d="m9 12 2 2 4-4"></path>
        </svg>
    )
}