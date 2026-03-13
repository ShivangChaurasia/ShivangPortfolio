import { Award, Calendar, ExternalLink } from "lucide-react";

export default function Certifications() {
    const certifications = [
        {
            title: "Meta Front-End Developer Professional Certificate",
            issuer: "Meta",
            date: "Dec 2023",
            link: "#",
            icon: <Award className="w-6 h-6 text-yellow-400" />
        },
        {
            title: "Google Data Analytics Professional Certificate",
            issuer: "Google",
            date: "Oct 2023",
            link: "#",
            icon: <Award className="w-6 h-6 text-blue-400" />
        },
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "Aug 2023",
            link: "#",
            icon: <Award className="w-6 h-6 text-orange-400" />
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4">My <span className="text-gradient">Certifications</span></h2>
                <p className="text-gray-400 text-lg">
                    A record of my professional growth and recognized achievements in the industry.
                </p>
            </div>

            <div className="space-y-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="glass p-6 rounded-2xl flex items-center justify-between hover:border-primary/30 transition-all group"
                    >
                        <div className="flex items-center space-x-6">
                            <div className="bg-white/5 p-4 rounded-xl group-hover:bg-white/10 transition-colors">
                                {cert.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{cert.title}</h3>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <span className="font-medium text-gray-400">{cert.issuer}</span>
                                    <span className="mx-2">•</span>
                                    <Calendar className="w-3 h-3 mr-1" />
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href={cert.link}
                            className="p-2 glass rounded-lg hover:bg-white/10 transition-all flex items-center space-x-2 text-sm font-medium"
                        >
                            <span>Verify</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}