import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Mail, MessageSquare, Send, User, Github, Linkedin, Twitter, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("idle");

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
        { icon: <Phone />, label: "Phone", value: "+91 9660967612", link: "tel:+919660967612" },
        { icon: <Linkedin />, label: "LinkedIn", value: "shivang-chaurasia", link: "https://www.linkedin.com/in/shivang-chaurasia" }
    ];

    const socials = [
        { icon: <Github />, link: "https://github.com/ShivangChaurasia" },
        { icon: <Linkedin />, link: "https://www.linkedin.com/in/shivang-chaurasia" },
        { icon: <Twitter />, link: "#" }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in relative">
            <div className="text-center mb-16 lg:mb-24">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Get in <span className="text-gradient">Touch</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Contact Info */}
                <div className="lg:sticky lg:top-40">
                    <div className="space-y-10 mb-12">
                        {contactInfo.map((info, idx) => (
                            <a 
                                href={info.link} 
                                key={idx} 
                                className="flex items-center space-x-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-black/20">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">{info.label}</p>
                                    <p className="text-lg font-bold text-gray-200 group-hover:text-primary transition-colors">{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="flex space-x-6">
                        {socials.map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 glass flex items-center justify-center rounded-2xl hover:text-primary hover:scale-110 active:scale-95 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-40 h-40 bg-secondary/10 blur-3xl rounded-full"></div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        {status === "success" && (
                            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-sm animate-fade-in flex items-center">
                                <BadgeCheck className="w-5 h-5 mr-3" />
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-sm animate-fade-in">
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-sm font-bold text-gray-400 tracking-wider">FULL NAME</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary/50 transition-all font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-gray-400 tracking-wider">EMAIL ADDRESS</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary/50 transition-all font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-400 tracking-wider">SUBJECT</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-all font-medium"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-400 tracking-wider">YOUR MESSAGE</label>
                            <div className="relative group">
                                <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary/50 transition-all font-medium resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-primary hover:bg-primary/80 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50 flex items-center justify-center space-x-3 text-lg"
                        >
                            <span>{status === "submitting" ? "SENDING..." : "SEND MESSAGE"}</span>
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Floating WhatsApp Icon */}
            <a
                href="https://wa.me/919660967612"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group shadow-[#25D366]/40"
            >
                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 bg-white rounded-full border-2 border-[#25D366] animate-ping"></div>
                <MessageCircle className="w-8 h-8" />
                <span className="absolute right-20 bg-white text-[#25D366] px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Chat with me!
                </span>
            </a>
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