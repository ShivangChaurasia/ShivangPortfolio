import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(true);
    const [size, setSize] = useState({ width: 450, height: 500 });
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! I'm Shivang's AI Assistant. How can I help you regarding his portfolio or experience?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const startResize = (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = size.width;
        const startHeight = size.height;

        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            // Dragging UP decreases Y, which means we want to INCREASE height
            const deltaY = startY - moveEvent.clientY;

            setSize({
                width: Math.max(300, Math.min(startWidth + deltaX, window.innerWidth * 0.9)),
                height: Math.max(400, Math.min(startHeight + deltaY, window.innerHeight * 0.85))
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const callGemini = async (promptCtx) => {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                systemInstruction: {
                    parts: [{ text: "You are Shivang Chaurasia's AI assistant. You are chatting directly with recruiters visiting his portfolio. Act like a friendly, helpful human assistant. Keep your answers short, simple, and easy to understand, while still being explanatory about his skills, experience, and projects." }]
                },
                contents: [{ parts: [{ text: promptCtx }] }]
            })
        });
        if (!response.ok) throw new Error("Gemini API Error");
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    };

    const callGroq = async (promptCtx) => {
        const response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [
                    { role: "system", content: "You are Shivang Chaurasia's AI assistant. You are chatting directly with recruiters visiting his portfolio. Act like a friendly, helpful human assistant. Keep your answers short, simple, and easy to understand, while still being explanatory about his skills, experience, and projects." },
                    { role: "user", content: promptCtx }
                ]
            })
        });
        if (!response.ok) throw new Error("Groq API Error");
        const data = await response.json();
        return data.choices[0].message.content;
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        const promptCtx = messages.map(m => `${m.role}: ${m.content}`).join("\n") + `\nuser: ${input}\nassistant:`;

        try {
            const reply = await callGemini(promptCtx);
            setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        } catch (error) {
            console.error("Gemini failed, trying Groq...", error);
            try {
                const reply = await callGroq(promptCtx);
                setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
            } catch (error2) {
                console.error("Both APIs failed", error2);
                setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I am having trouble connecting to my brain right now. Please try again later." }]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 left-6 z-50 p-4 bg-primary text-white rounded-full shadow-xl hover:bg-primary/90 transition-all transform hover:scale-105"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </button>

            {isOpen && (
                <div
                    style={{
                        width: size.width,
                        height: size.height,
                        minWidth: '300px',
                        minHeight: '400px',
                        maxWidth: '90vw',
                        maxHeight: '85vh'
                    }}
                    className="fixed bottom-24 left-6 z-50 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up"
                >
                    <div className="bg-primary p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <Bot className="text-white w-6 h-6" />
                            <div>
                                <h3 className="text-white font-bold">Shivang's AI Assistant</h3>
                                <p className="text-white/80 text-xs">Ask me anything about Shivang</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onMouseDown={startResize}
                                className="text-white/80 hover:text-white transition-colors p-1 cursor-ne-resize"
                                title="Drag to Resize"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="9" y1="21" x2="21" y2="9"></line>
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-1"
                                title="Close Chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700"}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-800 border border-gray-700 p-3 rounded-2xl rounded-tl-none flex gap-2 items-center">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t border-gray-700 bg-gray-900">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="flex gap-2"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-gray-800 border-gray-700 text-white text-sm rounded-lg px-3 py-2 border focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
