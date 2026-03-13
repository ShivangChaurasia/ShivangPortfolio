import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919660967612?text=Hi%2C%20Let%27s%20Connect."
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group shadow-[#25D366]/40"
        >
            <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 bg-white rounded-full border-2 border-[#25D366] animate-ping"></div>
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-20 bg-white text-[#25D366] px-4 py-2 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(37,211,102,0.3)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Chat with me!
            </span>
        </a>
    );
}
