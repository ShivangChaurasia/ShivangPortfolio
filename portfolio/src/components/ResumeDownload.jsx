import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ResumeDownload({ className, children, onClick }) {
    const [showToast, setShowToast] = useState(false);
    
    const handleDownload = () => {
        // Show success popup
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        
        // Execute any additional onClick handlers (like closing mobile menu)
        if (onClick) onClick();
    };

    return (
        <>
            <a 
                href="https://drive.google.com/uc?export=download&id=1HAIRf59S5XCLRCeDcrMytKCrrQXcWf7X"
                download="Shivang_Chaurasia_Resume.pdf"
                className={className}
                onClick={handleDownload}
            >
                {children}
            </a>

            {/* Designed Success Popup */}
            {showToast && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-slide-up flex items-center gap-3 bg-green-500/90 backdrop-blur-md text-white px-6 py-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] border border-green-400/30">
                    <CheckCircle className="w-6 h-6 animate-pulse" />
                    <span className="font-bold tracking-wide">Resume successfully downloaded!</span>
                </div>
            )}
        </>
    );
}
