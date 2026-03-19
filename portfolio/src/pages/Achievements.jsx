import { Trophy, Calendar, ExternalLink, Code2, GitCommit, GitPullRequest, Star, Award, Target, Flame, Activity } from "lucide-react";

import badge50Days from "../assets/Achievements/50daysBadge.png";
import badgePullShark from "../assets/Achievements/PullShark.png";
import badgeQuickDraw from "../assets/Achievements/QuickDraw.png";
import badgeYolo from "../assets/Achievements/YOLO.png";
import badgeJava from "../assets/Achievements/Java.png";
import badgePython from "../assets/Achievements/Pyhton.png";
import badgeProblemSolving from "../assets/Achievements/ProblemSolving.png";
import badgeC from "../assets/Achievements/C.png";
import badgeJs from "../assets/Achievements/Js.png";

import thumbLeetcode from "../assets/Achievements/Leetcode.png";
import thumbGithub from "../assets/Achievements/Github.png";
import thumbHackerrank from "../assets/Achievements/Hackerrank.png";
import thumbCodolio from "../assets/Achievements/Codolio.png";

const ImageBadge = ({ src, alt, tooltip, isMarquee, description }) => (
    <div className={`relative group/badge flex items-center ${isMarquee ? 'justify-center cursor-help marquee-item' : description ? 'justify-start w-full' : 'justify-center'}`}>
        <div className="relative cursor-help shrink-0 flex items-center justify-center">
            <img src={src} alt={alt} className={`w-16 h-16 object-contain transition-transform duration-300 drop-shadow-md ${isMarquee ? 'hover:scale-[1.2]' : 'hover:scale-110'}`} />
            {isMarquee && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-bold rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 backdrop-blur-sm border border-white/10 shadow-xl">
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                </div>
            )}
        </div>
        {!isMarquee && description && (
            <div className="ml-5 flex flex-col">
                <span className="text-sm font-bold text-main">{alt}</span>
                <span className="text-xs text-muted leading-relaxed mt-0.5">{description}</span>
            </div>
        )}
    </div>
);

export default function Achievements() {
    const platforms = [
        {
            name: "LeetCode",
            icon: <Code2 className="w-8 h-8" />,
            thumbnail: thumbLeetcode,
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
                <div className="flex flex-col gap-4 w-full">
                    <ImageBadge isMarquee={false} src={badge50Days} alt="50 Days Badge" description="Earned for maintaining a 50-day consistent problem-solving streak." />
                </div>
            )
        },
        {
            name: "GitHub",
            icon: <GitCommit className="w-8 h-8" />,
            thumbnail: thumbGithub,
            url: "https://github.com/ShivangChaurasia",
            color: "text-gray-300",
            bg: "bg-gray-500/10",
            borderHover: "hover:border-gray-400/50",
            title: "Open Source Activity",
            statement: "Highly active contributor and creator of multiple successful public repositories.",
            stats: [
                { label: "Yearly Contributions", value: "910", icon: <Activity className="w-4 h-4" /> },
                { label: "Commits in 2026", value: "622", icon: <GitCommit className="w-4 h-4" /> },
                { label: "Public Repositories", value: "27", icon: <Code2 className="w-4 h-4" /> },
                { label: "Repository Stars", value: "15", icon: <Star className="w-4 h-4 text-yellow-500" /> },
                { label: "Pull Requests", value: "4", icon: <GitPullRequest className="w-4 h-4" /> }
            ],
            customBadgeRenderer: () => (
                <div className="flex flex-col gap-5 w-full">
                    <ImageBadge isMarquee={false} src={badgePullShark} alt="Pull Shark" description="Merged multiple pull requests in prominent public repositories." />
                    <ImageBadge isMarquee={false} src={badgeQuickDraw} alt="Quickdraw" description="Closed issues or pull requests within 5 minutes of opening." />
                    <ImageBadge isMarquee={false} src={badgeYolo} alt="YOLO" description="Merged a pull request without code review." />
                </div>
            )
        },
        {
            name: "HackerRank",
            icon: <Award className="w-8 h-8" />,
            thumbnail: thumbHackerrank,
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
                <div className="flex flex-wrap gap-4 justify-center">
                    <ImageBadge isMarquee={false} src={badgeJava} alt="Java (4★)" tooltip="Java" />
                    <ImageBadge isMarquee={false} src={badgePython} alt="Python (3★)" tooltip="Python" />
                    <ImageBadge isMarquee={false} src={badgeProblemSolving} alt="Problem Solving" tooltip="Problem Solving" />
                    <ImageBadge isMarquee={false} src={badgeC} alt="C Language" tooltip="C Language" />
                    <ImageBadge isMarquee={false} src={badgeJs} alt="10 Days of JS" tooltip="10 Days of JS" />
                </div>
            )
        },
        {
            name: "Codolio",
            icon: <Target className="w-8 h-8" />,
            thumbnail: thumbCodolio,
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

            {/* Train Marquee Section for All Badges */}
            <div className="mb-20 overflow-hidden relative group/marquee pt-16 pb-8">
                <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none"></div>
                
                <div className="animate-marquee flex items-center space-x-12 px-6">
                    {/* Double the list for seamless infinite scrolling */}
                    {[...Array(2)].map((_, arrayIndex) => (
                        <div key={arrayIndex} className="flex items-center space-x-12 shrink-0">
                            <ImageBadge isMarquee={true} src={badge50Days} alt="50 Days" tooltip="LeetCode 50 Days" />
                            <ImageBadge isMarquee={true} src={badgePullShark} alt="Pull Shark" tooltip="GitHub Pull Shark" />
                            <ImageBadge isMarquee={true} src={badgeQuickDraw} alt="Quickdraw" tooltip="GitHub Quickdraw" />
                            <ImageBadge isMarquee={true} src={badgeYolo} alt="YOLO" tooltip="GitHub YOLO" />
                            <ImageBadge isMarquee={true} src={badgeJava} alt="Java" tooltip="HackerRank Java" />
                            <ImageBadge isMarquee={true} src={badgePython} alt="Python" tooltip="HackerRank Python" />
                            <ImageBadge isMarquee={true} src={badgeProblemSolving} alt="Problem Solving" tooltip="HR Problem Solving" />
                            <ImageBadge isMarquee={true} src={badgeC} alt="C" tooltip="HackerRank C Language" />
                            <ImageBadge isMarquee={true} src={badgeJs} alt="JS" tooltip="HackerRank 10 Days JS" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {platforms.map((platform, idx) => (
                    <a
                        key={idx}
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`glass-card p-6 md:p-8 rounded-3xl border border-main/10 flex flex-col h-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${platform.borderHover}`}
                    >
                        {/* Thumbnail */}
                        {platform.thumbnail && (
                            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative border border-main/5">
                                <img src={platform.thumbnail} alt={`${platform.name} profile`} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                            </div>
                        )}

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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 items-start">
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
