import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function Education() {
    const educationData = [
        {
            degree: "Bachelor of Technology - Computer Science and Engineering",
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            duration: "2023 – 2027",
            status: "Pursuing",
            grade: "CGPA: 8.25",
            details: [
                "Focusing on Backend Development, Full-stack Web Applications, and Data Structures & Algorithms.",
                "Consistently maintaining strong academic performance while building practical industrial projects.",
                "Relevant coursework includes Database Management, Software Engineering, and Computer Networks."
            ]
        },
        {
            degree: "Higher Secondary Education (12th Grade)",
            institution: "Krishna Public School, Raipur",
            location: "Raipur, Chhattisgarh",
            duration: "2021 – 2022",
            status: "Completed",
            grade: "Percentage: 73%",
            details: [
                "Focus on Science stream with Mathematics and Computer Science.",
                "Participated in school-level technical quizzes and coding competitions."
            ]
        },
        {
            degree: "Secondary Education (10th Grade)",
            institution: "Krishna Public School, Raipur",
            location: "Raipur, Chhattisgarh",
            duration: "2019 – 2020",
            status: "Completed",
            grade: "CGPA: 91%",
            details: [
                "Achieved high academic excellence in foundation subjects.",
                "Active participation in extracurricular activities and science exhibitions."
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">Academic <span className="text-gradient">Journey</span></h2>
                <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl font-light">
                    A chronicle of my formal education and academic achievements that have built my technical core.
                </p>
            </div>

            <div className="space-y-10">
                {educationData.map((item, idx) => (
                    <div key={idx} className="glass-card overflow-hidden group border border-main/5 hover:border-primary/30 transition-all duration-500">
                        <div className="flex flex-col lg:flex-row">
                            {/* Content Side */}
                            <div className="p-8 md:p-12 lg:w-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <GraduationCap className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex flex-col mb-8">
                                        <div className="flex flex-wrap items-start justify-between gap-6 mb-4">
                                            <h3 className="text-2xl md:text-3xl font-black group-hover:text-primary transition-colors text-main flex-grow">{item.degree}</h3>
                                            <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right">
                                                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border flex items-center shadow-lg ${
                                                    item.status === "Pursuing" 
                                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-amber-500/10" 
                                                    : "bg-green-500/10 text-green-400 border-green-500/20 shadow-green-500/10"
                                                }`}>
                                                    <Award className="w-4 h-4 mr-2" />
                                                    {item.status}
                                                </div>
                                                {item.grade && (
                                                    <span className="text-amber-400 text-sm font-bold pl-1">{item.grade}</span>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-6 text-muted text-sm font-bold tracking-wide">
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-2 text-primary" />
                                                {item.institution}, {item.location}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-secondary" />
                                                {item.duration}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {item.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-start text-muted leading-relaxed font-light">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center space-x-2 bg-main/5 border border-main/10 px-5 py-2.5 rounded-xl text-sm font-bold text-main">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{idx === 0 ? "B.Tech CSE" : idx === 1 ? "Class 12th" : "Class 10th"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
