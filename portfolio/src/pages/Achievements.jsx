import { Trophy, Calendar, ExternalLink, Code2, GitCommit, GitPullRequest, Star, Award, Target, Flame, Activity } from "lucide-react";

// HackerRank Star Component
const HRStar = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="w-4 h-4 text-emerald-500 drop-shadow-sm">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

// Custom Badge Renders
const LeetCodeBadge = () => (
    <div className="flex flex-col items-center justify-center p-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 border-2 border-orange-300 relative">
            <div className="absolute inset-1 border border-orange-200/50 rounded-full"></div>
            <span className="text-white font-black text-xl z-10 drop-shadow-md">50</span>
            <div className="absolute -bottom-2 bg-gray-900 border border-orange-500/50 text-[9px] font-bold px-2 py-0.5 rounded-full text-orange-400">
                DAYS
            </div>
        </div>
    </div>
);

const GitHubHexBadge = ({ title, bgGrad, iconColor }) => (
    <div className="flex flex-col items-center justify-center p-2">
        <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Hexagon shape using svg/clip-path equivalent */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-xl">
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#gh-grad)" className="stroke-gray-600" strokeWidth="2" />
                <defs>
                    <linearGradient id="gh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                </defs>
            </svg>
            <div className={`relative z-10 w-8 h-8 rounded-full ${bgGrad} flex items-center justify-center shadow-inner`}>
                <GitCommit className={`w-4 h-4 ${iconColor}`} />
            </div>
        </div>
        <span className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-wide">{title}</span>
    </div>
);

const HackerRankBadge = ({ title, stars }) => (
    <div className="flex flex-col items-center p-2 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/30 transition-colors w-28">
        <div className="w-12 h-12 rounded-full border-2 border-green-500/20 bg-green-500/5 flex items-center justify-center mb-2">
            <Code2 className="w-6 h-6 text-green-500" />
        </div>
        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1 text-center h-8 flex items-center">{title}</span>
        <div className="flex items-center space-x-0.5 mt-auto">
            {[...Array(5)].map((_, i) => (
                <div key={i} className={i < stars ? "opacity-100" : "opacity-20 grayscale"}>
                    <HRStar />
                </div>
            ))}
        </div>
    </div>
);

export default function Achievements() {
    const platforms = [
        {
            name: "LeetCode",
            icon: <Code2 className="w-8 h-8" />,
            url: "https://leetcode.com/u/shiva17ng/",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            borderHover: "hover:border-amber-500/50",
            title: "DSA Problem Solving",
            statement: "Consistent problem solver with a strong focus on Data Structures & Algorithms.",
            stats: [
                { label: "Problems Solved", value: "249 (151E, 90M, 8H)", icon: <Target className="w-4 h-4" /> },
                { label: "Coding Streak", value: "32 Days", icon: <Flame className="w-4 h-4 text-orange-500" /> },
                { label: "Active Days", value: "142 Days", icon: <Calendar className="w-4 h-4" /> },
                { label: "Contest Rating", value: "1446 (Top 64.26%)", icon: <Trophy className="w-4 h-4 text-yellow-500" /> },
                { label: "Past Year Submissions", value: "794", icon: <Activity className="w-4 h-4" /> }
            ],
            customBadgeRenderer: () => (
                <div className="flex gap-4">
                    <div className="relative group/badge cursor-help">
                        <LeetCodeBadge />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-bold rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 backdrop-blur-sm border border-white/10 shadow-xl">
                            50 Days Badge 2026
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            name: "GitHub",
            icon: <GitCommit className="w-8 h-8" />,
            url: "https://github.com/ShivangChaurasia",
            color: "text-gray-300",
            bg: "bg-gray-500/10",
            borderHover: "hover:border-gray-400/50",
            title: "Open Source Activity",
            statement: "Highly active contributor and creator of multiple successful public repositories.",
            stats: [
                { label: "Yearly Contributions", value: "872", icon: <Activity className="w-4 h-4" /> },
                { label: "Commits in 2026", value: "573", icon: <GitCommit className="w-4 h-4" /> },
                { label: "Public Repositories", value: "27", icon: <Code2 className="w-4 h-4" /> },
                { label: "Repository Stars", value: "11", icon: <Star className="w-4 h-4 text-yellow-500" /> },
                { label: "Pull Requests", value: "4", icon: <GitPullRequest className="w-4 h-4" /> }
            ],
            customBadgeRenderer: () => (
                <div className="flex gap-4">
                    <div className="relative group/badge cursor-help">
                        <GitHubHexBadge title="Pull Shark" bgGrad="bg-gradient-to-br from-blue-400 to-indigo-600" iconColor="text-white" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-bold rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 backdrop-blur-sm border border-white/10 shadow-xl">
                            Pull Shark Achievement
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                        </div>
                    </div>
                    <div className="relative group/badge cursor-help">
                        <GitHubHexBadge title="Quickdraw" bgGrad="bg-gradient-to-br from-amber-400 to-orange-600" iconColor="text-white" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-bold rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 backdrop-blur-sm border border-white/10 shadow-xl">
                            Quickdraw Achievement
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            name: "HackerRank",
            icon: <Award className="w-8 h-8" />,
            url: "https://www.hackerrank.com/profile/shiva17ng",
            color: "text-green-500",
            bg: "bg-green-500/10",
            borderHover: "hover:border-green-500/50",
            title: "Skill Certifications",
            statement: "Demonstrated proficiency across multiple languages and problem-solving domains.",
            stats: [
                { label: "Platform Status", value: "Multi-Badge Earner", icon: <Trophy className="w-4 h-4" /> }
            ],
            customBadgeRenderer: () => (
                <div className="flex flex-wrap gap-3 justify-center">
                    <HackerRankBadge title="Java" stars={4} />
                    <HackerRankBadge title="Python" stars={3} />
                    <HackerRankBadge title="Problem Solving" stars={2} />
                    <HackerRankBadge title="C Language" stars={1} />
                </div>
            )
        },
        {
            name: "Codolio",
            icon: <Target className="w-8 h-8" />,
            url: "https://codolio.com/profile/shiva17ng",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            borderHover: "hover:border-blue-500/50",
            title: "Competitive Programming",
            statement: "Ranked globally for competitive programming and fundamental problem solving.",
            stats: [
                { label: "Problems Solved", value: "81 (GFG & HR)", icon: <Code2 className="w-4 h-4" /> },
                { label: "CodeChef Challenges", value: "9", icon: <Activity className="w-4 h-4" /> },
                { label: "Global Rank (C Score)", value: "4124", icon: <Trophy className="w-4 h-4 text-yellow-500" /> },
                { label: "Global Rank (Total Qs)", value: "14600", icon: <Target className="w-4 h-4 text-blue-400" /> }
            ],
            badges: [
                { name: "Global Ranker", icon: "🌍" }
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in relative">
            <div className="text-center mb-16 lg:mb-24">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">Platform <span className="text-gradient">Achievements</span></h2>
                <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light">
                    Highlighting my coding discipline, open-source contributions, and platform rankings.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {platforms.map((platform, idx) => (
                    <a
                        key={idx}
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`glass-card p-8 rounded-3xl border border-main/10 flex flex-col h-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${platform.borderHover}`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <div className={`w-14 h-14 rounded-2xl ${platform.bg} ${platform.color} flex items-center justify-center shadow-lg`}>
                                    {platform.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-main group-hover:text-primary transition-colors">{platform.name}</h3>
                                    <p className="text-sm font-bold text-muted uppercase tracking-widest">{platform.title}</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-main/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <ExternalLink className="w-5 h-5 text-main group-hover:text-white" />
                            </div>
                        </div>

                        {/* Statement */}
                        <p className="text-muted mb-6 leading-relaxed font-light">
                            {platform.statement}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-grow">
                            {platform.stats.map((stat, i) => (
                                <div key={i} className="flex items-center p-3 rounded-xl bg-main/5 border border-main/5">
                                    <div className="mr-3 text-muted">{stat.icon}</div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-muted uppercase tracking-wider">{stat.label}</span>
                                        <span className="text-sm font-semibold text-main">{stat.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Badges Section */}
                        {(platform.customBadgeRenderer || (platform.badges && platform.badges.length > 0)) && (
                            <div className="mt-auto pt-6 border-t border-main/10 flex flex-col items-center sm:items-start">
                                <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Badges & Recognition</p>
                                {platform.customBadgeRenderer ? (
                                    platform.customBadgeRenderer()
                                ) : (
                                    <div className="flex flex-wrap gap-3">
                                        {platform.badges.map((badge, bIdx) => (
                                            <div key={bIdx} className="relative group/badge flex items-center justify-center px-3 py-2 bg-main/5 hover:bg-main/10 border border-main/10 rounded-xl cursor-help transition-colors">
                                                <span className="text-base font-medium text-main flex items-center gap-2">
                                                    {badge.name} <span className="text-lg">{badge.icon}</span>
                                                </span>
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-bold rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 backdrop-blur-sm border border-white/10 shadow-xl">
                                                    {badge.name} Earner
                                                    {/* Tooltip Arrow */}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                        
                        <div className="mt-8 relative overflow-hidden group/btn px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold text-center text-sm transition-all hover:bg-primary hover:text-white">
                            View {platform.name} Profile
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
