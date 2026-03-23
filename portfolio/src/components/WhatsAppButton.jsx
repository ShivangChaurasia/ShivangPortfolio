import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
            <div className="mb-2 bg-white dark:bg-gray-800 text-[#25D366] text-xs font-bold px-3 py-1.5 rounded-2xl shadow-[0_0_15px_rgba(37,211,102,0.3)] animate-bounce relative">
                Let's chat! 👋
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white dark:bg-gray-800 rotate-45"></div>
            </div>
            <a
                href="https://wa.me/919660967612?text=Hi%2C%20Let%27s%20Connect."
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group shadow-[#25D366]/40 relative"
            >
                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 bg-white rounded-full border-2 border-[#25D366] animate-ping"></div>
                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-white"></div>
                <MessageCircle className="w-8 h-8 relative z-10" />
                <span className="absolute right-20 bg-white dark:bg-gray-800 text-[#25D366] px-4 py-2 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(37,211,102,0.3)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Chat with me!
                </span>
            </a>
        </div>
    );
}
