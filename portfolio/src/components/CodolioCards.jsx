import { useState } from "react";
import { Terminal, Code2 } from "lucide-react";
import profileCard from "../assets/Codolio/profileCard.png";
import devCard from "../assets/Codolio/devCard.png";

export default function CodolioCards() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="w-full flex flex-col items-center py-16 px-6">
            <div className="max-w-4xl w-full flex flex-col items-center">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="text-3xl font-black text-main mb-4">Code <span className="text-gradient">Identities</span></h2>
                    <p className="text-muted text-sm max-w-lg">
                        Explore my coding journey and development stats directly from Codolio.
                    </p>
                </div>

                {/* Toggle Buttons */}
                <div className="flex p-1.5 bg-main/5 rounded-full border border-main/10 mb-12 shadow-inner">
                    <button
                        onClick={() => setIsFlipped(false)}
                        className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
                            !isFlipped 
                            ? "bg-amber-400 text-slate-900 shadow-lg scale-105" 
                            : "text-muted hover:text-main"
                        }`}
                    >
                        <Terminal className="w-4 h-4" />
                        <span>Problem Solving</span>
                    </button>
                    <button
                        onClick={() => setIsFlipped(true)}
                        className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
                            isFlipped 
                            ? "bg-orange-500 text-white shadow-lg scale-105" 
                            : "text-muted hover:text-main"
                        }`}
                    >
                        <Code2 className="w-4 h-4" />
                        <span>Development</span>
                    </button>
                </div>

                {/* 3D Card Container */}
                <div className="perspective-1000 w-full max-w-[380px] aspect-[1/1.6]">
                    <div 
                        className={`relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${
                            isFlipped ? "rotate-y-180" : ""
                        }`}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        {/* Front: Profile Card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden">
                            <div className="w-full h-full rounded-3xl overflow-hidden border border-main/10 shadow-2xl bg-white">
                                <img 
                                    src={profileCard} 
                                    alt="Codolio Profile Card" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Back: Dev Card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                            <div className="w-full h-full rounded-3xl overflow-hidden border border-main/10 shadow-2xl bg-white">
                                <img 
                                    src={devCard} 
                                    alt="Codolio Dev Card" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hint */}
                <p className="mt-8 text-xs text-muted font-medium tracking-widest uppercase animate-pulse">
                    Click the card or buttons to rotate
                </p>
            </div>
        </div>
    );
}
