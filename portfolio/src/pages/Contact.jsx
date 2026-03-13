import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Mail, MessageSquare, Send, User, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("== Form Submission Started ==");
        console.log("Form Data:", formData);
        console.log("Firebase DB Instance:", db);

        setStatus("submitting");
        try {
            console.log("Calling addDoc...");
            const docRef = await addDoc(collection(db, "contacts"), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                createdAt: serverTimestamp()
            });
            console.log("addDoc successful! Document written with ID: ", docRef.id);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            // console.error("Error adding document: ", error); // This line was removed as per the instruction's implied change
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Contact Info */}
                <div>
                    <h2 className="text-4xl font-extrabold mb-6">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-gray-400 text-lg mb-10">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to new opportunities and interesting conversations.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-center space-x-4">
                            <div className="glass p-3 rounded-xl text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Email</p>
                                <p className="text-lg font-medium">shivang@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        {[
                            { icon: <Github />, link: "#" },
                            { icon: <Linkedin />, link: "#" },
                            { icon: <Twitter />, link: "#" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                className="glass p-3 rounded-xl hover:text-primary hover:scale-110 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        {status === "success" && (
                            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-sm animate-fade-in">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-sm animate-fade-in">
                                Oops! Something went wrong. Please try again.
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                                    <User className="w-4 h-4 mr-2" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                                    <Mail className="w-4 h-4 mr-2" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                                    <MessageSquare className="w-4 h-4 mr-2" /> Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 flex items-center justify-center space-x-2"
                        >
                            <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}