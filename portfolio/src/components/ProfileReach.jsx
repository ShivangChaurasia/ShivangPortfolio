import React, { useEffect, useState } from 'react';
import { db, doc, onSnapshot, updateDoc, increment, setDoc, getDoc } from '../firebase';
import { Globe, TrendingUp } from 'lucide-react';

const ProfileReach = () => {
    const [views, setViews] = useState(null);
    const analyticsDocRef = doc(db, 'analytics', 'portfolio_stats');

    useEffect(() => {
        // Increment view count logic
        const updateViews = async () => {
            try {
                const hasVisited = localStorage.getItem('hasVisitedProfile');
                
                if (!hasVisited) {
                    const docSnap = await getDoc(analyticsDocRef);
                    if (docSnap.exists()) {
                        await updateDoc(analyticsDocRef, {
                            totalViews: increment(1)
                        });
                    } else {
                        // Initialize if document doesn't exist
                        await setDoc(analyticsDocRef, {
                            totalViews: 1
                        });
                    }
                    localStorage.setItem('hasVisitedProfile', 'true');
                }
            } catch (error) {
                console.error("Error updating views:", error);
            }
        };

        updateViews();

        // Listen for real-time updates
        const unsubscribe = onSnapshot(analyticsDocRef, (doc) => {
            if (doc.exists()) {
                setViews(doc.data().totalViews);
            } else {
                setViews(0);
            }
        }, (error) => {
            console.error("Firestore Permission Error: Please update your security rules to allow access to the 'analytics' collection.", error);
            setViews(0); // Set to 0 so it at least renders if allowed, or we can keep it null to hide
        });

        return () => unsubscribe();
    }, []);

    const formatCount = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num;
    };

    if (views === null) return null;

    return (
        <div className="group relative">
            {/* Soft Glow Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative flex items-center space-x-4 px-8 py-4 rounded-2xl bg-main/5 backdrop-blur-xl border border-main/10 text-muted transition-all duration-300 group-hover:border-primary/50 group-hover:scale-[1.02]">
                <div className="relative">
                    <TrendingUp className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                </div>
                
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70 leading-none mb-1">
                        Global Analytics
                    </span>
                    <span className="text-lg font-black tracking-tight text-main whitespace-nowrap">
                        Profile Reach: <span className="text-gradient ml-1">{formatCount(views)}</span>
                    </span>
                </div>
                
                <div className="h-8 w-px bg-main/10 group-hover:bg-primary/30 transition-colors mx-2"></div>
                
                <div className="hidden sm:flex items-center space-x-1 text-[10px] font-bold text-muted/60 uppercase tracking-tighter">
                    <Globe className="w-3 h-3" />
                    <span>Real-time</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileReach;
